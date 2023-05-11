import React from 'react'
import mes from '../../../assests/secdule.png'
const Schedule = () => {
  return (
    <>

      <div className=' relative '>
        <div className='bg-[#C9E065]  lg:h-[400px] max-w-[1000px] ml-auto lg:py-0 md:py-4 py-4 '>
          <div className='container mx-auto  xl:px-20 px-5'>
            <div className='max-w-[600px] xl:ml-[25%] md:ml-[60%] xl:pt-[60px] md:pt-[40px] pt-[250px]'>
              <img src={mes} alt={mes} className='object-cover xl:w-[80%] w-full ' />
            </div>

          </div>
          <div className='absolute xl:top-[22.5%] top-10 left-[8%] max-w-[500px]'>
            <h2 className='text-[#B58F2E]  leading-0 lg:text-[60px] md:text-[50px] text-[40px] font-normal font-Herr '>Book Now for a Better You </h2>
            <h1 className='text-[#1F3D64] lg:-mt-[30px] uppercase leading-0 lg:text-[32px] md:text-[30px] text-[22px] font-sans font-semibold'>Schedule Your Appointment</h1>
            <p className='text-[#5C636E] leading-[28px]  font-normal font-sans  text-[15px]'>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

          </div>
        </div>
      </div>
    </>
  )
}

export default Schedule