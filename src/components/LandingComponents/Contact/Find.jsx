import React from 'react'
import map from '../../../assests/map.png'
import location from '../../../assests/location.png'
import facebook from '../../../assests/facebook.png'
import twitter from '../../../assests/twitter.png'
import phone from '../../../assests/phone.png'
import message from '../../../assests/messge.png'
import insta from '../../../assests/isnsta.png'

const Find = () => {
  return (
    <>
      <div className=' relative '>
        <div className='bg-[#C9E065]  lg:h-[450px] max-w-[970px] mr-auto lg:py-0 md:py-4 py-4 '>
          <div className='container mx-auto  xl:px-20 px-5'>
            <div className='max-w-[600px] pt-[50px] flex justify-end'>
              <img src={map} alt={map} className='object-cover w-[90%]' />
            </div>

          </div>
          <div className='absolute lg:top-[22.5%] top-24 right-[10%] max-w-[450px]'>
            <h2 className='text-[#B58F2E]  leading-0 lg:text-[60px] md:text-[50px] text-[40px] font-normal font-Herr '>Get In Touch</h2>
            <h1 className='text-[#1F3D64] lg:-mt-[30px] uppercase leading-0 lg:text-[40px] md:text-[30px] text-[22px] font-intr font-normal'>How to Find Us</h1>
            <p className='text-[#5C636E] leading-[28px]  font-normal font-sans  text-[15px]'>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

            <div className='grid grid-cols-2 gap-5'>
              <div className='flex flex-row items-center'>
                <img src={message} alt={message} className='object-cover' />
                <div className='mx-3 mt-3'>
                  <h1 className='text-[14px] font-sans  font-semibold'>E-mail</h1>
                  <p className='text-[15px] font-sans  font-normal'>support@example.com</p>
                </div>
              </div>
              <div className='flex flex-row items-center'>
                <img src={location} alt={location} className='object-cover' />
                <div className='mx-3 mt-3'>
                  <h1 className='text-[14px] font-sans  font-semibold'>Adress:</h1>
                  <p className='text-[15px] font-sans  font-normal'>176 W Street Name, New York, NY 10014</p>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-5 mt-0'>
              <div className='flex flex-row items-center'>
                <img src={phone} alt={phone} className='object-cover' />
                <div className='mx-3 mt-3'>
                  <h1 className='text-[14px] font-sans  font-semibold'>Phone:</h1>
                  <p className='text-[15px] font-sans  font-normal'>+1(800)123-4566</p>
                </div>
              </div>
              <div className='flex flex-row items-center'>
                <img src={twitter} alt={twitter} className='object-cover ' />
                <img src={insta} alt={insta} className='object-cover ' />
                <img src={facebook} alt={facebook} className='object-cover ' />
                
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Find