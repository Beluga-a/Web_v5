import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Мобильная версия - вертикальный макет с собакой внизу */}
      <div className="md:hidden w-full min-h-screen flex flex-col" style={{
        background: 'radial-gradient(circle, #ffa542 0%, #f7580c 100%)'
      }}>
        {/* Текст и кнопка */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              Доктор Тома — ветеринарная клиника
            </h1>
            <p className="text-2xl text-white font-script italic">
              безусловной любви
            </p>
          </div>

          {/* Описание услуг */}
          <p className="text-white text-lg mb-8 max-w-sm">
            Полный спектр услуг: от диагностики и лечения, до медицинского сопровождения питомцев разного вида и возраста
          </p>

          {/* Кнопка записи */}
          <button className="bg-[#496937] text-white px-8 py-4 rounded-full text-lg font-semibold uppercase flex items-center gap-3 hover:bg-[#3d5a2d] transition-colors">
            <Image 
              src="/labka.svg" 
              alt="Лапка" 
              width={24} 
              height={24}
              className="w-6 h-6"
            />
            ЗАПИСАТЬСЯ НА ПРИЕМ
          </button>
        </div>

        {/* Собака внизу */}
        <div className="w-full h-80 relative flex justify-center">
          <div className="w-full max-w-md h-full relative">
            <Image 
              src="/dog.png" 
              alt="Собака" 
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>

      {/* ПК версия - с собакой как фон */}
      <div className="hidden md:flex w-full h-screen relative overflow-hidden" style={{
        background: 'radial-gradient(circle, #ffa542 0%, #f7580c 100%)'
      }}>
        {/* Фоновое изображение собаки */}
        <div className="absolute inset-0">
          <Image 
            src="/dog.png" 
            alt="Собака" 
            fill
            className="object-cover object-right"
            priority
          />
        </div>

        {/* Текст поверх фона */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-12 pt-40 lg:px-20 text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
              Доктор Тома — ветеринарная
              <span className="block">клиника</span>
              <span className="text-4xl lg:text-5xl font-script italic block mt-2">
                безусловной любви
              </span>
            </h1>
            
            <p className="text-white text-lg mb-8 leading-relaxed">
              Полный спектр услуг: от диагностики и лечения, до медицинского сопровождения питомцев разного вида и возраста
            </p>

            <button className="bg-[#496937] text-white px-8 py-4 rounded-full text-lg font-semibold uppercase flex items-center gap-3 hover:bg-[#3d5a2d] transition-colors w-fit mx-auto">
              <Image 
                src="/labka.svg" 
                alt="Лапка" 
                width={24} 
                height={24}
                className="w-6 h-6"
              />
              ЗАПИСАТЬСЯ НА ПРИЕМ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
