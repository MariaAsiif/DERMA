import React from 'react'
import Layout from '../components/Layout/Layout'
import Specialist from '../components/LandingComponents/Personal/Specialist'
import Banner from '../components/LandingComponents/Personal/Banner'
import Treatments from '../components/LandingComponents/Personal/Treatments'
import Services from '../components/LandingComponents/Personal/Services'
import Pricing from '../components/LandingComponents/Personal/Pricing'
import Guest from '../components/LandingComponents/Personal/Guest'
import Visit from '../components/LandingComponents/Personal/Visit'

const Personal = () => {
    return (
        <Layout>
            <Banner />
            <Specialist />
            <Treatments />
            <Services />
            <Pricing />
            <Guest />
            <Visit/>
        </Layout>
    )
}

export default Personal