import React from 'react'
import exp from '../../../assests/exp.png'

const Experience = () => {
  return (
    <>
      <div className=' bg-[#1F3D64] h-full pb-8 '>
        <div className='container mx-auto  xl:px-20 px-5'>
          <div className='text-center'>
            <h2 className='text-white  leading-0 lg:text-[60px] md:text-[50px] text-[40px] font-normal font-Herr '>Our Experience & Expertise</h2>
            <h1 className='text-[#C9E065] lg:-mt-[30px] uppercase leading-0 lg:text-[41px] text-[25px] md:text-[35px] font-sans font-semibold'>We Take Your Skin Seriously!</h1>
          </div>
          <div className='flex justify-center items-center pt-5'>
            <img src={exp} alt={exp} className='object-cover md:w-[70%] ' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience