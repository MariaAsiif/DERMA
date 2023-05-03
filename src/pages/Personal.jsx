import React,{useState} from 'react'
import Layout from '../components/Layout/Layout'
import Specialist from '../components/LandingComponents/Personal/Specialist'
import Banner from '../components/LandingComponents/Personal/Banner'
import Treatments from '../components/LandingComponents/Personal/Treatments'
import Services from '../components/LandingComponents/Personal/Services'
import Pricing from '../components/LandingComponents/Personal/Pricing'
import Guest from '../components/LandingComponents/Personal/Guest'
import Visit from '../components/LandingComponents/Personal/Visit'
import Popup from '../util/popup/Popup'
import RequestForCall from '../components/LandingComponents/Personal/RequestForCall'

const Personal = () => {
    const [show, setShow] = useState(false)

    return (
        <Layout>
            {show && <Popup modalOpen={show} onClose={() => setShow(false)} data={<RequestForCall />} />}

            <Banner  />
            <Specialist open={setShow}/>
            <Treatments />
            <Services />
            <Pricing open={setShow} />
            <Guest />
            <Visit open={setShow}/>
        </Layout>
    )
}

export default Personal