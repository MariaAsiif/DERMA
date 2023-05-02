import React from 'react'

const Visit = () => {
    return (
        <>
            <div className='container mx-auto px-10 pt-[80px]'>
                <h1 className='uppercase text-[40px] text-center font-bold text-[#333333]'>YOUR FIRST VISIT IS ALWAYS   <span className='text-[#C9E065] '>FREE</span> </h1>
                <h2 className='text-[30px] font-normal text-[#898989] text-center '>Hurry up! only limited slots left.</h2>
                <div className='border mt-2 border-[#C9E065] max-w-[50px] mx-auto'></div>
                <div className='flex justify-center items-center'>
                    <button className='bg-[#1F3D64] text-[#C9E065] rounded-md py-4 px-8 mt-[35px] uppercase font-semibold text-[22px]'>make appointment</button>
                </div>

            </div>
        </>
    )
}

export default Visit