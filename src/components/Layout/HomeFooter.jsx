import React from 'react'
import SummerSkin from '../GenericComponents/SummerSkin'
import BookAppointment from '../GenericComponents/BookAppointment'
import Footer from './Footer'

const HomeFooter = () => {
    return (
        <>
            <div className=' pt-[80px]'>
                <SummerSkin />
                <BookAppointment />
            </div>

            <Footer />
        </>
    )
}

export default HomeFooter