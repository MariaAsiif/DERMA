import React from 'react'
import follow from '../../assests/instagrambanner.png'
import send from '../../assests/pseudo.png'
const Footer = () => {
  return (
    <>
      <div className='pt-[50px]'>
        <div className='container mx-auto px-10 pb-5
 '>
          <h2 className='text-center font-medium text-[23px] pb-5'>Follow on Instagram</h2>
          <img src={follow} alt="folow" className='object-cover' />
        </div>

        {/* bottom footer */}

        <div className='bg-[#EFEFEF] mt-5 pt-[20px] h-full pb-3'>
          <div className='container mx-auto '>
            <div className="flex justify-between ">
              <div className='w-[40%]'>
                <h2 className='font-semibold text-[20px] text-[#171928]'>About Us</h2>
                <p className='pt-6 leading-[28px] font-normal text-[15px]'>
                  Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut
                  labore et dolore magna
                </p>
              </div>
              <div className='w-[25%] '>
                <h2 className='font-semibold text-[20px] text-[#171928]'>Quick Links</h2>
                <div className='pt-6'>
                  <ul className=''>
                    <li className='text-[#1D1D1D] pb-2 font-semibold text-[15px] '>About</li>
                    <li className='text-[#1D1D1D] pb-2 font-semibold text-[15px] '>Surgeries</li>
                    <li className='text-[#1D1D1D] pb-2 font-semibold text-[15px] '>Services</li>
                    <li className='text-[#1D1D1D] pb-2 font-semibold text-[15px] '>Contact</li>
                  </ul>
                </div>
              </div>
              <div className='w-[40%] '>
                <h2 className='font-semibold text-center text-[20px] text-[#171928]'>Contact Us</h2>
                <div className='pt-6 text-center'>
                  <p>176 W Street Name, New York, NY 10014
                    Mon-Fri: 10am - 7pm EST</p>
                  <span>info@londonacneuk.com</span>
                </div>
              </div>
              <div className='col-span-2'>
                <p className='text-[#1F3D64] text-[15px]'>Subscribe to our newsletter You can be always up to date with our Clinic and Cosmetic Center news!</p>
                <div className='pt-5'>
                  <div className='flex justify-between items-center'>
                    <h2 className='text-[10px] font-bold uppercase
                  '>email address</h2>
                    <div className='flex items-center'>
                      <h2 className='text-[#1F3D64] font-semibold mx-3 text-[10px]'>Sign up</h2>
                      <img src={send} alt='send' className='object-cover' />
                    </div>
                  </div>
                  <div className='pt-1'>
                    <textarea rows={3} style={{ background: 'rgba(255, 255, 255, 0.28)' }} className='w-full bg-transparent border rounded'></textarea>
                    <p className='text-[12px] text-[#565C66] font-normal'>London Acne © 2023. All rights reserved. Terms of use and Privacy Policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer