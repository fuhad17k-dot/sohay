
import React from 'react';
import { CATEGORIES } from '../constants';
import { ServiceCategory } from '../types';

interface CategoryGridProps {
  onSelect: (category: ServiceCategory | null) => void;
  selectedCategory: ServiceCategory | null;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelect, selectedCategory }) => {
  return (
    <div className="px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-800">ক্যাটাগরি সমূহ</h2>
        <button 
          onClick={() => onSelect(null)}
          className="text-indigo-600 text-sm font-medium hover:underline"
        >
          সব দেখুন
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.name}
            onClick={() => onSelect(cat.name)}
            className={`flex flex-col items-center space-y-2 group transition-all duration-200 ${
              selectedCategory === cat.name ? 'scale-105' : ''
            }`}
          >
            <div className={`${cat.color} w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow ring-2 ring-transparent ${selectedCategory === cat.name ? 'ring-indigo-400' : ''}`}>
              <i className={`fas ${cat.icon} text-xl`}></i>
            </div>
            <span className={`text-[12px] font-medium text-center leading-tight h-8 flex items-center justify-center overflow-hidden ${selectedCategory === cat.name ? 'text-indigo-600 font-bold' : 'text-gray-600'}`}>
              {cat.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
