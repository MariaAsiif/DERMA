import React from 'react'

const BannerGeneric = ({ heading, subHeading }) => {
    return (
        <>
            <div className='bg-[#F7F7F7] mt-[25px] md:mt-[60px] xl:mt-[20px]'>
                <div className='container mx-auto  xl:px-20 px-5 lg:py-8 py-5'>
                    <div className='text-center'>
                        <h2 className='text-[#C9E065]  leading-0 lg:text-[60px] md:text-[50px] text-[40px] font-normal font-Herr '>{heading} </h2>
                        <h1 className='text-[#1F3D64] lg:-mt-[30px] uppercase leading-0 lg:text-[36px] md:text-[30px] text-[22px] font-sans font-semibold'>{subHeading}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerGeneric