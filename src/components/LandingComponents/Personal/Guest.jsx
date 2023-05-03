
import React from 'react'
import g1 from '../../../assests/patient-pic.jpg.png'
import g2 from '../../../assests/patient-pic2.jpg.png'
// import q1 from '../../../assests/quot-02.svg'
import q2 from '../../../assests/quot-01.svg'
const Guest = () => {

    return (
        <>
            <div className='container mx-auto px-10 pt-[80px]' id="review">
                <h1 className='uppercase xl:text-[40px] text-[25px] text-center font-bold  font-sans  text-[#333333]'>WHAT  <span className='text-[#C9E065] '>OUR</span>  GUESTS SAID</h1>
                <h2 className='xl:text-[30px] text-[20px] font-normal text-[#898989] text-center '>Don’t take our word. See what’s our guests said about the spa.</h2>
                <div className='border mt-2 border-[#C9E065] max-w-[50px] mx-auto'></div>

                <div className='flex xl:flex-nowrap md:flex-nowrap flex-wrap items-center max-w-[1100px] mx-auto xl:mt-0 md:mt-0 mt-5'>
                    <div className='flex justify-center items-center  xl:w-auto md:w-auto w-full'>
                        <img src={g2} alt={g2} className='object-cover xl:w-auto md:w-auto w-[30%]' />
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className=' ml-8 max-w-[700px]'>
                            <p className='text-[#5C5C5C] font-normal font-sans xl:text-[20px] text-[14px] leading-[30px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
                                consequat sunt nostrud amet.</p>
                            <p className='text-[20px] font-normal pt-4 '><span className='text-[#C9E065] font-bold'>Jennifer</span>, Sanfransicso Area</p>
                        </div>
                        <div className=''>
                            <img src={q2} alt={q2} className='object-cover' />
                        </div>
                    </div>
                </div>
                <div className='max-w-[1100px] mx-auto mt-6'>
                    <hr />
                </div>

                <div className='flex xl:flex-nowrap md:flex-nowrap flex-wrap items-center justify-center max-w-[1100px] mx-auto pt-[40px]'>

                    <div className='flex  justify-between items-center'>
                        <div className='xl:order-1 md:order-1 order-0 '>
                            <img src={q2} alt={q2} className='object-cover' />
                        </div>
                        <div className='max-w-[700px] mr-8 xl:order-0 md:order-0 order-1'>
                            <p className='text-[#5C5C5C] text-right font-normal xl:text-[20px] text-[14px] leading-[30px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
                                consequat sunt nostrud amet.</p>
                            <p className='text-[20px] text-right font-normal pt-4 '><span className='text-[#C9E065] font-bold'>Jennifer</span>, Sanfransicso Area</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center  xl:w-auto md:w-auto w-full xl:mt-0 md:mt-0 mt-2'>
                        <img src={g1} alt={g1} className='object-cover xl:w-auto md:w-auto w-[30%]' />
                    </div>
                </div>



            </div>
        </>
    )
}

export default Guest