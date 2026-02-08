
import React from 'react';
import { ServiceCategory, ServiceProvider } from './types';

export const CATEGORIES = [
  { name: ServiceCategory.ELECTRICIAN, icon: 'fa-bolt', color: 'bg-yellow-100 text-yellow-600' },
  { name: ServiceCategory.PLUMBER, icon: 'fa-faucet', color: 'bg-blue-100 text-blue-600' },
  { name: ServiceCategory.GAS_MECHANIC, icon: 'fa-fire', color: 'bg-red-100 text-red-600' },
  { name: ServiceCategory.HOUSE_SHIFTING, icon: 'fa-truck-moving', color: 'bg-purple-100 text-purple-600' },
  { name: ServiceCategory.DRIVER, icon: 'fa-car', color: 'bg-green-100 text-green-600' },
  { name: ServiceCategory.CLEANING, icon: 'fa-broom', color: 'bg-emerald-100 text-emerald-600' },
  { name: ServiceCategory.APPLIANCE, icon: 'fa-tools', color: 'bg-amber-100 text-amber-600' },
  { name: ServiceCategory.PAINTING, icon: 'fa-paint-roller', color: 'bg-indigo-100 text-indigo-600' },
];

export const MOCK_PROVIDERS: ServiceProvider[] = [
  {
    id: '1',
    name: 'আব্দুর রহমান',
    category: ServiceCategory.ELECTRICIAN,
    rating: 4.8,
    phone: '+880-1700-000001',
    experience: '৮ বছর',
    description: 'বাসাবাড়ির ওয়ারিং এবং ইলেকট্রিক সমস্যার দক্ষ সমাধান।',
    imageUrl: 'https://picsum.photos/seed/elec1/200/200',
    isVerified: true,
    distance: '১.২ কিমি'
  },
  {
    id: '2',
    name: 'মো: করিম',
    category: ServiceCategory.PLUMBER,
    rating: 4.5,
    phone: '+880-1700-000002',
    experience: '৫ বছর',
    description: 'পাইপ লিক, পানির ট্যাব এবং বাথরুম ফিটিংসের কাজ করি।',
    imageUrl: 'https://picsum.photos/seed/plum1/200/200',
    isVerified: true,
    distance: '২.৫ কিমি'
  },
  {
    id: '3',
    name: 'সাদ্দাম হোসেন',
    category: ServiceCategory.GAS_MECHANIC,
    rating: 4.9,
    phone: '+880-1700-000003',
    experience: '১০ বছর',
    description: 'গ্যাস স্টোভ এবং লাইন মেরামতের বিশেষজ্ঞ।',
    imageUrl: 'https://picsum.photos/seed/gas1/200/200',
    isVerified: true,
    distance: '০.৮ কিমি'
  },
  {
    id: '4',
    name: 'রফিক আহমেদ',
    category: ServiceCategory.HOUSE_SHIFTING,
    rating: 4.7,
    phone: '+880-1700-000004',
    experience: '১২ বছর',
    description: 'নিরাপদ এবং দ্রুত বাসা বদল সার্ভিস।',
    imageUrl: 'https://picsum.photos/seed/move1/200/200',
    isVerified: false,
    distance: '৩.১ কিমি'
  }
];
