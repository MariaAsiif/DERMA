import React from 'react'
import SummerSkin from '../GenericComponents/SummerSkin'
import BookAppointment from '../GenericComponents/BookAppointment'
import Footer from './Footer'

const HomeFooter = ({setShow}) => {
    return (
        <>
            <div className=''>
                <SummerSkin />
                <BookAppointment setShow={setShow}/>
            </div>
            <Footer />
        </>
    )
}

export default HomeFooter