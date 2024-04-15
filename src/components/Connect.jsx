import React, { useState } from "react";
import axios from "axios";

import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast.success('Arizangiz qabul qilindi');

const Connect = () => {
  const [inputValue, setInputValue] = useState("");
  // Состояние для определения фокуса на инпуте
  const [isFocused, setIsFocused] = useState(false);

  const formatValue = (value) => {
    if (!value) return "";

    let formattedValue = "+998(";

    // Добавляем цифры согласно шаблону
    for (let i = 0; i < Math.min(9, value.length); i++) {
      if (i === 2) formattedValue += ")";
      if (i === 5 || i === 7) formattedValue += "-";
      formattedValue += value[i];
    }

    return formattedValue;
  };

  const handleChange = (event) => {
    let { value } = event.target;
    let numbersOnly = value.replace(/[^\d]/g, "");

    // Если начинается с 998, удаляем эти цифры (если пользователь случайно их ввел)
    if (numbersOnly.startsWith("998")) {
      numbersOnly = numbersOnly.substring(3);
    }

    setInputValue(numbersOnly);
  };

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => setIsFocused(false);

  // Вычисляем отображаемое значение на основе фокуса и введенных цифр
  const displayValue = isFocused || inputValue ? formatValue(inputValue) : "";

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Предотвращение стандартного поведения формы

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", displayValue);
    formData.append("message", message);

    try {
      // TODO: Замените 'URL_К_ВАШЕМУ_AJAX.PHP' на реальный URL вашего скрипта на сервере
      const response = await axios.post("../../xr-ajax.php", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      
      return notify()

    } catch (error) {
      // Отлов ошибок при отправке формы
      console.error("Ошибка при отправке формы: ", error);
      alert("Не удалось отправить форму");
    }

    setName("");
    setMessage("");
  };

  return (
    <div
      id="connect"
      className="bg-white w-full md:h-[550px] flex justify-center items-center"
    >
      <Toaster />
      <div className="w-[90%] h-[80%] flex flex-wrap justify-between">
        <div>
          <div className="md:mt-0 mt-8 h-full md:w-[500px]">
            <div className="w-full flex justify-end"></div>
            <h2 className="text-3xl text-center font-extrabold mb-2 text-blue-700">
              Aloqa ma'lumotlari
            </h2>
            <p className="text-lg mb-4">
              Agar siz qabulga yozilmoqchi bo'lsangiz yoki maslahatga muhtoj
              bo'lsangiz, murojaat qiling
            </p>
            <form onSubmit={handleSubmit} method="post">
              <input
                placeholder="Ismingiz"
                className="h-[50px] w-full pl-5 pb-1 mb-10 items-center border-2 border-blue-900 rounded-[10px]"
                value={name}
                onChange={handleNameChange}
              />
              <input
                placeholder="Telefon raqamingiz"
                type="tel"
                className="h-[50px] w-full pl-5 pb-1 mb-10 items-center border-2 border-blue-900 rounded-[10px]"
                value={displayValue}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />

              <textarea
                placeholder="Nima bezovta qilyapti?"
                name="message"
                className="h-[50px] w-full pl-5 pb-1 mb-10 items-center border-2 border-blue-900 rounded-[10px]"
                value={message}
                onChange={handleMessageChange}
              />

              <button
                type="submit"
                className="h-[50px] w-full pl-5 pb-1 items-center text-center text-lg text-white font-bold border-2 bg-blue-900 rounded-[10px]"
              >
                Ariza Qoldirish
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
