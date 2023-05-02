import React from 'react'
import sr1 from '../../assests/div.custom-video-player (1).png'
import sr2 from '../../assests/div.custom-video-player.png'
const Services = () => {
    return (
        <>
            <div className='bg-[#1F3D64] mt-[126px] pb-[40px]'>
                <div className='container mx-auto px-10 pt-[40px]'>
                    <h1 className='text-center font-normal text-[60px] text-white '>How We Do It</h1>
                    <h2 className='text-[41px] text-[#C9E065] text-center uppercase'>Treatment & Services</h2>
                    <p className='text-center max-w-[900px] text-[16px] mx-auto pt-[30px] text-white font-medium leading-[20px]'>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>

                    <div className='flex items-center pt-[30px]'>
                        <div>
                            <img src={sr2} alt={sr2} className='object-cover' />
                        </div>
                        <div>
                            <img src={sr1} alt={sr1} className='object-cover' />
                        </div>
                    </div>
                    <div className='flex justify-center items-center pt-[50px]'>
                        <button className='uppercase bg-[#C9E065] text-[#1F3D64] text-[16px] font-normal rounded-full px-4 py-1'>More Video</button>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Services