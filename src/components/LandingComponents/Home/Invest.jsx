import React from 'react'
import invImg from '../../../assests/div.sc_promo_image.png'
const Invest = () => {
  return (
    <>

      <div className='pt-[80px] relative '>
        <div className='bg-[#C9E065]  xl:h-[400px] max-w-[1150px] ml-auto lg:py-0 md:py-4 py-4 '>
          <div className='container mx-auto xxtra-small:mx-0  xl:px-20 px-5'>
            <div className='xl:max-w-[600px] md:max-w-[400px] xxtra-small:w-[250px] lg:ml-[37%] md:ml-[46%] lg:pt-[50px] xxtra-small:pt-[200px] xxtra-small:ml-[0px] pt-[300px] md:pt-[5px]'>
              <h2 className='text-[#1F3D64] font-sans uppercase  font-medium lg:text-[28px] text-[20px] '>Invest in your skin because it will always pay off in the long run
              </h2>
              <p className='text-[16px] lg:leading-[48px] leading-[30px] font-sans  font-normal'>Investing in your skin is a wise decision that yields long-term benefits. At our acne clinic, we prioritize the well-being of your skin and provide effective solutions for a variety of acne-related concerns. Our team of expert dermatologists is dedicated to delivering personalized care to help you achieve a clear and healthy complexion. </p>

              <button className='rounded-full font-bold lg:text-auto text-[14px] font-sans mt-3 bg-[#1F3D64] text-[#C9E065] hover:bg-[#C9E065] hover:text-[#1F3D64] uppercase px-8 py-3 '>contact us</button>
            </div>



          </div>
          <div className='absolute lg:top-[22.5%] top-24 left-[5.5%]'>
            <img src={invImg} alt={invImg} className='object-cover lg:w-[85%] md:w-[50%]' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Invest