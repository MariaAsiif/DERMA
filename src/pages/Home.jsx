import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import BannerSlider from '../components/LandingComponents/Home/BannerSlider'
import Services from '../components/LandingComponents/Home/Services'
import Invest from '../components/LandingComponents/Home/Invest'
import SkinCare from '../components/LandingComponents/Home/SkinCare'
import Review from '../components/LandingComponents/Home/Review'
import WhyChoose from '../components/LandingComponents/Home/WhyChoose'
// import Results from '../components/LandingComponents/Home/Results'
import MeetLeader from '../components/LandingComponents/Home/MeetLeader'
//import consult from '../assests/Group 77.png'
import Popup from '../util/popup/Popup'
import RequestForCall from '../components/LandingComponents/Personal/RequestForCall'
import BeforeAfter from '../components/LandingComponents/Home/BeforAfter'
import { BsWhatsapp } from 'react-icons/bs'
const Home = () => {
    const [show, setShow] = useState(false)

    return (
        <Layout>
            {show && <Popup modalOpen={show} onClose={() => setShow(false)} data={<RequestForCall />} />}
            <div className='relative'>
                <BannerSlider />
                <Invest />
                <Services />
                <SkinCare />
                <BeforeAfter/>
                <Review />
                <WhyChoose />
                <MeetLeader />
                <div className='fixed bottom-2 z-40 right-4'>
                    {/* <a target="_blank" href="https://api.whatsapp.com/send?phone=447706695644" rel="noreferrer">
                        <div className='bg-[#5CBD20] rounded-md border-2 borde-white xl:px-4 md:px-2 px-2  xl:w-[230px] md:w-[230px]  py-2'>

                            <div className='flex '>
                                <img src={whatsapp} alt={whatsapp} className='object-cover ' />
                                <div className='pl-2 xl:block md:block hidden'>
                                    <h2 className=' text-white text-[15px] font-sans font-medium'>Contact on</h2>
                                    <h1 className=' text-white text-[20px] font-sans font-bold'>WhatsApp</h1>
                                </div>
                            </div>
                        </div>
                    </a> */}
                    <div className="flex justify-center p-10">
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=447706695644" rel="noreferrer">
            <div className="-mt-8 inline-block rounded-full bg-[#C9E065] p-4 shadow-md">
            <BsWhatsapp size={50} />
            </div>
            </a>
          </div>
                    {/* <div onClick={() => setShow(true)} className='bg-[#1F3D64] cursor-pointer rounded-md border-2 borde-white xl:w-[230px] md:w-[230px] xl:px-4 md:px-2 px-2 py-2 mt-4'>
                        <div className='flex '>
                            <img src={consult} alt={consult} className='object-cover' />
                            <div className='pl-2 xl:block md:block hidden'>
                                <h2 className=' text-white text-[15px] font-sans font-medium'>Book </h2>
                                <h1 className=' text-white text-[20px] font-sans font-bold'>Consultation</h1>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
        </Layout>
    )
}

export default Home