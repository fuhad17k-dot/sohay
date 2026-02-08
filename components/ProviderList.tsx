
import React from 'react';
import { ServiceProvider } from '../types';

interface ProviderListProps {
  providers: ServiceProvider[];
  isAdmin: boolean;
  onDelete?: (id: string) => void;
}

const ProviderList: React.FC<ProviderListProps> = ({ providers, isAdmin, onDelete }) => {
  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  if (providers.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <i className="fas fa-user-slash text-3xl text-gray-400"></i>
        </div>
        <h3 className="text-lg font-semibold text-gray-700">কোনো প্রোভাইডার পাওয়া যায়নি</h3>
        <p className="text-gray-500 text-sm">দয়া করে অন্য কোনো ক্যাটাগরি চেষ্টা করুন।</p>
      </div>
    );
  }

  return (
    <div className="px-4 pb-24">
      <h2 className="text-lg font-bold text-gray-800 mb-4">
        {isAdmin ? 'প্রোভাইডার ম্যানেজমেন্ট' : 'সার্ভিস প্রোভাইডারগণ'}
      </h2>
      <div className="space-y-4">
        {providers.map((provider) => (
          <div key={provider.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-start space-x-4">
            <div className="relative">
              <img 
                src={provider.imageUrl} 
                alt={provider.name} 
                className="w-16 h-16 rounded-xl object-cover bg-gray-100"
              />
              {provider.isVerified && (
                <div className="absolute -top-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                  <i className="fas fa-check-circle text-blue-500 text-xs"></i>
                </div>
              )}
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-gray-900 leading-tight">{provider.name}</h3>
                  <p className="text-xs text-indigo-600 font-medium">{provider.category}</p>
                </div>
                {!isAdmin && (
                  <div className="flex items-center space-x-1 bg-yellow-50 px-1.5 py-0.5 rounded-lg">
                    <i className="fas fa-star text-yellow-500 text-[10px]"></i>
                    <span className="text-xs font-bold text-yellow-700">{provider.rating}</span>
                  </div>
                )}
              </div>
              
              <div className="mt-2 flex items-center text-[11px] text-gray-500 space-x-3">
                <span><i className="fas fa-briefcase mr-1"></i>{provider.experience}</span>
                <span><i className="fas fa-map-marker-alt mr-1"></i>{provider.distance}</span>
              </div>
              
              <p className="mt-2 text-xs text-gray-600 line-clamp-2">
                {provider.description}
              </p>

              <div className="mt-4 flex items-center space-x-2">
                {isAdmin ? (
                  <>
                    <button 
                      onClick={() => onDelete?.(provider.id)}
                      className="flex-1 bg-red-50 text-red-600 text-xs font-bold py-2.5 rounded-xl border border-red-100 hover:bg-red-100 transition-colors"
                    >
                      <i className="fas fa-trash-alt mr-2"></i>
                      মুছে ফেলুন
                    </button>
                    <button className="flex-1 bg-gray-50 text-gray-600 text-xs font-bold py-2.5 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors">
                      সম্পাদনা
                    </button>
                  </>
                ) : (
                  <>
                    <button 
                      onClick={() => handleCall(provider.phone)}
                      className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold py-2.5 rounded-xl transition-colors shadow-lg shadow-indigo-100 flex items-center justify-center"
                    >
                      <i className="fas fa-phone-alt mr-2"></i>
                      কল করুন
                    </button>
                    <button className="bg-gray-50 hover:bg-gray-100 text-gray-700 p-2.5 rounded-xl transition-colors border border-gray-200">
                      <i className="far fa-heart"></i>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProviderList;
