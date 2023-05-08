import React from 'react'
import Layout from '../components/Layout/Layout'
import BannerGeneric from '../components/GenericComponents/BannerGeneric'
import ServicesList from '../components/LandingComponents/Services/ServicesList'
import ServicesTreatment from '../components/LandingComponents/Services/ServicesTreatment'
import Doctor from '../components/GenericComponents/Doctor'

const Services = () => {
  return (
    <Layout>
      <BannerGeneric heading={"We Best Serivces"} subHeading={"OUR SERVICES"} />
      <ServicesList />
      <ServicesTreatment />
      <Doctor />
    </Layout>
  )
}

export default Services