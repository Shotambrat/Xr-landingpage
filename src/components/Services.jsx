import React from "react";
import LeftHeart from "../assets/left-heart.png";
import RightHeart from "../assets/right-heart.png";

const Services = () => {
  const dots = Array.from({ length: 5 }).map((_, index) => ({
    id: index,
    angle: index * (190 / 5) * (Math.PI / 180) + 0.5, // Равномерно распределяем точки по полукругу
    label: `Text ${index + 1}`, // Add label text here
  }));

  const dots2 = Array.from({ length: 4 }).map((_, index) => ({
    id: index,
    angle: index * (190 / 5) * (Math.PI / 180) + 0.5, // Равномерно распределяем точки по полукругу
    label: `Text ${index + 1}`, // Add label text here
  }));

  return (
    <div
      id="services"
      className="h-auto md:h-screen bg-white flex justify-center items-center"
    >
      <div className="h-full md:h-[90%] w-full md:w-[80%] flex flex-col items-center justify-between">
        <h2 className="text-blue-800 text-xl md:text-5xl">Xizmatlar</h2>
        <div className="flex w-full h-auto md:h-full scale-75">
          <div className="flex-1 flex justify-end">
            <div
              style={{
                backgroundImage: `url(${LeftHeart})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="relative w-[300px] h-[600px] rounded-tl-full rounded-bl-full flex justify-center items-end"
            >
              {dots.map(({ id, angle, label }) => {
                const x = 300 * Math.sin(angle); // 128 - радиус полукруга, x координата на окружности
                const y = 300 * Math.cos(angle); // y координата на окружности
                return (
                  <div
                    key={id}
                    className="absolute w-[30px] h-[30px] bg-red-500 rounded-full"
                    style={{
                      left: `${300 - x}px`,
                      bottom: `${270 + y}px`, // Используем bottom вместо top для инвертирования оси Y
                      transform: "translate(-50%, -50%)", // Центрирование точек
                      zIndex: 3,
                    }}
                  />
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
              className="relative w-[300px] h-[600px] rounded-tr-full rounded-br-full flex justify-center items-end"
            >
              {dots2.map(({ id, angle, label }) => {
                const x = 300 * Math.sin(angle); // 128 - радиус полукруга, x координата на окружности
                const y = 300 * Math.cos(angle); // y координата на окружности
                return (
                  <div
                    key={id}
                    className="absolute w-[30px] h-[30px] bg-red-500 rounded-full"
                    style={{
                      left: `${x}px`,
                      bottom: `${270 + y}px`, // Используем bottom вместо top для инвертирования оси Y
                      transform: "translate(-50%, -50%)", // Центрирование точек
                    }}
                  />
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
