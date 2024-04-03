import React, { useState } from "react";

const Services2 = () => {
  const [activeItem, setActiveItem] = useState(null);

  // Предполагаем, что у нас есть массив точек, каждая из которых имеет свой уникальный ID и название
  const points = Array.from({ length: 9 }, (_, i) => ({
    id: `point-${i + 1}`,
    title: `Точка ${i + 1}`,
  }));

  const points2 = ['Aortal-koronar shuntlash', 'Yurakning mitral klapanini protezlash', 'Aorta anevrizmasi boyicha jarrohlik amaliyotlari', 'Yurak klapanlarining minimal invaziv jarrohlik amaliyotlari', 'Yurakning mitral klapani plastikasi', 'Yurakning aortal klapanini protezlash amaliyoti', 'Karotid endoarterektomiya', 'Yurakning qon tomirlarini stentlash', 'O’tkir va surunkali o’pka arteriyasi tromboemboliyasidagi jarroxlik amaliyotlari']

  // Расчёт позиций точек по окружности
  const calculatePosition = (index, total, radius) => {
    const angle = (index / total) * 2 * Math.PI; // Разделите окружность на количество точек
    return {
      x: 50 + radius * Math.cos(angle) + "%",
      y: 50 + radius * Math.sin(angle) + "%",
    };
  };

  return (
    <div className="relative h-64 w-64 m-10">
      <div className="absolute top-0 right-0 bottom-0 left-0 rounded-full border-2 border-gray-200"></div>
      {points.map((point, i) => {
        const { x, y } = calculatePosition(i, points.length, 40); // 40% радиус от центра края
        return (
          <div
            key={point.id}
            className={`absolute w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer ${
              activeItem === point.id ? "bg-gray-800" : ""
            }`}
            style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
            onMouseEnter={() => setActiveItem(point.id)}
            onMouseLeave={() => setActiveItem(null)}
          >
            <span
              className={`text-xs ${
                activeItem === point.id ? "text-white" : "text-gray-800"
              }`}
            >
              {point.title}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Services2;