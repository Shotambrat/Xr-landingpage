import React, { useState, useEffect } from "react";
import LeftHeart from "../assets/left-heart.png";
import RightHeart from "../assets/right-heart.png";

const Services = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // 768px - это точка останова для мобильной версии в Tailwind CSS по умолчанию

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Подписаться на событие resize
    window.addEventListener("resize", handleResize);

    // Отписаться от события
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const texts = [
    "Aortal-koronar shuntlash",
    "Yurakning mitral klapanini protezlash",
    "Aorta anevrizmasi bo'yicha jarrohlik amaliyotlari",
    "Yurak klapanlarining minimal invaziv jarrohlik amaliyotlari",
    "Yurakning mitral klapani plastikasi",
  ];

  const texts2 = [
    "O’tkir va surunkali o’pka arteriyasi tromboemboliyasidagi jarroxlik amaliyotlari",
    "Yurakning qon tomirlarini stentlash",
    "Karotid endoarterektomiya",
    "Yurakning aortal klapanini protezlashamalyoti",
  ];

  const dots = Array.from({ length: 5 }).map((_, index) => ({
    id: index,
    angle: index * (190 / 5) * (Math.PI / 180) + 0.5, // Равномерно распределяем точки по полукругу
    label: texts[index], // Add label text here
  }));

  const dots2 = Array.from({ length: 4 }).map((_, index) => ({
    id: index,
    angle: index * (190 / 5) * (Math.PI / 180) + 0.5, // Равномерно распределяем точки по полукругу
    label: texts2[index], // Add label text here
  }));

  return (
    <div
      id="services"
      className="h-auto md:h-screen bg-white flex justify-center items-center"
    >
      <div className="h-full md:h-[90%] w-full md:w-[80%] flex flex-col items-center justify-between">
        <h2 className="text-blue-800 font-bold text-xl md:text-5xl md:mt-0 mt-6 mb-8">
          Xizmatlar
        </h2>
        <div className="flex flex-col md:flex-row w-full h-auto md:h-full md:mt-8 font-montserrat">
          <div className="flex-1 flex justify-end">
            <div
              style={{
                backgroundImage: `url(${LeftHeart})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                // backgroundPosition: isMobile ? "center center" : "left center",
              }}
              className="relative w-[150px] md:w-[250px] h-[300px] md:h-[500px] rounded-tl-full rounded-bl-full flex justify-center items-end"
            >
              {dots.map(({ id, angle, label }) => {
                const x = isMobile
                  ? 140 * Math.sin(angle)
                  : 250 * Math.sin(angle); // Уменьшаем значение для мобильных устройств
                const y = isMobile
                  ? 140 * Math.cos(angle)
                  : 250 * Math.cos(angle); // То же для `bottom`

                if (id == 4) {
                  return (
                    <div
                      key={id}
                      className="absolute group cursor-pointer"
                      style={{
                        left: `${isMobile ? 130 - x : 250 - x}px`, // Используйте `isMobile` для определения значения
                        bottom: `${isMobile ? 119 + y : 220 + y}px`, // Адаптируйте значения `bottom` для мобильной версии
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div className="w-[30px] h-[30px] bg-customDots rounded-full z-10 group-hover:bg-blue-900" />
                      <div className="text-[9px] md:text-xl font-medium absolute left-0 transform -translate-y-1/2 -translate-x-full w-[100px] md:w-[400px] md:text-end group-hover:font-bold group-hover:text-blue-900">
                        {label}
                      </div>
                    </div>
                  );
                }
                return (
                  <div
                    key={id}
                    className="absolute group cursor-pointer"
                    style={{
                      left: `${isMobile ? 130 - x : 250 - x}px`, // Используйте `isMobile` для определения значения
                      bottom: `${isMobile ? 119 + y : 220 + y}px`, // Адаптируйте значения `bottom` для мобильной версии
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="w-[30px] h-[30px] bg-customDots rounded-full z-10 group-hover:bg-blue-900" />
                    <div className="text-[9px] md:text-xl font-medium absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full w-[140px] md:w-[350px] md:text-end group-hover:font-bold group-hover:text-blue-900">
                      {label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex-1 flex justify-start">
            <div
              style={{
                backgroundImage: `url(${RightHeart})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "100% 100%",
              }}
              className="relative md:h-[500px] md:w-[250px] w-[150px] h-[300px] rounded-tr-full rounded-br-full flex justify-center items-end md:mt-0 mt-[90px]"
            >
              {dots2.map(({ id, angle, label }) => {
                const x = isMobile
                  ? 150 * Math.sin(angle)
                  : 250 * Math.sin(angle); // Уменьшаем значение для мобильных устройств
                const y = isMobile
                  ? 150 * Math.cos(angle)
                  : 250 * Math.cos(angle); // То же для `bottom`

                if (id == 0) {
                  return (
                    <div
                      key={id}
                      className="absolute group cursor-pointer"
                      style={{
                        left: `${isMobile ? -10 + x : x}px`,
                        bottom: `${isMobile ? 120 + y : 220 + y}px`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div className="w-[30px] h-[30px] bg-customDots rounded-full z-10 group-hover:bg-blue-900"/>
                      <div className="text-[9px] md:text-xl absolute font-medium right-0 top-1/2 transform -translate-y-1/2 translate-x-full w-[200px] md:w-[500px] text-[12px] md:text-xl group-hover:font-bold group-hover:text-blue-900">
                        {label}
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={id}
                    className="absolute group cursor-pointer"
                    style={{
                      left: `${isMobile ? -10 + x : x}px`,
                      bottom: `${isMobile ? 120 + y : 220 + y}px`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="w-[30px] h-[30px] bg-customDots rounded-full z-10 group-hover:bg-blue-900" />
                    <div className="text-[9px] md:text-xl absolute font-medium right-0 top-1/2 transform -translate-y-1/2 translate-x-full w-[150px] md:w-[500px] text-[12px] md:text-xl group-hover:font-bold group-hover:text-blue-900">
                      {label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
