import React from 'react'
import Layout from '../components/Layout/Layout'
import BannerSlider from '../components/LandingComponents/Home/BannerSlider'
import Services from '../components/LandingComponents/Home/Services'
import Invest from '../components/LandingComponents/Home/Invest'
import SkinCare from '../components/LandingComponents/Home/SkinCare'
import Review from '../components/LandingComponents/Home/Review'
import WhyChoose from '../components/LandingComponents/Home/WhyChoose'
import Results from '../components/LandingComponents/Home/Results'
import MeetLeader from '../components/LandingComponents/Home/MeetLeader'
import whatsapp from '../assests/whatsapp.png'
import consult from '../assests/Group 77.png'
const Home = () => {
    return (
        <Layout>
            <div className='relative'>
                <BannerSlider />
                <Services />
                <Invest />
                <SkinCare />
                <Review />
                <WhyChoose />
                <Results />
                <MeetLeader />
                <div className='fixed bottom-0 z-40 right-4'>
                    <div className='bg-[#5CBD20] rounded-md border-2 borde-white px-4 w-[230px]  py-2'>
                        <div className='flex '>
                            <img src={whatsapp} alt={whatsapp} className='object-cover' />
                            <div className='pl-2'>
                                <h2 className=' text-white text-[15px] font-sans font-medium'>Contact on</h2>
                                <h1 className=' text-white text-[20px] font-sans font-bold'>WhatsApp</h1>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#1F3D64] rounded-md border-2 borde-white w-[250px] px-4 py-2 mt-4'>
                        <div className='flex '>
                            <img src={consult} alt={consult} className='object-cover' />
                            <div className='pl-2'>
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