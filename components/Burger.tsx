'use client';

import { useState } from 'react';

interface BurgerProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export default function Burger({ isOpen, onClick, className = '' }: BurgerProps) {
  return (
    <button
      onClick={onClick}
      className={`w-9 h-6 flex flex-col justify-center items-center space-y-1.5 focus:outline-none ${className}`}
      aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
    >
      <div 
        className={`w-9 h-0.5 bg-gray-900 rounded-full ${
          isOpen ? 'rotate-45 translate-y-2' : ''
        }`}
      />
      <div 
        className={`w-9 h-0.5 bg-gray-900 rounded-full ${
          isOpen ? 'opacity-0' : ''
        }`}
      />
      <div 
        className={`w-9 h-0.5 bg-gray-900 rounded-full ${
          isOpen ? '-rotate-45 -translate-y-2' : ''
        }`}
      />
    </button>
  );
}
