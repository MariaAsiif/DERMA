import React from 'react'
import mes from '../../../assests/mess.png'
const Mession = () => {
  return (
    <>

      <div className=' relative '>
        <div className='bg-[#C9E065]  lg:h-[400px] md:h-[380px] h-full max-w-[1000px] ml-auto lg:py-0 md:py-4 py-4 '>
          <div className='container mx-auto   xl:px-20 px-5'>
            <div className='max-w-[600px] lg:ml-[30%] md:ml-[60%] lg:pt-[60px] md:pt-[60px]  pt-[330px]'>
              <img src={mes} alt={mes} className='object-cover lg:w-[80%] w-full md:w-full' />
            </div>

          </div>
          <div className='absolute lg:top-[22.5%] top-5 left-[10%] xl:max-w-[450px]  md:max-w-[370px]'>
            <h2 className='text-[#B58F2E]  leading-0 lg:text-[60px] md:text-[50px] text-[40px] font-normal font-Herr '>Healthy Skin Begins Here </h2>
            <h1 className='text-[#1F3D64] lg:-mt-[30px] uppercase leading-0 lg:text-[41px] md:text-[30px] text-[22px] font-sans font-semibold'>Mission and Vision</h1>
            <p className='text-[#5C636E] leading-[28px]  font-normal font-sans  text-[15px]'>When you book a consultation with one of our specialists, they will conduct a detailed examination, diagnose your condition, and develop a customized treatment plan tailored to your specific needs. To ensure the effectiveness of the treatment, we take into account your medical history and carefully consider your unique skin type.</p>

          </div>
        </div>
      </div>
    </>
  )
}

export default Mession