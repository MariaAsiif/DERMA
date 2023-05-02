import React from 'react'
import Layout from '../components/Layout/Layout'
import Specialist from '../components/LandingComponents/Specialist'
import Banner from '../components/LandingComponents/Banner'
import Treatments from '../components/LandingComponents/Treatments'
import Services from '../components/LandingComponents/Services'
import Pricing from '../components/LandingComponents/Pricing'
import Guest from '../components/LandingComponents/Guest'
import Visit from '../components/LandingComponents/Visit'

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