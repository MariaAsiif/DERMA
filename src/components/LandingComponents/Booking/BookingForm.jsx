import React from 'react'

const BookingForm = () => {
    return (
        <>
            <div className='pt-[80px] text-center'>
                <div className='container mx-auto  xl:px-20 px-5 py-8'>
                    <h2 className='text-[#C9E065]  leading-0 lg:text-[72px] md:text-[60px] text-[40px] font-normal font-Herr '>Booking Now</h2>
                    <h1 className='text-[#1F3D64] lg:-mt-[30px] uppercase leading-0 lg:text-[41px] md:text-[30px] text-[22px] font-sans font-semibold'>"Transform Yourself with Personalize Solutions</h1>

                    <form className='pt-6 max-w-[700px] mx-auto'>
                        <div className='grid grid-cols-2 gap-10'>
                            <input type="text" placeholder='NAME' className=' font-sans focus:outline-none font-normal my-5 w-full border-b border-[#1F3D64] placeholder:text-[#1F3D64]' />
                            <input type="text" placeholder='EMAIL' className=' font-sans focus:outline-none font-normal my-5 w-full border-b border-[#1F3D64] placeholder:text-[#1F3D64]' />

                        </div>
                        <div className='grid grid-cols-2 gap-10'>
                            <input type="text" placeholder='DATE OF BIRTH || HH:MM' className=' font-sans focus:outline-none font-normal my-5 w-full border-b border-[#1F3D64] placeholder:text-[#1F3D64]' />
                            <input type="text" placeholder='PHONE NUMBER' className=' font-sans focus:outline-none font-normal my-5 w-full border-b border-[#1F3D64] placeholder:text-[#1F3D64]' />

                        </div>
                        <div className='grid grid-cols-2 gap-10'>
                            <select className='focus:outline-none font-sans font-normal my-5 w-full border-b border-[#1F3D64] placeholder:text-[#1F3D64]'>
                                <option>SELECT COUNTRY</option>
                            </select>
                            <select className='focus:outline-none font-sans font-normal my-5 w-full border-b border-[#1F3D64] placeholder:text-[#1F3D64]'>
                                <option>SELECT SERVICE</option>
                            </select>

                        </div>

                        <textarea placeholder='MESSAGE' rows={2} className=' font-sans focus:outline-none font-normal my-5 w-full border-b border-[#1F3D64] placeholder:text-[#1F3D64]'></textarea>




                        <div className='flex justify-center items-center py-5'>
                            <button className=' w-[55%] py-3 text-[10px] font-semibold font-sans  rounded-full bg-[#1F3D64] text-white text-center uppercase'>book now</button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default BookingForm