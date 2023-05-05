import React from 'react'
import sr1 from '../../../assests/Group 29.png'
import sr2 from '../../../assests/Group 29 (1).png'
import sr3 from '../../../assests/Group 29 (2).png'
const Services = () => {
    return (
        <>
            <div className='container mx-auto pt-[40px] xl:px-20 px-5'>
                <div className='grid grid-cols-3 gap-5'>
                    <div className='flex items-center'>
                        <img src={sr1} alt={sr1} className='object-cover' />
                        <h2 className='text-[#1D1D1D] text-[23px] px-[15px] font-intr font-normal'>Easy Accessibility</h2>
                    </div>
                    <div className='flex items-center'>
                        <img src={sr2} alt={sr2} className='object-cover' />
                        <h2 className='text-[#1D1D1D] text-[23px] px-[15px] font-intr font-normal'>Individualised Care</h2>
                    </div>
                    <div className='flex items-center'>
                        <img src={sr3} alt={sr3} className='object-cover' />
                        <h2 className='text-[#1D1D1D] text-[23px] px-[15px] font-intr font-normal'>In-Depth Consulation</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services