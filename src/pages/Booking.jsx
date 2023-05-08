import React from 'react'
import Layout from '../components/Layout/Layout'
import BannerGeneric from '../components/GenericComponents/BannerGeneric'
import Schedule from '../components/LandingComponents/Booking/Schedule'
import BookingForm from '../components/LandingComponents/Booking/BookingForm'

const Booking = () => {
  return (
    <Layout>
      <BannerGeneric heading={"Booking Now"} subHeading={"Book now and take the first step towards a better you"} />
      <Schedule />
      <BookingForm />
    </Layout>
  )
}

export default Booking