import React from 'react'
import leaderImg from '../../../assests/Dr Maham Khan.webp'
import faeImag from '../../../assests/Rectangle 7.png'
const MeetLeader = () => {
  return (
    <>
      <div className='container mx-auto  xl:px-10 px-5 pt-[80px]  relative'>
        <div className='border-4 h-[400px] rounded-2xl  border-[#C9E065] '>
          <div className='max-w-[800px] ml-[50%]'>
            <h2 className='text-[#C9E065]  leading-0 text-[60px] font-normal font-Herr text-center'>About <br /> Us</h2>
            <h1 className='text-[#1F3D64] -mt-[120px] uppercase leading-0 text-[36px] font-sans font-medium'>Meet Our Leading Specialist</h1>
            <p className='text-[14px] text-[#1C1C1C] leading-[25px] text-justify max-w-[550px] font-sans  font-normal'>Dr Maham Khan is an experienced doctor known for her warmth, approachability, and dedication to dermatology. Having trained at the renowned Imperial College Healthcare she now works at leading hospitals in London. She is an internationally renowned dermatologist, who has worked within the NHS for many years. She has gained further experience in the field by doing Masters in Clinical Dermatology from the prestigious St John's Institute of Dermatology. She has carried out cosmetic Dermatology Procedures at Harley Street, London. She has a special interest in acne, skin cancer and inflammatory skin conditions. She believes in a holistic approach to patient management. </p>

            <button className='rounded-full font-bold font-sans mt-3 bg-[#1F3D64] text-[#C9E065] hover:bg-[#C9E065] hover:text-[#1F3D64] uppercase px-8 py-3 '>book an appointment</button>


          </div>
        </div>
        <div className='absolute top-16'>
          <img src={leaderImg} alt={leaderImg} className='object-cover w-[40%]' />
        </div>
        <div className='absolute top-[32%] left-[30%]'>
          <img src={faeImag} alt={faeImag} className='object-cover w-[80%] ' />
        </div>
      </div>
    </>
  )
}

export default MeetLeader