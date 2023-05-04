import React from 'react'
// import { AiFillCloseSquare } from 'react-icons/ai'
const RequestForCall = () => {
    return (
        <>


            <div className=' w-full px-10'>
                <h2 className='font-Herr font-normal text-[#C9E065] text-[72px] text-center'>Request Call Back</h2>
                <h1 className='text-[30px] font-normal font-intr text-center '>Let's Talk! Schedule a Call with Us Today.</h1>
                <form className='pt-6'>
                    <input type="text" placeholder='NAME' className=' font-sans focus:outline-none font-normal my-5 w-full border-b border-[#1F3D64] placeholder:text-[#1F3D64]' />
                    <input type="text" placeholder='EMAIL' className=' font-sans focus:outline-none font-normal my-5 w-full border-b border-[#1F3D64] placeholder:text-[#1F3D64]' />
                    <input type="text" placeholder='PHONE NUMBER' className=' font-sans focus:outline-none font-normal my-5 w-full border-b border-[#1F3D64] placeholder:text-[#1F3D64]' />
                    <select className='focus:outline-none font-sans font-normal my-5 w-full border-b border-[#1F3D64] placeholder:text-[#1F3D64]'>
                        <option>SELECT SERVICE</option>
                    </select>

                    <div className='flex justify-center items-center py-5'>
                        <button className=' w-[55%] py-[6px] rounded-full bg-[#1F3D64] text-white text-center uppercase'>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default RequestForCall