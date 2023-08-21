import React from 'react'
import Marquee from "react-fast-marquee";
import { BsWhatsapp } from 'react-icons/bs';
import { AiTwotonePhone } from 'react-icons/ai'
const TopMarquee = () => {
    return (
        <>
            <Marquee className='bg-[#C9E065]'>
                <div className='py-2 flex items-center'>
                    <div className='flex items-center'>
                        <h2 className='mx-2'>For Appointment Call</h2>
                        <AiTwotonePhone />
                        <h2 className='mx-1 text-[16px] font-normal'>020 3916 5407</h2>
                    </div>
                    <div className='flex items-center mx-2'>
                        <h2 className='mx-2'>For WhatsApp</h2>
                        <BsWhatsapp />
                        <h2 className='mx-2 text-[16px] font-normal'>  077 0669 5644</h2>
                    </div>

                </div>
            </Marquee>

        </>
    )
}

export default TopMarquee