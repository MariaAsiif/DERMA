import React from 'react'
import whyChooseImg from '../../../assests/Group 24.png'
const WhyChoose = () => {
  return (
    <>
      <div className='bg-[#1F3D64] pb-8 mt-[40px]'>
        <div className='container mx-auto  xl:px-20 px-5 pt-[80px] '>
          <div className='flex md:items-center lg:flex-nowrap md:flex-nowrap flex-wrap '>
            <div className='w-full '>
              <img src={whyChooseImg} alt={whyChooseImg} className='object-cover w-full' />
            </div>
            <div className='lg:pl-10 md:pl-5 w-[100%]'>
              <h2 className='text-white leading-0 lg:text-[60px] text-[40px] font-normal font-Herr '>Why Choose Us</h2>
              <h1 className='text-[#C9E065]  -mt-[10px] uppercase leading-0 lg:text-[41px] text-[25px] font-sans font-medium'>Why we are best in UK’s</h1>
              <p className='text-[16px] text-white leading-[28px] font-sans text-justify  font-normal'>At London Acne Clinic, we are committed to giving our patients the highest quality treatment and attention. We are competent and educated dermatologists who are dedicated to assisting our patients in achieving their skincare objectives through personalized treatment action plan and the utilization of cutting-edge techniques.
                We provide a diverse range of services, including acne, blemishes, pigmentation, melasma, and other treatments, as well as surgical procedures such as mole and wart removal. Our patients consistently rave about the outcomes they get from our treatments, and we're honored to have received so many positive feedback.
                We encourage you to come in and see yourself why London Acne Clinic is the carry out the responsibilities for dermatology care. </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyChoose