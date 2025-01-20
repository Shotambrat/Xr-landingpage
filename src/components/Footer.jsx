import React from "react";
import FooterLogo from "../assets/footer.png";
import { useTranslation } from 'react-i18next';
import { RiTelegram2Fill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";


const Footer = () => {
  const { t } = useTranslation()


  return (
    <div className="bg-blue-700 w-full h-[200px] md:h-[300px] flex justify-center items-center">
      <div className="w-full md:w-[70%] h-[70%] md:h-[50%] flex justify-between items-center">
        <div className="h-2/3 md:h-full md:w-1/3 ml-6 flex items-center">
          <img className="h-full" src={FooterLogo} />
        </div>
        <div className="flex-1 flex md:flex-row flex-col items-center md:justify-between">
          <div className="flex justify-around md:justify-between w-[80%] md:w-1/3 items-center">
            <div>
              <a href="https://t.me/drhhart" target="_blank">
               <RiTelegram2Fill className='text-white w-8 h-8' />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/dr.khayrullah?igsh=a3I5emMwMmhjcW1t&utm_source=qr" target="_blank">
                <BsInstagram className='text-white w-8 h-8' />
              </a>
            </div>
            <div>
              <a href="https://www.facebook.com/profile.php?id=100077919506611&mibextid=LQQJ4d" target="_blank">
                <ImFacebook2 className='text-white w-8 h-8' />
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center md:items-end h-full w-full md:w-1/3 mt-4 md:mt-0 text-white">
            <a href="mailto:hayrullomd@gmail.com">hayrullomd@gmail.com</a>
            <a
              href="tel: +998 33 303 77 99"
              className="text-md md:text-2xl mt-2 hover:text-green-500 transition-all"
            >
              +998 33 303 77 99
            </a>
            <a
              href="tel: +998 90 098 00 61"
              className="text-md md:text-2xl hover:text-green-500 transition-all"
            >
              +998 90 098 00 61
            </a>
            <div className="flex mt-2">
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
              <p className="text-xs ml-2"> {t('address')} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
