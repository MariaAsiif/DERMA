
import React from 'react'
import g1 from '../../assests/patient-pic.jpg.png'
import g2 from '../../assests/patient-pic2.jpg.png'
const Guest = () => {

    return (
        <>
            <div className='container mx-auto px-10 pt-[80px]'>
                <h1 className='uppercase text-[40px] text-center font-bold text-[#333333]'>WHAT  <span className='text-[#C9E065] '>OUR</span>  GUESTS SAID</h1>
                <h2 className='text-[30px] font-normal text-[#898989] text-center '>Don’t take our word. See what’s our guests said about the spa.</h2>
                <div className='border mt-2 border-[#C9E065] max-w-[50px] mx-auto'></div>

                <div className='flex items-center max-w-[1100px] mx-auto'>
                    <div>
                        <img src={g2} alt={g2} className='object-cover' />
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className=' ml-8 max-w-[700px]'>
                            <p className='text-[#5C5C5C] font-normal text-[20px] leading-[30px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
                                consequat sunt nostrud amet.</p>
                            <p className='text-[20px] font-normal pt-4 '><span className='text-[#C9E065] font-bold'>Jennifer</span>, Sanfransicso Area</p>
                        </div>
                        <div className=''>
                            <h1>new</h1>
                        </div>
                    </div>
                </div>
                <div className='max-w-[1100px] mx-auto mt-6'>
                    <hr />
                </div>

                <div className='flex items-center justify-center max-w-[1100px] mx-auto pt-[40px]'>

                    <div className='flex justify-between items-center'>
                        <div className=''>
                            <h1>new</h1>
                        </div>
                        <div className='max-w-[700px] mr-8'>
                            <p className='text-[#5C5C5C] text-right font-normal text-[20px] leading-[30px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
                                consequat sunt nostrud amet.</p>
                            <p className='text-[20px] text-right font-normal pt-4 '><span className='text-[#C9E065] font-bold'>Jennifer</span>, Sanfransicso Area</p>
                        </div>
                    </div>
                    <div>
                        <img src={g1} alt={g1} className='object-cover' />
                    </div>
                </div>

              

            </div>
        </>
    )
}

export default Guest