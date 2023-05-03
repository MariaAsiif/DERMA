import React from 'react'
import Marquee from "react-fast-marquee";
import { AiTwotonePhone } from 'react-icons/ai';
const TopMarquee = () => {
    return (
        <>
            <Marquee className='bg-white'>
                <div className='py-2 flex items-center'>
                    <div className='flex items-center'>
                        <AiTwotonePhone />
                        <h2 className='mx-1 text-[16px] font-normal'>077 0669 5644</h2>
                    </div>
                    <div className='flex items-center mx-2'>
                        <AiTwotonePhone />
                        <h2 className='mx-1 text-[16px] font-normal'>020 3916 5407</h2>
                    </div>
                  
                </div>
            </Marquee>

        </>
    )
}

export default TopMarquee