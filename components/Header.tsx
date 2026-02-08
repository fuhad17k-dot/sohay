
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
          <i className="fas fa-hand-holding-heart text-white text-xl"></i>
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900 tracking-tight leading-none">সহায়</h1>
          <p className="text-[10px] text-gray-500 uppercase font-semibold tracking-widest mt-0.5">লোকাল সার্ভিস</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 text-gray-500 hover:text-indigo-600 transition-colors">
          <i className="fas fa-search text-lg"></i>
        </button>
        <button className="relative p-2 text-gray-500 hover:text-indigo-600 transition-colors">
          <i className="fas fa-bell text-lg"></i>
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden border border-gray-100">
          <img src="https://picsum.photos/seed/user1/64/64" alt="প্রোফাইল" />
        </div>
      </div>
    </header>
  );
};

export default Header;
