
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import CategoryGrid from './components/CategoryGrid';
import ProviderList from './components/ProviderList';
import AdminDashboard from './components/AdminDashboard';
import AIAssistant from './components/AIAssistant';
import { MOCK_PROVIDERS } from './constants';
import { ServiceCategory, ServiceProvider } from './types';

const App: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [providers, setProviders] = useState<ServiceProvider[]>(MOCK_PROVIDERS);
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);

  const filteredProviders = useMemo(() => {
    if (!selectedCategory) return providers;
    return providers.filter(p => p.category === selectedCategory);
  }, [selectedCategory, providers]);

  const handleAddProvider = (newProvider: ServiceProvider) => {
    setProviders(prev => [newProvider, ...prev]);
  };

  const handleDeleteProvider = (id: string) => {
    if (window.confirm('আপনি কি নিশ্চিত যে এই প্রোভাইডারটি মুছে ফেলতে চান?')) {
      setProviders(prev => prev.filter(p => p.id !== id));
    }
  };

  return (
    <div className="min-h-screen max-w-md mx-auto bg-gray-50 flex flex-col relative shadow-2xl">
      <Header />
      
      <main className="flex-1 pb-10">
        {/* Role Switcher Header Extension */}
        <div className="bg-white px-4 py-2 flex justify-end">
          <button 
            onClick={() => setIsAdmin(!isAdmin)}
            className={`text-[10px] font-bold px-3 py-1 rounded-full transition-all flex items-center space-x-1 border ${
              isAdmin 
                ? 'bg-indigo-600 text-white border-indigo-700' 
                : 'bg-gray-100 text-gray-500 border-gray-200'
            }`}
          >
            <i className={`fas ${isAdmin ? 'fa-user-cog' : 'fa-user'}`}></i>
            <span>{isAdmin ? 'এডমিন মোড সক্রিয়' : 'ইউজার মোড'}</span>
          </button>
        </div>

        {isAdmin ? (
          <AdminDashboard 
            onAddProvider={handleAddProvider} 
            providersCount={providers.length} 
          />
        ) : (
          /* Banner Section - Only for Users */
          <div className="px-4 py-8 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white rounded-b-[40px] shadow-lg mb-4">
            <h2 className="text-2xl font-bold mb-1">স্বাগতম!</h2>
            <p className="text-indigo-100 text-sm mb-6 opacity-90">আপনার আজ কী সেবা প্রয়োজন?</p>
            
            <div className="relative">
              <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
              <input 
                type="text" 
                placeholder="সার্ভিস খুঁজুন..." 
                className="w-full bg-white rounded-2xl py-3.5 pl-12 pr-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all text-sm"
              />
            </div>
          </div>
        )}

        {/* Categories Section */}
        {!isAdmin && (
          <CategoryGrid 
            selectedCategory={selectedCategory} 
            onSelect={setSelectedCategory} 
          />
        )}

        {/* Featured Card - Only for Users */}
        {!isAdmin && !selectedCategory && (
          <div className="px-4 mb-8">
            <div className="bg-amber-400 rounded-3xl p-6 relative overflow-hidden group">
              <div className="relative z-10 max-w-[60%]">
                <span className="inline-block bg-white/20 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-2">অফার</span>
                <h3 className="text-xl font-extrabold text-amber-900 leading-tight">পরিচ্ছন্নতা সার্ভিসে ২০% ছাড়!</h3>
                <button className="mt-4 bg-amber-900 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-amber-950 transition-colors">বুক করুন</button>
              </div>
              <i className="fas fa-broom absolute -right-6 -bottom-6 text-9xl text-amber-500/30 -rotate-12 group-hover:scale-110 transition-transform"></i>
            </div>
          </div>
        )}

        {/* Providers Section */}
        <ProviderList 
          providers={filteredProviders} 
          isAdmin={isAdmin} 
          onDelete={handleDeleteProvider}
        />
      </main>

      {/* Added AIAssistant component to provide AI-powered help features */}
      <AIAssistant />

      {/* Persistent Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/80 backdrop-blur-md border-t border-gray-100 py-3 px-8 flex justify-between items-center z-40">
        <button 
          onClick={() => {
            setIsAdmin(false);
            setSelectedCategory(null);
          }}
          className={`flex flex-col items-center space-y-1 ${!isAdmin && !selectedCategory ? 'text-indigo-600' : 'text-gray-400'}`}
        >
          <i className="fas fa-home text-lg"></i>
          <span className="text-[10px] font-bold">হোম</span>
        </button>
        <button className="flex flex-col items-center space-y-1 text-gray-400">
          <i className="fas fa-calendar-alt text-lg"></i>
          <span className="text-[10px] font-medium">বুকিং</span>
        </button>
        <div className="relative -top-6">
          <button 
            onClick={() => setIsAdmin(true)}
            className={`w-14 h-14 rounded-full text-white shadow-xl border-4 border-white flex items-center justify-center active:scale-90 transition-transform ${
              isAdmin ? 'bg-indigo-900 shadow-indigo-300' : 'bg-indigo-600 shadow-indigo-200'
            }`}
          >
            <i className={`fas ${isAdmin ? 'fa-user-shield' : 'fa-plus'} text-xl`}></i>
          </button>
        </div>
        <button className="flex flex-col items-center space-y-1 text-gray-400">
          <i className="fas fa-wallet text-lg"></i>
          <span className="text-[10px] font-medium">ওয়ালেট</span>
        </button>
        <button className="flex flex-col items-center space-y-1 text-gray-400">
          <i className="fas fa-user text-lg"></i>
          <span className="text-[10px] font-medium">প্রোফাইল</span>
        </button>
      </nav>
    </div>
  );
};

export default App;
