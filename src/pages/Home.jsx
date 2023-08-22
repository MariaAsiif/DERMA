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
                <Services />
                <Invest />
                
                <SkinCare />
                <BeforeAfter/>
                <Review />
                <WhyChoose />
                <MeetLeader />
                
            </div>
        </Layout>
    )
}

export default Home