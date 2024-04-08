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
      <div
        style={{
          boxShadow: "inset 0px -83px 30px -20px #0E3963",
          zIndex: 3,
        }}
        className="absolute bottom-0 h-0 md:h-[100px] w-full"
      />
      <div
        style={{
          boxShadow: "inset 500px 0px 300px 200px #fff",
          zIndex: -1,
        }}
        className="md:flex hidden absolute left-0 h-0 md:h-full w-full"
      />
      <div
        style={{
          boxShadow: "inset 0px -200px 63px -87px #fff",
          zIndex: -1,
        }}
        className="md:hidden absolute bottom-0 h-full w-full"
      />
      {/* box-shadow: inset 100px 0px 80px 12px rgba(0,0,0,0.1); */}
      <header className="flex justify-center w-full h-auto">
        <div className="flex md:items-end items-center h-full w-full md:w-[80%]">
          <div className="ml-4 mt-4">
            <a href="/" className="relative md:top-12">
              <img className="" src={Logo} />
            </a>
          </div>
          <div className="w-full h-full items-end flex justify-between md:flex-row flex-row-reverse mr-4 md:mr-0">
            <div>
              <Navbar />
            </div>
            <div className="flex flex-col justify-end ml-4 md:ml-0">
              <a
                href="tel: +998333037799"
                className="md:text-lg text-[12px] font-dela text-blue-600"
              >
                +998 33 303 77 99
              </a>
              <div className="flex md:justify-end text-end w-full">
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
            <div className="relative -top-[30px] md:top-0 flex-1 md:flex-none md:w-[700px] md:ml-[250px]">
              <h1 className="text-blue-900 font-extrabold relative text-xl md:text-5xl md:left-0 md:text-start">
                Hashimov Hayrillo Rahmatullaevich
              </h1>
              <p className="font-montserrat text-2xl font-extrabold md:text-4xl md:mt-4">
                Yurak-qon tomir jarrohi
              </p>
              <p className=" hidden md:flex text-sm md:text-xl md:mt-4 md:mb-14 md:w-[600px] font-montserrat">
                Doktor Xayrillo Rahmatullaevich Hoshimov yetakchi yurak-qon
                tomir jarrohi va intervention kardiolog sifatida 16 yildan ortiq
                tajribaga ega.
              </p>
            </div>
          </div>
          <div className="w-[90%] ">
            <button
              onClick={openModal}
              className="w-full md:w-[400px] flex justify-between items-center bg-blue-700 text-white rounded-md h-[50px] md:ml-[250px] font-montserrat"
            >
              <div></div>
              <p className="ml-4">
              Maslahat olish
              </p>
              <svg
              className="mr-4"
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L13 6M19 12L13 18"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            {isOpenModal && <Modal closeModal={closeModal} />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Section1;
