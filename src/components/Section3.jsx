import React from "react";
import Diplomes from "./Diplomes";
import HealthCheck from "../assets/health-checkup.png";
import MedCase from "../assets/med-service-case.png";
import Hospital from "../assets/hospital.png";
import MedNotes from "../assets/med-notes.png";
import { useTranslation } from 'react-i18next';

const Section3 = () => {
  const { t } = useTranslation();


  return (
    <div className="w-full md:h-screen bg-white flex justify-center items-center md:relative md:top-0 absolute top-[750px]">
      <div className="flex md:w-[80%] md:h-[90%] justify-around flex-col w-full h-full">
        <div className="w-full h-auto flex justify-around mt-[20px]">
          <div className="md:h-[200px] h-full flex justify-center items-center flex-col text-center flex-1">
            <img alt='heakth' className=" h-[40px] w-[40px] relative -left-4  md:h-[80px] md:w-[80px]" src={HealthCheck} />
            <h2 className="font-extrabold text-[20px] md:text-[30px]">1000+</h2>
            <p className="text-[10px] md:w-[200px] md:text-xl font-medium">
              {t('success_work')}
            </p>
          </div>
          <div className="md:h-[200px] h-full flex justify-center items-center flex-col text-center flex-1">
            <img alt='case' className="h-[40px] w-[40px] md:h-[80px] md:w-[80px]" src={MedCase} />
            <h2 className="font-extrabold text-[20px] md:text-[30px]">16+</h2>
            <p className="text-[10px] md:w-[150px] md:text-xl font-medium">
            {t('year_experience')}
              
               </p>
          </div>
          <div className="md:h-[200px] h-auto flex items-center flex-col text-center flex-1">
            <img alt='center' className="h-[40px] w-[40px] md:h-[80px] md:w-[80px]" src={Hospital} />
            <h2 className="font-extrabold text-[20px] md:text-[30px]">100+</h2>
            <p className="text-[10px] md:w-[150px] md:text-xl font-medium">
              {t('centers')}
            </p>
          </div>
          <div className="md:h-[200px] flex items-center flex-col text-center flex-1">
            <img alt='note' className="h-[40px] w-[40px] md:h-[80px] md:w-[80px]" src={MedNotes} />
            <h2 className="font-extrabold text-[20px] md:text-[30px]">1000+</h2>
            <p className="text-[10px] md:w-[150px] md:text-xl font-medium">
              {t('happy_clients')}
            </p>
          </div>
        </div>
        <div>
          <Diplomes />
        </div>
      </div>
    </div>
  );
};

export default Section3;
