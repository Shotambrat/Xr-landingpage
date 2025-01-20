import React, { useState } from "react";

import toast, { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { PatternFormat } from "react-number-format";
import Axios from '../lib/axios'



const Connect = () => {
  const { t } = useTranslation();
  const [data, setData] = useState({ name: "", phone: "", message: "" });

  const handleInputChange = (key, value) => {
    setData((prevData) => ({ ...prevData, [key]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("phone", data.phone);
    formData.append("message", data.message);

    try {
      const response = await Axios.post("salom-user-zayafka", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        toast.success(t("connect.success"));
        setData({ name: "", phone: "", message: "" });
      } else {
        throw new Error("Failed to send form data.");
      }
    } catch (error) {
      toast.error(t("connect.error"));
    }
  };


  return (
    <div
      id="connect"
      className="bg-white w-full md:h-[550px] lg:h-[600px] flex justify-center items-center"
    >
      <Toaster />
      <div className="w-[90%] h-[80%] flex flex-wrap justify-between">
        <div>
          <div className="md:mt-0 mt-8 h-full md:w-[500px]">
            <div className="w-full flex justify-end"></div>
            <h2 className="text-3xl text-center font-extrabold mb-2 text-blue-700">
              {t('connect.title')}
            </h2>
            <p className="text-lg mb-4">
             
              {t('connect.description')}

            </p>
            <form onSubmit={handleSubmit} method="post">
              <input
                placeholder={t('connect.placeholder.name')}
                className="h-[50px] w-full pl-5 pb-1 mb-10 items-center border-2 border-blue-900 rounded-[10px]"
                value={data.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
             <PatternFormat
                format="+998 ## ###-##-##"
                mask="_"
                placeholder={t("connect.placeholder.phone")}
                className="h-[50px] w-full pl-5 pb-1 mb-10 items-center border-2 border-blue-900 rounded-[10px]"
                value={data.phone}
                onValueChange={(values) => handleInputChange("phone", values.value)}
              />

              <textarea
                placeholder={t('connect.placeholder.message')}
                name="message"
                className="h-[50px] w-full pl-5 pt-[10px] pb-1 mb-10 items-center border-2 border-blue-900 rounded-[10px]"
                value={data.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
              />

              <button
                type="submit"
                className="h-[50px] w-full pl-5 pb-1 items-center text-center text-lg text-white font-bold border-2 bg-blue-900 rounded-[10px]"
              >
                {t('connect.button')}
              </button>
            </form>
          </div>
        </div>
        <div className="w-full border-2 border-black md:border-o md:my-0 my-6 md:w-1/2 h-full rounded-[20px] overflow-hidden">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3546.7933669278837!2d69.30251774000472!3d41.31114311712257!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef575ee1942c7%3A0x505e895b705f2f5b!2z0J3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INC80LXQtNC40YbQuNC90YHQutC40Lkg0YbQtdC90YLRgA!5e0!3m2!1sru!2s!4v1712558734998!5m2!1sru!2s"
            width="100%"
            height="100%"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Connect;
