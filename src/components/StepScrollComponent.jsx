import React, { useState, useRef, useEffect } from "react";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import gsap from "gsap";
import Serdce from "../assets/serdce.png";
import LikeStep from "../assets/like-step.png";
import GradCap from "../assets/grad-cap.png";
import { useTranslation } from 'react-i18next';

export default function ProgressMobileStepper() {
  const {t} = useTranslation();

  const [activeStep, setActiveStep] = useState(0);
  const contentRef = useRef();
  const maxSteps = 3; 

  const handleStep = (step) => () => {
    setActiveStep(step);
  };



  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          // ease: "",
        }
      );
    }
  }, [activeStep]);


  
  const renderContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <div
            className="relative -top-[100px] h-[400px] max-w-[950px] flex justify-between"
            id="content1"
          >
            <div className="h-[100px] md:h-full w-[200px] md:w-[350px] flex justify-center items-center">
              <div>
                <ol className="list-disc leading-1  text-gray-200 text-[10px] md:text-xl">
                  <li className="md:mb-3">
                    {t("achievements.1")}
                  </li>
                  <li className="md:mb-3">
                    {t("achievements.2")}
                  </li>
                  <li>
                    {t("achievements.3")}
                  </li>
                </ol>
              </div>
            </div>
            <div className="max-h-[200px] md:h-full md:w-auto">
              <img
                className="relative md:-top-20 md:-right-20 w-[100px] md:w-full"
                src={Serdce}
                alt='serdce'
              />
            </div>
          </div>
        );
      case 1:
        return (
          <div
            className="relative -top-[100px] h-[400px] max-w-[950px] flex justify-between"
            id="content2"
          >
            <div className="h-[100px] md:h-full w-[200px] md:w-[350px] flex justify-center items-center">
              <div>
                <ol className="list-decimal leading-1 md:text-xl text-gray-200 text-[10px] ">
                  <li className="md:mb-3">
                   
                    {t('experience.1')}
                  </li>
                  <li className="md:mb-3">
                   
                    {t('experience.2')}

                  </li>
                  <li className="md:mb-3">
                    
                    {t('experience.3')}

                  </li>
                  <li>
                    {t('experience.4')}
                  </li>
                </ol>
              </div>
            </div>
            <div className="max-h-[200px] md:h-full md:w-auto">
              <img
                className="relative md:-top-20 md:-right-20 w-[100px] md:w-full"
                src={LikeStep}
                alt='like'
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div
            className="relative -top-[100px] h-[400px] max-w-[950px] flex justify-between"
            id="content3"
          >
            <div className="h-[100px] md:h-full w-[200px] md:w-[350px] flex justify-center items-center">
              <div>
                <ol className="list-disc leading-1 text-gray-200 text-[10px] md:text-xl">
                  <li className="md:mb-3">
                    
                    {t('education.1')}
                  </li>
                  <li className="md:mb-3">
                   
                    {t('education.2')}
                  </li>
                  <li>{t('education.3')}</li>
                </ol>
              </div>
            </div>
            <div className="max-h-[200px] md:h-full md:w-auto">
              <img
                className="relative md:-top-20 md:-right-20 w-[100px] md:w-full"
                src={GradCap}
                alt='grad'
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className=" w-full flex-col md:bg-customBlue flex justify-start items-center shadow-md"
      style={{ boxShadow: "0px -31px 40px 4px rgba(0,73,150,0.77)" }}
    >
      <div className="h-[300px] md:h-[450px] w-full bg-customBlue flex justify-center  items-center">
        <div className="flex flex-col justify-center items-center w-full px-4">
          <MobileStepper
            variant="progress"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            sx={{
              width: "100%",
              flexGrow: 1,
              backgroundColor: "transparent",
              flexDirection: "column",
              "& .MuiLinearProgress-barColorPrimary": {
                backgroundColor: "#777676",
              },
              "& .MuiMobileStepper-dot": {
                backgroundColor: "black", // Задает цвет неактивных точек
              },
              "& .MuiMobileStepper-dotActive": {
                backgroundColor: "white", // Задает цвет активной точки
              },
              "@media (max-width: 768px)": {
                display: "none",
              },
            }} // Установка фона лоадера в прозрачный
            classes={{
              root: "w-full",
              dot: "bg-white",
              dotActive: "bg-sky-200",
            }} // Кастомные классы для точек лоадера
          />
          <div className=" relative -top-10 md:top-0 flex justify-around w-full text-center">
            {" "}
            {/* Установка ширины на 100% и центрирование текста */}
            <Button
              onClick={handleStep(0)}
              sx={{
                fontSize: "16px",
                color: "white",
                "@media (max-width:600px)": {
                  fontSize: "8px", // размер шрифта для экранов шире 600px
                },
              }}
              className={`flex flex-col md:text-xl text-sm leading-5 md:leading-8 relative left-[8.7%] -top-10 w-10 ${
                activeStep === 0 ? "text-white" : "text-gray-500"
              }`}
            >
              <div className="hidden md:block">
                <svg
                  width="26"
                  height="23"
                  viewBox="0 0 26 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 23L25.9904 0.5H0.00961876L13 23Z"
                    fill={`${activeStep === 0 ? "#fff" : "#8E8D8D"}`}
                  />
                </svg>
              </div>
               {t('my_achievements')}
            </Button>
            <Button
              onClick={handleStep(1)}
              sx={{
                fontSize: "16px",
                color: "white",
                "@media (max-width:600px)": {
                  fontSize: "8px", // размер шрифта для экранов шире 600px
                },
              }}
              className={`flex flex-col w-10 md:text-xl text-[12px] leading-5 md:leading-8 relative text-center -top-10 ${
                activeStep === 1 ? "text-white" : "text-gray-500"
              }`}
            >
              <div className="hidden md:block">
                <svg
                  width="26"
                  height="23"
                  viewBox="0 0 26 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 23L25.9904 0.5H0.00961876L13 23Z"
                    fill={`${activeStep === 1 ? "#fff" : "#8E8D8D"}`}
                  />
                </svg>
              </div>
              
              {t('work_experience')}
            </Button>
            <Button
              onClick={handleStep(2)}
              sx={{
                fontSize: "16px",
                color: "white",
                "@media (max-width:600px)": {
                  fontSize: "8px", // размер шрифта для экранов шире 600px
                },
              }}
              className={`flex flex-col w-10 md:text-xl text-[8px] leading-5 md:leading-8 -top-[45px] md:-top-[52px] right-[8.7%] ${
                activeStep === 2 ? "text-white" : "text-gray-500"
              }`}
            >
              <div className="hidden md:block">
                <svg
                  width="26"
                  height="23"
                  viewBox="0 0 26 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 23L25.9904 0.5H0.00961876L13 23Z"
                    fill={`${activeStep === 2 ? "#fff" : "#8E8D8D"}`}
                  />
                </svg>
              </div>
              
              {t('education.title')}
            </Button>
          </div>
        </div>
      </div>

      <div className="relative -top-12 md:top-0" ref={contentRef}>
        {renderContent()}
      </div>
    </div>
  );
}
