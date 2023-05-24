import React from 'react'
import user from '../../../assests/dr-maham.jpg'
const Banner = () => {
    return (
        <>
            <div className='bg-[#F7F7F5] pb-4' id="banner">
                <div className='container mx-auto pt-[40px] xl:px-0 px-5'>
                    <h2 className='text-[#1F3D64] font-bold font-sans  xl:text-[48px] md:text-[38px] text-[25px] text-center'>Meet Our Leading Specialist</h2>
                    <p className='text-[#1F3D64] font-normal font-sans xl:text-[24px] md:text-[20px] text-[18px] text-center'>UK Specialize Doctor</p>
                </div>
                <div className='container mx-auto max-w-[1050px] mr-[120px] xl:px-0 px-5'>
                    <div className='xl:pl-3 flex xl:flex-nowrap md:flex-nowrap flex-wrap justify-between items-center pt-5'>
                        <div className='border w-[396px] shadow-md xl:order-0 md:order-0 order-1'>
                            <div className='bg-[#C9E065] px-10 py-5'>
                                <h2 className='text-center text-white font-jose uppercase font-bold md:text-[20px] xl:text-[30px] '>Book an appointment </h2>
                                <p className='text-center text-white xl:text-[26px] md:text-[14px] font-jose font-bold'>Call: (800) 345 6789</p>
                            </div>
                            <div className='p-5'>
                                <div className='flex flex-col'>
                                    <label htmlFor="" className='py-[5px] text-[#5C5C5C] font-jose  font-normal text-[18px]'>Full Name</label>
                                    <input type='text' className='border focus:outline-none h-[45px]' />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label htmlFor="" className='py-[5px] text-[#5C5C5C] font-jose font-normal text-[18px]'>Email ID</label>
                                    <input type='email' className='border focus:outline-none h-[45px]' />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="" className='py-[5px] text-[#5C5C5C] font-jose font-normal text-[18px]'>Phone Number</label>
                                    <input type='tel' className='border focus:outline-none h-[45px]' />
                                </div>
                                <div className='pt-5'>
                                    <button className='w-full font-bold xl:text-[24px] md:text-[18px] bg-[#1F3D64] border-2  font-jose uppercase text-white h-[60px] border-[#A640D0]'>Book now</button>
                                    <p className='pt-3 text-[17px] font-normal text-[#1F3D64] font-jose text-center'>Hurry up, limited slots only</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex md:w-[70%] xl:justify-end xl:items-end justify-center items-center xl:order-1 order-0 md:order-1'>
                            <img src={user} alt="user" className='object-cover xl:w-[90%] md:w-[90%] w-full rounded-md ' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner