
import React from 'react'

const Pricing = () => {
    const priceList = [{ heading: 'BLISS', price: '49', desc: '' }, { heading: 'REJUVENATE', price: '99', desc: '' }, { heading: 'GLAMOUR', price: '149', desc: '' }]
    return (
        <>
            <div className='container mx-auto px-10 pt-[40px]'>
                <h1 className='uppercase text-[40px] text-center font-bold text-[#333333]'>SIMPLE <span className='text-[#C9E065] '>PRICING</span></h1>
                <h2 className='text-[30px] font-normal text-[#898989] text-center '>Choose a pricing plan that fits for you.</h2>
                <div className='border mt-2 border-[#C9E065] max-w-[50px] mx-auto'></div>

                <div className='grid grid-cols-3 gap-5 pt-[30px]'>
                    {
                        priceList.map((item, i) => (
                            <div key={i} className={`   border-2 pb-5 flex flex-col justify-center items-center rounded ${i === 1 ? 'border-[#C9E065]' :'border-[#1F3D64]'}`}>
                                <h2 className={`text-[20px] ${i === 1 ? 'text-[#C9E065]' :'text-[#1F3D64]'} font-semibold pt-5`}>{item?.heading}</h2>
                                <h2 className={`flex font-bold text-[60px] ${i === 1 ?'text-[#C9E065]': 'text-[#1F3D64]'} `}><span className='text-[30px] font-normal'>$</span>{item?.price}</h2>
                                <p className='text-[#1F3D64] font-normal text-[18px] leading-[30px]'>Dummy Text</p>
                                <p className='text-[#1F3D64] font-normal text-[18px] leading-[30px]'>Dummy Text</p>
                                <p className='text-[#1F3D64] font-normal text-[18px] leading-[30px]'>Dummy Text</p>
                                <p className='text-[#1F3D64] font-normal text-[18px] leading-[30px]'>Dummy Text</p>
                                <button className={` mt-[20px] text-center border  px-5 py-2 ${i === 1 ?'bg-[#C9E065] border-[#C9E065] shadow-md rounded text-white': 'bg-transparent text-[#1F3D64] border-[#1F3D64]'} uppercase text-[18px] font-bold`}>choose this plan</button>
                            </div>

                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Pricing