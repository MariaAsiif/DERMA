import React from 'react'
import Layout from '../components/Layout/Layout'
import BannerGeneric from '../components/GenericComponents/BannerGeneric'
import Mession from '../components/LandingComponents/About/Mession'
import Review from '../components/LandingComponents/Home/Review'
import Experience from '../components/LandingComponents/About/Experience'
import MeetLeader from '../components/LandingComponents/Home/MeetLeader'

const AboutUs = () => {
    return (
        <Layout>
            <BannerGeneric heading={"About Us"} subHeading={"Healthy Skin Begins Here"} />
            <Mession />
            <Review/>
            <Experience/>
            <MeetLeader/>
        </Layout>
    )
}

export default AboutUs