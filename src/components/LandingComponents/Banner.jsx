import React from 'react'
import user from '../../assests/spa-beauty.png.png'
const Banner = () => {
    return (
        <>
            <div className='bg-[#F7F7F5] pb-4'>
                <div className='container mx-auto pt-[40px]'>
                    <h2 className='text-[#1F3D64] font-bold text-[48px] text-center'>Meet Our Leading Specialist</h2>
                    <p className='text-[#1F3D64] font-normal text-[24px] text-center'>UK Specialize Doctor</p>
                </div>
                <div className='container mx-auto max-w-[1050px] mr-[120px]'>
                    <div className='pl-3 flex justify-between items-center pt-5'>
                        <div className='border w-[396px] shadow-md'>
                            <div className='bg-[#C9E065] px-10 py-5'>
                                <h2 className='text-center text-white uppercase font-bold text-[30px]'>Book an appointment </h2>
                                <p className='text-center text-white text-[26px] font-bold'>Call: (800) 345 6789</p>
                            </div>
                            <div className='p-5'>
                                <div className='flex flex-col'>
                                    <label htmlFor="" className='py-[5px] text-[#5C5C5C] font-normal text-[18px]'>Full Name</label>
                                    <input type='text' className='border focus:outline-none h-[45px]' />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label htmlFor="" className='py-[5px] text-[#5C5C5C] font-normal text-[18px]'>Email ID</label>
                                    <input type='email' className='border focus:outline-none h-[45px]' />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="" className='py-[5px] text-[#5C5C5C] font-normal text-[18px]'>Phone Number</label>
                                    <input type='tel' className='border focus:outline-none h-[45px]' />
                                </div>
                                <div className='pt-5'>
                                    <button className='w-full font-bold text-[24px] bg-[#1F3D64] border-2 uppercase text-white h-[60px] border-[#A640D0]'>Book now</button>
                                    <p className='pt-3 text-[17px] font-normal text-[#1F3D64] text-center'>Hurry up, limited slots only</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-end items-end'>
                            <img src={user} alt="user" className='object-cover w-[90%] ' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner