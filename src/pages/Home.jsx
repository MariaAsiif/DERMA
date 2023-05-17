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
import whatsapp from '../assests/whatsapp.png'
import consult from '../assests/Group 77.png'
import Popup from '../util/popup/Popup'
import RequestForCall from '../components/LandingComponents/Personal/RequestForCall'
const Home = () => {
  const [show, setShow] = useState(false)

    return (
        <Layout>
             {show && <Popup modalOpen={show} onClose={() => setShow(false)} data={<RequestForCall />} />}
            <div className='relative'>
                <BannerSlider />
                <Services />
                <Invest />
                <SkinCare />
                <Review />
                <WhyChoose />
                {/* <Results /> */}
                <MeetLeader />
                <div className='fixed bottom-2 z-40 right-4'>
                    <a
                        href="https://wa.me/02039165407"
                        class="whatsapp_float"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className='bg-[#5CBD20] rounded-md border-2 borde-white xl:px-4 md:px-2 px-2  xl:w-[230px] md:w-[230px]  py-2'>

                            <div className='flex '>
                                <img src={whatsapp} alt={whatsapp} className='object-cover ' />
                                <div className='pl-2 xl:block md:block hidden'>
                                    <h2 className=' text-white text-[15px] font-sans font-medium'>Contact on</h2>
                                    <h1 className=' text-white text-[20px] font-sans font-bold'>WhatsApp</h1>
                                </div>
                            </div>
                        </div>
                    </a>
                    <div onClick={() => setShow(true)} className='bg-[#1F3D64] cursor-pointer rounded-md border-2 borde-white xl:w-[230px] md:w-[230px] xl:px-4 md:px-2 px-2 py-2 mt-4'>
                        <div className='flex '>
                            <img src={consult} alt={consult} className='object-cover' />
                            <div className='pl-2 xl:block md:block hidden'>
                                <h2 className=' text-white text-[15px] font-sans font-medium'>Book a Free</h2>
                                <h1 className=' text-white text-[20px] font-sans font-bold'>Consultation</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default Home