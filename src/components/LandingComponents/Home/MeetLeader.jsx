import React from 'react'
import leaderImg from '../../../assests/Dr Maham Khan.webp'
import faeImag from '../../../assests/Rectangle 7.png'
const MeetLeader = () => {
  return (
    <>
      <div className='container mx-auto  xl:px-10 px-5 pt-[80px]  relative'>
        <div className='border-4 lg:h-[400px] rounded-2xl  border-[#C9E065] lg:px-0 px-3 lg:py-0 py-3'>
          <div className='max-w-[800px] lg:ml-[50%] md:ml-[50%] lg:pt-0 md:pt-0 pt-[20rem]'>
            <h2 className='text-[#C9E065]  leading-0  text-[60px] font-normal font-Herr text-center'>About <br /> Us</h2>
            <h1 className='text-[#1F3D64]  -mt-[120px] uppercase leading-0 lg:text-[36px] text-[20px] font-sans font-medium'>Meet Our Leading Specialist</h1>
            <p className='text-[14px] text-[#1C1C1C] leading-[25px] text-justify max-w-[550px] font-sans  font-normal'>Dr Maham Khan is an experienced doctor known for her warmth, approachability, and dedication to dermatology. Having trained at the renowned Imperial College Healthcare she now works at leading hospitals in London. She is an internationally renowned dermatologist, who has worked within the NHS for many years. She has gained further experience in the field by doing Masters in Clinical Dermatology from the prestigious St John's Institute of Dermatology. She has carried out cosmetic Dermatology Procedures at Harley Street, London. She has a special interest in acne, skin cancer and inflammatory skin conditions. She believes in a holistic approach to patient management. </p>

            <button className='rounded-full lg:text-[16px] text-[14px] font-bold font-sans mt-3 bg-[#1F3D64] text-[#C9E065] hover:bg-[#C9E065] hover:text-[#1F3D64] uppercase px-8 py-3 '>book an appointment</button>


          </div>
        </div>
        <div className='absolute lg:top-16 top-16 md:top-40'>
          <img src={leaderImg} alt={leaderImg} className='object-cover lg:w-[40%] lg:h-full md:w-full w-[335px] h-[335px]' />
        </div>
        <div className='absolute lg:top-[32%] md:top-[35%] md:left-[35%] top-[30%] left-[30%]'>
          <img src={faeImag} alt={faeImag} className='object-cover lg:w-[80%] w-[50%] md:w-[40%] ' />
        </div>
      </div>
    </>
  )
}

export default MeetLeader