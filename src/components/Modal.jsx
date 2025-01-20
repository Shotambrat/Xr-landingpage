import React, { useState } from "react";
import ReactDOM from "react-dom";
import toast, { Toaster } from 'react-hot-toast';
import Axios from "../lib/axios"; 
import { PatternFormat } from "react-number-format";
import { useTranslation } from 'react-i18next';



const Modal = ({ closeModal }) => {
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






  return ReactDOM.createPortal(
    <div
      id="modal"
      className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-white bg-opacity-80 backdrop-blur"
    >
      <Toaster />
      <div className="h-[70%] w-[400px]">
        <div className="w-full flex justify-end">
          <button
            onClick={closeModal}
            className="font-extrabold text-3xl text-blue-700 h-[40px] w-[40px]"
          >
            X
          </button>
        </div>
        <h2 className="text-3xl text-center font-extrabold mb-2 text-blue-700">
          Aloqa ma'lumotlari
        </h2>
        <p className="text-lg mb-4">
          Agar siz qabulga yozilmoqchi bo'lsangiz yoki maslahatga muhtoj
          bo'lsangiz, murojaat qiling
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
            {t("connect.button")}
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
