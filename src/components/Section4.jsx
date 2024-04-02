import React from 'react'

const Section4 = () => {
  return (
    <div className='h-[200px] md:h-[270px] w-full flex justify-center items-center bg-blue-800'>
      <div className='md:w-full md:w-[80%] h-full flex flex-col justify-around items-center'>
        <h2 className='text-white text-2xl md:text-5xl'>
        Ixtisoslik
        </h2>
        <div className='w-full h-1/4 flex justify-between text-[14px] md:text-xl'>
            <div className='w-[29%] md:w-1/4 bg-white flex justify-center items-center md:rounded-[30px] rounded-[10px]'>
                <p>
                Yurak-qon tomir jarrohligi
                </p>
            </div>
            <div className='w-[29%] md:1/4 bg-white flex justify-center items-center md:rounded-[30px] rounded-[10px]'>
                <p>
                Yurak-qon tomir jarrohligi
                </p>
            </div>
            <div className='w-[29%] md:w-1/4 bg-white flex justify-center items-center md:rounded-[30px] rounded-[10px]'>
                <p>
                Yurak-qon tomir jarrohligi
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Section4
