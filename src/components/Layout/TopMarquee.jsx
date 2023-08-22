import React from 'react'
import Marquee from "react-fast-marquee";
import { BsGeoAlt, BsTelephone, BsWhatsapp } from 'react-icons/bs';
import { AiTwotonePhone } from 'react-icons/ai'
const TopMarquee = () => {
    return (
        <>
        <div className='bg-[#C9E065] hidden md:block'>
                <div className='py-2 flex items-center justify-between'>
                    <div className='flex items-center pl-5'>
                       
                        <BsGeoAlt />
                        <h2 className='mx-1 text-[16px] font-normal '>4 Harley Street, London, W1G 9BP</h2>
                    </div>
                    <div className='flex items-center'>
                    <BsTelephone />
                        <h2 className='mx-1 text-[16px] font-normal pr-5'>020 3916 5407</h2>
                        
                        <BsWhatsapp />
                        <h2 className='mx-2 text-[16px] font-normal pr-5'>  077 0669 5644</h2>
                    </div>

                </div>
            </div>
            <div className="md:hidden">
            <Marquee className='bg-[#C9E065] '>
                <div className='py-2 flex items-center'>
                <div className='flex items-center mx-5'>
                <BsGeoAlt />
                        <h2 className='mx-1 text-[16px] font-normal'>4 Harley Street, London, W1G 9BP</h2>
                    </div>
                    <div className='flex items-center mx-5'>
                        <BsTelephone />
                        <h2 className='mx-1 text-[16px] font-normal'>020 3916 5407</h2>
                    </div>
                    <div className='flex items-center mx-5'>
                        <BsWhatsapp />
                        <h2 className='mx-2 text-[16px] font-normal'>  077 0669 5644</h2>
                    </div>

                </div>
            </Marquee>
            </div>
        </>
    )
}

export default TopMarquee