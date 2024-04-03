import React, { useState } from 'react';
import { gsap } from 'gsap';

const data = [
  { id: 1, label: 'Aortal-koroner shuntlash' },
  { id: 2, label: 'Yurakning mitral klapannini protezlash' },
  { id: 3, label: 'Yurakning mitral klapannini protezlash' },
  { id: 4, label: 'Yurakning mitral klapannini protezlash' },
  { id: 5, label: 'Yurakning mitral klapannini protezlash' },
  { id: 6, label: 'Yurakning mitral klapannini protezlash' },
  { id: 7, label: 'Yurakning mitral klapannini protezlash' },
  { id: 8, label: 'Yurakning mitral klapannini protezlash' },
  { id: 9, label: 'Yurakning mitral klapannini protezlash' },
  // ... add other points
];

function Services3() {
  const [activeId, setActiveId] = useState(null);

  const handleMouseEnter = (id) => {
    setActiveId(id);
    // Optionally add GSAP animations here
    gsap.to(`#dot-${id}`, { backgroundColor: '#color', duration: 0.3 });
    gsap.to(`#text-${id}`, { color: '#color', duration: 0.3 });
  };

  const handleMouseLeave = () => {
    setActiveId(null);
    // Optionally reset GSAP animations here
    gsap.to('.dot', { backgroundColor: 'initial', duration: 0.3 });
    gsap.to('.label', { color: 'initial', duration: 0.3 });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="space-y-4">
        {data.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
            className="flex items-center"
          >
            <div
              id={`dot-${item.id}`}
              className={`dot w-6 h-6 rounded-full bg-blue-500 ${
                activeId === item.id ? 'bg-blue-700' : ''
              }`}
            />
            <div
              id={`text-${item.id}`}
              className={`label ml-2 ${
                activeId === item.id ? 'text-blue-700' : 'text-gray-700'
              }`}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services3;