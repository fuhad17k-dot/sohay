
import React, { useState } from 'react';
import { ServiceCategory, ServiceProvider } from '../types';
import { CATEGORIES } from '../constants';

interface AdminDashboardProps {
  onAddProvider: (provider: ServiceProvider) => void;
  providersCount: number;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onAddProvider, providersCount }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: ServiceCategory.ELECTRICIAN,
    phone: '',
    experience: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const newProvider: ServiceProvider = {
      id: Date.now().toString(),
      name: formData.name,
      category: formData.category,
      rating: 5.0,
      phone: formData.phone,
      experience: formData.experience || 'নতুন',
      description: formData.description || 'দক্ষ সার্ভিস প্রোভাইডার।',
      imageUrl: `https://picsum.photos/seed/${Date.now()}/200/200`,
      isVerified: true,
      distance: '০ কিমি'
    };

    onAddProvider(newProvider);
    setFormData({
      name: '',
      category: ServiceCategory.ELECTRICIAN,
      phone: '',
      experience: '',
      description: ''
    });
    alert('নতুন প্রোভাইডার যোগ করা হয়েছে!');
  };

  return (
    <div className="px-4 py-6 bg-white border-b border-gray-100 shadow-sm mb-6 rounded-b-[40px]">
      <h2 className="text-xl font-bold text-indigo-900 mb-4 flex items-center">
        <i className="fas fa-user-shield mr-2"></i>
        এডমিন কন্ট্রোল প্যানেল
      </h2>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100">
          <p className="text-xs text-indigo-600 font-bold uppercase">মোট প্রোভাইডার</p>
          <p className="text-2xl font-black text-indigo-900">{providersCount}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-2xl border border-green-100">
          <p className="text-xs text-green-600 font-bold uppercase">সক্রিয় স্ট্যাটাস</p>
          <p className="text-2xl font-black text-green-900">লাইভ</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <h3 className="font-bold text-gray-800 text-sm">নতুন প্রোভাইডার যোগ করুন</h3>
        
        <input
          type="text"
          placeholder="নাম"
          value={formData.name}
          onChange={e => setFormData({...formData, name: e.target.value})}
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        <div className="flex gap-2">
          <select
            value={formData.category}
            onChange={e => setFormData({...formData, category: e.target.value as ServiceCategory})}
            className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
          >
            {CATEGORIES.map(c => (
              <option key={c.name} value={c.name}>{c.name}</option>
            ))}
          </select>
          
          <input
            type="text"
            placeholder="অভিজ্ঞতা (উদা: ৫ বছর)"
            value={formData.experience}
            onChange={e => setFormData({...formData, experience: e.target.value})}
            className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>

        <input
          type="tel"
          placeholder="ফোন নম্বর"
          value={formData.phone}
          onChange={e => setFormData({...formData, phone: e.target.value})}
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95"
        >
          তালিকায় যোগ করুন
        </button>
      </form>
    </div>
  );
};

export default AdminDashboard;
