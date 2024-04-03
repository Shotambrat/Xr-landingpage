import React, { useEffect, useState, useRef } from "react";
import OtziviBg from "../assets/otzivi-bg2.png";
import OtziviImg1 from "../assets/otzivi-first-img.png";
import gsap from "gsap";

const Otzivi = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [rightSlide, setRightSlide] = useState(false);
  const [leftSlide, setLeftSlide] = useState(false);
  const contentRef = useRef();

  const handleStepRight = () => {
    if (activeStep < 3) {
        setRightSlide(true);
        setLeftSlide(false);
        setActiveStep(prevStep => prevStep + 1);
    } 
  };

  const handleStepLeft = () => {
    if (activeStep >= 0) {
        setRightSlide(false);
        setLeftSlide(true);
        setActiveStep(prevStep => prevStep - 1);
    }
  };


  useEffect(() => {
    if (rightSlide === true && leftSlide === false) {
      gsap.fromTo(
        contentRef.current,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "bounce.out",
        }
      );
    } else if (leftSlide === true && rightSlide === false) {
      gsap.fromTo(
        contentRef.current,
        { x: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "bounce.out",
        }
      );
    }
  }, [activeStep]);

  const renderContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <div className="w-full h-full bg-white rounded-xl flex flex-col md:flex-row justify-between items-center">
            <div className="ml-0 md:ml-4 mt-2 md:mt-0 rounded-xl h-[30%] md:h-[80%] w-full md:w-1/2 flex justify-center">
              <img className="w-[80%] md:w-full md:h-full rounded-xl" src={OtziviImg1} />
            </div>
            <div className="md:mt-0 mt-2 w-full md:w-1/2 h-[80%] mr-4 flex flex-col justify-between ">
              <div className="ml-8">
                <h3 className="font-bold text-sm md:text-xl mb-4">Хаитметов Бобуржан</h3>
                <p className="text-[12px] md:text-lg">
                  Я безмерно благодарен Хайрулло Рахматуллаевичу за спасение
                  моей жизни, благодаря его операции я смог написать этот отзыв
                </p>
              </div>
              <div className="w-full flex justify-end">
                <button className="md:mb-0 mb-4 h-[30px] md:h-[35px] w-[100px] md:w-[140px] bg-blue-800 text-white text-center rounded-lg">
                  batafsil
                </button>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
            <div className="w-full h-full bg-white rounded-xl flex flex-col md:flex-row justify-between items-center">
            <div className="ml-0 md:ml-4 mt-2 md:mt-0 rounded-xl h-[30%] md:h-[80%] w-full md:w-1/2 flex justify-center">
              <img className="w-[80%] md:w-full md:h-full rounded-xl" src={OtziviImg1} />
            </div>
            <div className="md:mt-0 mt-2 w-full md:w-1/2 h-[80%] mr-4 flex flex-col justify-between ">
              <div className="ml-8">
                <h3 className="font-bold text-sm md:text-xl mb-4">Erling Haaland</h3>
                <p className="text-[12px] md:text-lg">
                  Я безмерно благодарен Хайрулло Рахматуллаевичу за спасение
                  моей жизни, благодаря его операции я смог написать этот отзыв
                </p>
              </div>
              <div className="w-full flex justify-end">
                <button className="md:mb-0 mb-4 h-[30px] md:h-[35px] w-[100px] md:w-[140px] bg-blue-800 text-white text-center rounded-lg">
                  batafsil
                </button>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
            <div className="w-full h-full bg-white rounded-xl flex flex-col md:flex-row justify-between items-center">
            <div className="ml-0 md:ml-4 mt-2 md:mt-0 rounded-xl h-[30%] md:h-[80%] w-full md:w-1/2 flex justify-center">
              <img className="w-[80%] md:w-full md:h-full rounded-xl" src={OtziviImg1} />
            </div>
            <div className="md:mt-0 mt-2 w-full md:w-1/2 h-[80%] mr-4 flex flex-col justify-between ">
              <div className="ml-8">
                <h3 className="font-bold text-sm md:text-xl mb-4">Kevin De Bruyne</h3>
                <p className="text-[12px] md:text-lg">
                  Я безмерно благодарен Хайрулло Рахматуллаевичу за спасение
                  моей жизни, благодаря его операции я смог написать этот отзыв
                </p>
              </div>
              <div className="w-full flex justify-end">
                <button className="md:mb-0 mb-4 h-[30px] md:h-[35px] w-[100px] md:w-[140px] bg-blue-800 text-white text-center rounded-lg">
                  batafsil
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${OtziviBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-auto w-full "
    >
      <div className="h-full w-full flex flex-col justify-around items-center">
        <h2 className="text-center text-xl md:text-4xl text-white mt-10">
          Davollashdan mamnun bemorlar
        </h2>
        <div className="h-full w-[80%] mt-8 flex justify-around pb-16">
          <div className="h-auto flex justify-between items-center">
            <button onClick={handleStepLeft} className="md:h-[30px] md:w-[30px] mt-6 md:mt-0" disabled={activeStep === 0}>
              {activeStep === 0 ? (
                <svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="48"
                    height="48"
                    fill="white"
                    fill-opacity="0.01"
                  />
                  <path
                    d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                    fill="#9A9A9A"
                    stroke="#393939"
                    stroke-width="4"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M27 33L18 24L27 15"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="48"
                    height="48"
                    fill="white"
                    fill-opacity="0.01"
                  />
                  <path
                    d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                    fill="#2F88FF"
                    stroke="#000000"
                    stroke-width="4"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M27 33L18 24L27 15"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className="w-2/3 h-[300px] flex justify-between items-center"
            ref={contentRef}
          >
            {renderContent()}
          </div>
          <div className="h-auto flex justify-center items-center">
            <button onClick={handleStepRight} className="h-[30px] w-[30px]" disabled={ activeStep == 2 }>
              {activeStep === 2 ? (
                <svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="48"
                    height="48"
                    fill="white"
                    fill-opacity="0.01"
                  />
                  <path
                    d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                    fill="#9A9A9A"
                    stroke="#393939"
                    stroke-width="4"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21 33L30 24L21 15"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="48"
                    height="48"
                    fill="white"
                    fill-opacity="0.01"
                  />
                  <path
                    d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                    fill="#2F88FF"
                    stroke="#000000"
                    stroke-width="4"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21 33L30 24L21 15"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otzivi;
