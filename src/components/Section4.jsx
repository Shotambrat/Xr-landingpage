import React from 'react'

const Section4 = () => {
  return (
    <div id='section-four' className='h-auto md:h-[200px] md:h-[270px] w-full flex justify-center items-center bg-blue-800'>
      <div className='md:h-full md:w-[80%] h-full flex flex-col justify-around items-center'>
        <h2 className='text-white text-2xl md:text-5xl'>
        Ixtisoslik
        </h2>
        <div className='w-full h-1/2 flex justify-between flex-col md:flex-row text-[14px] md:text-xl'>
            <div className='w-[250px] md:w-1/4 h-[90px] md:h-[120px] mt-4 md:mt-0 bg-white flex justify-center items-center md:rounded-[30px] rounded-[10px]'>
                <p>
                Yurak-qon tomir jarrohligi
                </p>
            </div>
            <div className='w-full md:w-1/4 h-[90px] md:h-[120px] mt-4 md:mt-0 bg-white flex justify-center items-center md:rounded-[30px] rounded-[10px]'>
                <p>
                Intervension kardiologiya
                </p>    
            </div>
            <div className='w-full md:w-1/4 h-[90px] md:h-[120px] mb-4 md:mb-0 mt-4 md:mt-0 bg-white flex justify-center items-center md:rounded-[30px] rounded-[10px]'>
                <p>
                Minimal invaziv  kardiojarrohlik
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Section4
