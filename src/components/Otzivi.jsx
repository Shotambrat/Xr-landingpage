import React from "react";
import OtziviBg from "../assets/otzivi-bg.png";

const Otzivi = () => {
  return (
    <div className="relative w-full h-[600px]">
      <div
        style={{
          backgroundImage: `url(${OtziviBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backdropFilter: "blur(15px)",
        }}
        className=" absolute h-full w-full filter blur-sm"
      ></div>
      <div className="absolute w-full h-full bg-black opacity-50"></div>
      <div className="relative z-100 h-full w-full flex flex-col justify-around items-center">
        <h2>Davollashdan mamnun bemorlar</h2>
        <div></div>
      </div>
    </div>
  );
};

export default Otzivi;
