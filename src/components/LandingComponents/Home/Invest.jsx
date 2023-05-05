import React from 'react'
import invImg from '../../../assests/div.sc_promo_image.png'
const Invest = () => {
  return (
    <>

      <div className='pt-[80px] relative '>
        <div className='bg-[#C9E065]  lg:h-[400px] max-w-[1150px] ml-auto lg:py-0 md:py-4 py-4 '>
          <div className='container mx-auto  xl:px-20 px-5'>
            <div className='max-w-[600px] lg:ml-[37%] lg:pt-[50px] pt-[250px]'>
              <h2 className='text-[#1F3D64] font-sans uppercase  font-medium lg:text-[28px] text-[20px] '>Invest in your skin because it will always pay off in the long run
              </h2>
              <p className='text-[16px] lg:leading-[48px] leading-[30px] font-sans  font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non nunc eros. Suspendisse scelerisque felis ante, et mattis felis scelerisque sodales. Aenean id imperdiet lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit nulla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

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