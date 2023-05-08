import React from 'react'
import Layout from '../components/Layout/Layout'
import Find from '../components/LandingComponents/Contact/Find'
import BannerGeneric from '../components/GenericComponents/BannerGeneric'
import ContactForm from '../components/LandingComponents/Contact/ContactForm'

const ContactUs = () => {
  return (
    <Layout>
      <BannerGeneric heading={"Contact US"} subHeading={"Get in touch with us"} />
      <Find/>
      <ContactForm/>
    </Layout>
  )
}

export default ContactUs