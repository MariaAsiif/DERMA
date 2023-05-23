import React from 'react'
import SummerSkin from '../GenericComponents/SummerSkin'
import BookAppointment from '../GenericComponents/BookAppointment'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'

const HomeFooter = ({ setShow }) => {
    let location = useLocation().pathname
    return (
        <>
            <div className=''>
                <SummerSkin />
                {location !== "/booking" &&
                    <BookAppointment setShow={setShow} />
                }
            </div>
            <Footer />
        </>
    )
}

export default HomeFooter