import React,{useState , useEffect} from 'react'
import BannerGeneric from '../components/GenericComponents/BannerGeneric'
import Doctor from '../components/GenericComponents/Doctor'
import SurgeryDetail from '../components/LandingComponents/Surgeries/SurgeryDetail'
import Faq from '../components/LandingComponents/Surgeries/Faq'
import Layout from '../components/Layout/Layout'
import {Surgery} from '../util/dummyData/Services'
import Services from '../components/LandingComponents/Personal/Services'

const Surgeries = () => {


    const [serviceDetail, setServiceDetail] = useState({})
    const [active, setActive] = useState(0)
  
  
     
    useEffect(() => {
      let findList = Surgery?.find((f) => f.id === active)
      setServiceDetail(findList)
    },[active])
   
    return (
        <Layout>
            <BannerGeneric heading={"Our Services"} subHeading={serviceDetail?.subHeading} />
            <SurgeryDetail serviceDetail={serviceDetail} setActive={setActive} />
            <Faq/>
            <Services/>
            <Doctor />

        </Layout>
    )
}

export default Surgeries