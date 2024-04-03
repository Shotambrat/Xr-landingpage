import React from "react";

const Connect = () => {
  return (
    <div className="bg-white w-full md:h-[550px] flex justify-center items-center">
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
            <from action="#" method="post">
              <input
                placeholder="Ismingiz"
                className="h-[50px] w-full pl-5 pb-1 mb-10 items-center border-2 border-blue-900 rounded-[10px]"
              />
              <input
                placeholder="Ismingiz"
                className="h-[50px] w-full pl-5 pb-1 mb-10 items-center border-2 border-blue-900 rounded-[10px]"
              />
              <input
                placeholder="Ismingiz"
                className="h-[50px] w-full pl-5 pb-1 mb-10 items-center border-2 border-blue-900 rounded-[10px]"
              />
              <button className="h-[50px] w-full pl-5 pb-1 items-center text-center text-lg text-white font-bold border-2 bg-blue-900 rounded-[10px]">
                Ariza Qoldirish
              </button>
            </from>
          </div>
        </div>
        <div className="w-full border-2 border-black md:border-o md:my-0 my-6 md:w-1/2 h-full rounded-[20px] overflow-hidden">
          <iframe
            src="https://yandex.uz/map-widget/v1/?ll=69.300455%2C41.354099&mode=search&oid=214179343892&ol=biz&z=19.75"
            width="100%"
            height="100%"
            allowFullScreen="true"
            style={{ borderRadius: "20px" }}
            title="Yandex Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Connect;
