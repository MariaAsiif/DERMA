import React from 'react'
import { Link as ScrollLink } from "react-scroll";
const SummerSkin = () => {
  return (
    <>
      <div className='bg-[#1D1D1D] pb-10'>
        <div className='container mx-auto text-center xl:px-10 px-5 pt-[80px]  relative'>

          <h2 className='text-white  leading-0 lg:text-[72px] text-[40px] md:text-[50px] font-normal font-Herr text-center'>Summer Skin Prep</h2>
          <h1 className='text-[#C9E065]  uppercase leading-0 lg:text-[36px] text-[22px] md:text-[25px] font-sans font-medium'>Be the best version of yourself this summer</h1>
          <ScrollLink
            activeClass="active"
            to="before_after"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}   >
            <button className='rounded-full font-semibold font-sans mt-3 bg-[#B58F2E] text-[#FFFFFF] text-[10px] hover:bg-[#C9E065] hover:text-[#1F3D64] uppercase px-8 py-3 '>reveal glowing skin</button>
          </ScrollLink>


        </div>
      </div>
    </>
  )
}

export default SummerSkin