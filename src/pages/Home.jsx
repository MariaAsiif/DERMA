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
const Home = () => {
    return (
        <Layout>
            <BannerSlider />
            <Services/>
            <Invest/>
            <SkinCare/>
            <Review/>
            <WhyChoose/>
            <Results/>
            <MeetLeader/>
        </Layout>
    )
}

export default Home