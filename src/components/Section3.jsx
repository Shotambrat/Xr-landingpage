import React from "react";
import Diplomes from "./Diplomes";
import HealthCheck from "../assets/health-checkup.png";
import MedCase from "../assets/med-service-case.png";
import Hospital from "../assets/hospital.png";
import MedNotes from "../assets/med-notes.png";

const Section3 = () => {
  return (
    <div className="md:w-full md:h-screen bg-white flex justify-center items-center md:relative md:top-0 absolute top-[1070px]">
      <div className="flex md:w-[80%] md:h-[90%] justify-around flex-col w-full h-full">
        <div className="w-full h-auto flex justify-around items-center">
          <div className="md:h-[200px] flex justify-center items-center flex-col text-center">
            <img className=" h-[40px] w-[40px]  md:h-[80px] md:w-[80px]" src={HealthCheck} />
            <h2 className="font-extrabold text-[20px] md:text-[30px]">1000+</h2>
            <p className="text-[10px] md:w-[150px]">muvaffaqiyatli jarrohlik amaliyotlari</p>
          </div>
          <div className="md:h-[200px] flex justify-center items-center flex-col text-center">
            <img className="h-[40px] w-[40px] md:h-[80px] md:w-[80px]" src={MedCase} />
            <h2 className="font-extrabold text-[20px] md:text-[30px]">16+</h2>
            <p className="text-[10px] md:w-[150px]">yıllık tajriba </p>
          </div>
          <div className="md:h-[200px] flex justify-center items-center flex-col text-center">
            <img className="h-[40px] w-[40px] md:h-[80px] md:w-[80px]" src={Hospital} />
            <h2 className="font-extrabold text-[20px] md:text-[30px]">100+</h2>
            <p className="text-[10px] md:w-[150px]">malaka oshirgan markazlar</p>
          </div>
          <div className="md:h-[200px] flex justify-center items-center flex-col text-center">
            <img className="h-[40px] w-[40px] md:h-[80px] md:w-[80px]" src={MedNotes} />
            <h2 className="font-extrabold text-[20px] md:text-[30px]">1000+</h2>
            <p className="text-[10px] md:w-[150px]">mamnun mijozla</p>
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
