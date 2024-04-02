import React from 'react'

const Modal = ({closeModal}) => {
  return (
    <div id='modal' className='fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-white bg-opacity-80 backdrop-blur'> 
        <div className='h-[70%] w-[400px]'>
            <div className='w-full flex justify-end'>
            <button onClick={closeModal} className='font-extrabold text-3xl text-blue-700 h-[40px] w-[40px] '>X</button>
            </div>
            <h2 className='text-3xl text-center font-extrabold mb-2 text-blue-700'>Aloqa ma'lumotlari</h2>
            <p className='text-lg mb-4'>Agar siz qabulga yozilmoqchi bo'lsangiz yoki maslahatga muhtoj bo'lsangiz, murojaat qiling</p>
            <from action="#" method="post" > 
                <input placeholder='Ismingiz' className='h-[50px] w-full pl-5 pb-1 mb-10 items-center border-2 border-blue-900 rounded-[10px]' />
                <input placeholder='Ismingiz' className='h-[50px] w-full pl-5 pb-1 mb-10 items-center border-2 border-blue-900 rounded-[10px]' />
                <input placeholder='Ismingiz' className='h-[50px] w-full pl-5 pb-1 mb-10 items-center border-2 border-blue-900 rounded-[10px]' />
                <button className='h-[50px] w-full pl-5 pb-1 items-center text-center text-lg text-white font-bold border-2 bg-blue-900 rounded-[10px]'>Ariza Qoldirish</button> 
            </from>
        </div>  
    </div>
  )
}

export default Modal
