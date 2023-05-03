import React from 'react'

const Visit = ({open}) => {
    return (
        <>
            <div className='container mx-auto px-10 pt-[80px]'>
                <h1 className='uppercase xl:text-[40px] text-[25px] text-center font-bold text-[#333333]'>YOUR FIRST VISIT IS ALWAYS   <span className='text-[#C9E065] '>FREE</span> </h1>
                <h2 className='xl:text-[30px] text-[20px] font-normal text-[#898989] text-center '>Hurry up! only limited slots left.</h2>
                <div className='border mt-2 border-[#C9E065] max-w-[50px] mx-auto'></div>
                <div className='flex justify-center items-center'>
                    <button onClick={() => open(true)} className='bg-[#1F3D64] text-[#C9E065] rounded-md py-4 px-8 mt-[35px] uppercase font-semibold xl:text-[22px] text-[18px]'>make appointment</button>
                </div>

            </div>
        </>
    )
}

export default Visit