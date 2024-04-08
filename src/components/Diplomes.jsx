import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import Ser1 from "../assets/ser1.jpg";
import Ser2 from "../assets/ser2.jpg";
import Ser3 from "../assets/ser3.jpg";
// import Ser4 from "../assets/ser4.jpg";
import Ser5 from "../assets/ser5.jpg";
import Ser6 from "../assets/ser6.jpg";
// import Ser7 from "../assets/ser7.jpg";
import Ser8 from "../assets/ser8.jpg";
import Ser9 from "../assets/ser9.jpg";

const Diplomes = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    }, 2000); // Автоматически переключать слайд каждые 2 секунды

    return () => clearInterval(interval); // Очистить интервал при размонтировании
  }, []);

  const settings = {
    arrows: false,
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
          dots: true,
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
        <Slider
          ref={sliderRef}
          {...settings}
          className="flex items-center h-full"
        >
          {[Ser1, Ser2, Ser3, Ser5, Ser6, Ser8, Ser9].map((src, index) => (
            <div
              key={index}
              className="h-full w-full p-4 flex justify-center items-center"
            >
              <img
                src={src}
                alt={`sertificate ${index + 1}`}
                className="md:w-full w-1/2 object-cover border-2 ml-[80px] md:ml-0"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Diplomes;
