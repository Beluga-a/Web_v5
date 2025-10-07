'use client';

import Image from 'next/image';
import { useState } from 'react';
import Burger from './Burger';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="bg-white px-4 md:px-20 lg:px-5 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3 flex-shrink-0">
        <Image 
          src="/Logo.svg" 
          alt="Логотип" 
          width={43} 
          height={34}
          className="w-auto h-12"
        />
      </div>
      <div className="hidden md:block flex-shrink-0">
        <Image 
          src="/Logo2.svg" 
          alt="Логотип" 
          width={185} 
          height={25}
          className="w-auto h-5"
        />
      </div>
      <div className="flex flex-col lg:block hidden lg:items-start lg:text-left md:pl-20 flex-grow">
      <div className="text-xs text-gray-600 font-onest">
      Работаем круглосуточно
        </div>
        <div className="text-lg font-regular mb-1 font-onest">
          Подольск, ул.Чайковского, 48А
        </div>
      </div>
       <div className="flex flex-col items-center text-center flex-grow lg:pl-10 self-stretch justify-end">
        <div className="text-sm md:text-base lg:text-lg font-regular mb-1 font-onest">
          +7 495 678 32 22
        </div>
        <div className="text-xs text-gray-600 font-onest lg:hidden">
          Круглосуточно в Подольске
        </div>
      </div>
      <div className="flex-shrink-0">
        <Burger 
          isOpen={isMenuOpen} 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
        />
      </div>
    </header>

    {/* Мобильное меню */}
    {isMenuOpen && (
      <div className="fixed inset-0 z-50 bg-[#496937] flex flex-col">
        {/* Кнопка закрытия */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white text-4xl font-light"
            aria-label="Закрыть меню"
          >
            ×
          </button>
        </div>

        {/* Навигационное меню */}
        <div className="flex-1 flex flex-col items-center justify-center space-y-8">
          <div className="w-full max-w-xs">
            <nav className="flex flex-col space-y-6">
              <a href="#" className="text-white text-lg font-light hover:opacity-80 transition-opacity">
                О клинике
              </a>
              <a href="#" className="text-white text-lg font-light hover:opacity-80 transition-opacity">
                Врачи
              </a>
              <a href="#" className="text-white text-lg font-light hover:opacity-80 transition-opacity">
                Услуги
              </a>
              <a href="#" className="text-white text-lg font-light hover:opacity-80 transition-opacity">
                База знаний
              </a>
              <a href="#" className="text-white text-lg font-light hover:opacity-80 transition-opacity">
                Контакты
              </a>
            </nav>

            {/* Кнопка "мы на связи" */}
            <button className="border border-white text-white px-6 py-2 rounded text-lg font-light hover:bg-white hover:text-[#6B7C32] transition-all duration-200 w-fit mt-8">
              мы на связи
            </button>
          </div>
        </div>

        {/* Контактная информация */}
        <div className="flex flex-col items-center space-y-2 pb-8">
          <div className="text-white text-xl font-light">
            +7 495 678 32 22
          </div>
          <div className="text-white text-xl font-light">
            Подольск, ул.Чайковского, 48А
          </div>
          <div className="text-white text-sm font-light">
            Круглосуточно
          </div>
        </div>
      </div>
    )}
    </>
  );
}
