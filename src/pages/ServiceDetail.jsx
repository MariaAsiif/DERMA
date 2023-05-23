import React,{useState , useEffect} from 'react'
import Layout from '../components/Layout/Layout'
import BannerGeneric from '../components/GenericComponents/BannerGeneric'
import ServicesDetails from '../components/LandingComponents/Services/ServicesDetail'
// import Doctor from '../components/GenericComponents/Doctor'
import {Services} from '../util/dummyData/Services'
import { useParams } from 'react-router-dom'

const ServiceDetail = () => {

    const [serviceDetail, setServiceDetail] = useState({})


    const id = useParams().id
  
    useEffect(() => {
      let findList = Services?.find((f) => f.id === Number(id))
      setServiceDetail(findList)
    },[id])

    return (
        <Layout>
            <BannerGeneric heading={"Our Services"} subHeading={serviceDetail?.subHeading} />
            <ServicesDetails serviceDetail={serviceDetail} />
            {/* <Doctor /> */}

        </Layout>
    )
}

export default ServiceDetail