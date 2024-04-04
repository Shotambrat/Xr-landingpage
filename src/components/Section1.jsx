import React, { useState } from "react";
import Navbar from "./Navbar";
import Avatar from "../assets/xr-ava.png";
import bgImage from "../assets/bg-section1-2.png";
import Logo from "../assets/logo.png";
import Modal from "./Modal";

const Section1 = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backdropFilter: "blur(15px)",
      }}
      className="md:h-screen h-[450px] w-screen"
    >
      <div style={{
          boxShadow: 'inset 0px -83px 30px -20px #0E3963',
          zIndex: 3
        }} className="absolute bottom-0 h-0 md:h-[100px] w-full" />
      <header className="flex justify-center w-full h-auto md:h-1/4">
        <div className="flex md:items-end items-center h-full w-full md:w-[80%]">
          <div className="ml-4 mt-4">
            <a href="/" className="relative md:top-12">
              <img className="" src={Logo} />
            </a>
          </div>
          <div className="w-full h-full items-end flex justify-between md:flex-row flex-row-reverse">
            <div>
              <Navbar />
            </div>
            <div className="text-right">
              <a href="tel: +998333037799" className="text-lg font-bold">
                +998 33 303 77 99
              </a>
              <div className="flex ">
                <svg
                  width="15px"
                  height="15px"
                  viewBox="0 0 1024 1024"
                  class="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M523.9 986.4l-19.1-9.5c-16.6-8.3-407.6-207.7-407.6-550.2C97.2 191.4 288.6 0 523.9 0s426.7 191.4 426.7 426.7c0 342.4-390.9 541.8-407.6 550.2l-19.1 9.5z m0-901.1c-188.2 0-341.3 153.1-341.3 341.3 0 250.3 266.8 420.6 341.3 463.4 74.6-42.7 341.3-213.1 341.3-463.4 0-188.1-153.1-341.3-341.3-341.3z"
                    fill="#3688FF"
                  />
                  <path
                    d="M523.9 533.3c-70.6 0-128-57.4-128-128s57.4-128 128-128 128 57.4 128 128-57.5 128-128 128z m0-170.6c-23.5 0-42.7 19.1-42.7 42.7s19.1 42.7 42.7 42.7c23.5 0 42.7-19.1 42.7-42.7s-19.2-42.7-42.7-42.7z"
                    fill="#5F6379"
                  />
                </svg>
                <p className="text-xs ml-2">Milliy tibbiyot markazi</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="flex items-center w-full h-auto md:h-3/4">
        
        <div className="flex flex-col items-center w-full md:items-start h-3/4">
          <div className="w-full flex items-end md:flex-row-reverse md:justify-end">
            <div className="flex-1 md:absolute md:bottom-0 md:right-[200px]">
              <img className="" src={Avatar} />
            </div>
            <div className="flex-1 md:flex-none md:w-[700px] md:ml-[250px]">
              <h1 className="text-blue-900 font-extrabold relative md:text-5xl md:left-0 -left-5 md:text-start text-center">
                Hashimov Hayrillo Rahmatullaevich
              </h1>
              <p className="font-extrabold md:text-4xl md:mt-4">Yurak-qon tomir jarrohi</p>
              <p className="text-sm md:text-xl md:mt-4 md:mb-14">
                Doktor Xayrillo Rahmatullaevich Hoshimov yetakchi yurak-qon
                tomir jarrohi va intervention kardiolog sifatida 16 yildan ortiq
                tajribaga ega.
              </p>
            </div>
          </div>
          <div className="w-[90%] ">
            <button
              onClick={openModal}
              className="w-full md:w-[400px] flex justify-between items-center bg-blue-700 text-white rounded-md h-[50px] md:ml-[250px]"
            >
              <div></div>
              Maslahat olish
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 400 400"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M78.78 247.251C111.354 243.109 136.672 240.07 154.736 238.134C175.79 235.879 192.168 234.567 203.869 234.2L199.547 268.136L194.841 295C231.551 267.291 259.569 247.024 278.894 234.2C298.218 221.376 317.92 209.976 338 200C325.082 188.476 309.47 176.232 291.165 163.267C272.859 150.302 243.761 130.879 203.869 105C206.608 121.693 208.47 133.754 209.457 141.184C210.444 148.614 211.16 155.975 211.607 163.267C198.608 161.423 181.279 158.851 159.619 155.55C137.96 152.249 105.42 147.221 62 140.467C65.8066 168.023 67.7099 187.868 67.7099 200C67.7099 212.132 65.8066 228.599 62 249.4"
                  stroke="#000000"
                  stroke-opacity="0.9"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Section1;