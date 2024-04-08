import React, { useRef, useEffect } from "react";
import Slider from "react-slick";

const Diplomes = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    }, 2000); // Автоматически переключать слайд каждые 2 секунды

    return () => clearInterval(interval); // Очистить интервал при размонтировании
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640, // Tailwind CSS breakpoint for 'sm'
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Tailwind CSS breakpoint for 'md'
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Tailwind CSS breakpoint for 'lg'
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full flex flex-col justify-between items-center">
      <h2 className="font-extrabold text-[17px] mt-4 md:mt-0 md:text-[40px] text-blue-700 mb-8">
        Diplomlar va sertifikatlar
      </h2>
      <div className="h-[150px] md:h-[300px] w-full">
        <Slider ref={sliderRef} {...settings} className="h-full flex items-center">
          {/* Ваши слайды здесь */}
          <div className="h-full p-4 flex items-stretch bg-red-700">
            Сертификат 1
          </div>
          <div className="h-full p-4 flex items-stretch bg-green-700">Сертификат 2</div>
          <div className="h-full p-4 flex items-stretch bg-gray-700">Сертификат 3</div>
          <div className="h-full p-4 flex items-stretch bg-blue-700">Сертификат 4</div>
          {/* Добавьте больше слайдов по желанию */}
        </Slider>
      </div>
    </div>
  );
};

export default Diplomes;
