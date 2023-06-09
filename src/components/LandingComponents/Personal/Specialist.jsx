import React from 'react'
import { useState } from 'react'

const Specialist = ({open}) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div className='container mx-auto max-w-[1050px] mr-[120px] pl-3 xl:px-0 px-5 md:px-10 about' id="about">
        <div className='pt-[40px]'>
          <h2 className='text-[#1F3D64] uppercase font-sans  font-semibold xl:text-[41px] text-[25px]'>Dr. Maham Khan</h2>
          <span className='text-[#B58F2E] font-bold font-sans  xl:text-[18px] text-[14px] uppercase'>Consultant Dermatologist</span>
          <p className='xl:text-[20px] text-[16px] font-normal xl:leading-[50px] font-sans  pt-[15px] '>Dr Maham Khan is an experienced doctor known for her warmth, approachability, and dedication to dermatology. Having trained at the renowned Imperial College Healthcare she now works at leading hospitals in London. She is an internationally renowned dermatologist, who has worked within the NHS for many years. She has gained further experience in the field by doing Masters in Clinical Dermatology from the prestigious St John's Institute of Dermatology. She has carried out cosmetic Dermatology Procedures at Harley Street, London. She has a special interest in acne, skin cancer and inflammatory skin conditions. She believes in a holistic approach to patient management.
          </p>

          <button onClick={() => open(true)} className='bg-[#1F3D64] font-sans text-[#C9E065] rounded-md py-4 px-8 mt-[35px] uppercase font-semibold xl:text-[22px] text-[18px]'>make appointment</button>
        </div>
        <div className='pt-[50px]'>
          <div className='border-b'>
            <ul className='flex xl:flex-nowrap flex-wrap items-center pb-5'>
              <li onClick={() => setActiveTab(0)} className={` ${activeTab === 0 ? 'border-b-2 border-[#C9E065] text-[#C9E065] font-bold text-[20px] ' : ' text-[#232323] text-[16px] font-normal'} pb-2 pt-3 cursor-pointer uppercase`}>working works</li>
              <li onClick={() => setActiveTab(1)} className={` ${activeTab === 1 ? 'border-b-2 border-[#C9E065] text-[#C9E065] font-bold text-[20px] ' : ' text-[#232323] text-[16px] font-normal'} pb-2 pt-3 cursor-pointer uppercase mx-5`}>Experience</li>
              <li onClick={() => setActiveTab(2)} className={` ${activeTab === 2 ? 'border-b-2 border-[#C9E065] text-[#C9E065] font-bold text-[20px] ' : ' text-[#232323] text-[16px] font-normal'} pb-2 pt-3 cursor-pointer uppercase`}>Qualifications</li>
            </ul>
          </div>
          <div className='pt-[30px]'>
            <h2 className='text-[24px] font-sans text-[#1F3D64] font-bold pb-3'>Schedule of working hours</h2>
            <p className='text-[14px] font-sans font-normal leading-[26px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

            <div className='pt-[10px]'>
              <ul className='max-w-[500px] '>
                <li className='flex p-2 justify-between items-center bg-[#F4F4F4] px-3 '>
                  <h2 className='text-[#666666] font-semibold font-sans  xl:text-[20px] text-[14px] uppercase'>Mon - Tues :</h2>
                  <h2 className='text-[#666666] font-semibold font-sans  xl:text-[18px] text-[14px] uppercase'>6.00 am - 10.00 pm</h2>
                </li>
                <li className='flex p-2 justify-between items-center px-3 my-3'>
                  <h2 className='text-[#666666] font-semibold font-sans  xl:text-[20px] text-[14px] uppercase'>Wednes - Thurs :</h2>
                  <h2 className='text-[#666666] font-semibold font-sans  xl:text-[18px] text-[14px] uppercase'>8.00 am - 6.00 pm</h2>
                </li>
                <li className='flex p-2 justify-between items-center bg-[#F4F4F4] px-3 '>
                  <h2 className='text-[#666666] font-semibold font-sans  xl:text-[20px] text-[14px] uppercase'>Sun :</h2>
                  <h2 className='text-[#666666] font-semibold font-sans  xl:text-[18px] text-[14px] uppercase'>Closed</h2>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Specialist