import React from 'react'
import mes from '../../../assests/secdule.png'
const Schedule = () => {
  return (
    <>

      <div className=' relative '>
        <div className='bg-[#C9E065]  lg:h-[400px] max-w-[1000px] ml-auto lg:py-0 md:py-4 py-4 '>
          <div className='container mx-auto  xl:px-20 px-5'>
            <div className='max-w-[600px] lg:ml-[25%] lg:pt-[60px] pt-[250px]'>
              <img src={mes} alt={mes} className='object-cover w-[80%]' />
            </div>

          </div>
          <div className='absolute lg:top-[22.5%] top-24 left-[10%] max-w-[500px]'>
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