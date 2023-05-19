import React from 'react'
import d1 from '../../assests/hospital-img.png.png'
import d2 from '../../assests/equipment.png.png'
import d3 from '../../assests/medicine.png.png'
import d4 from '../../assests/ambulance.png.png'
import d5 from '../../assests/doctor-symbol.png.png'
import d6 from '../../assests/certificate-img.png.png'
import doctor from '../../assests/doctor-img.png (1).png'

const Doctor = () => {
    return (
        <>
            <div className='container mx-auto text-center xl:px-10 px-5 pt-[50px]'>
                <div className='flex xl:flex-nowrap md:flex-nowrap flex-wrap justify-between'>
                    <div className=''>
                        <ul className='xl:pt-40  pt-5'>
                            <li>
                                <div className=' md:max-w-md max-w-[300px]'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <h2 className='xl:text-[20px] md:text-[16px] text-[18px] font-medium font-mons mx-6'>High Hospitality</h2>
                                        </div>
                                        <div>
                                            <img src={d1} alt={d1} className="object-cover w-[50px] h-[50px]" />
                                        </div>

                                    </div>
                                    <p className='text-right font-medium font-mons text-[16px] pt-1'>where hospitality, expertise, and certified services converge</p>
                                </div>
                            </li>
                            <li className='py-14'>
                                <div className=' md:max-w-md max-w-[300px]'>
                                    <div className='flex justify-between'>
                                        <h2 className='xl:text-[20px] md:text-[16px] text-[18px] font-medium font-mons mx-5'>New Equipment</h2>
                                        <img src={d2} alt={d2} className="object-cover w-[50px] h-[50px]" />
                                    </div>
                                    <p className='text-right font-medium font-mons text-[16px] pt-1'>Providing round-the-clock online assistance and availability for your convenience</p>
                                </div>
                            </li>
                            <li>
                                <div className=' md:max-w-md max-w-[300px]'>
                                    <div className='flex justify-between'>
                                        <h2 className='xl:text-[20px] md:text-[16px] text-[18px] font-medium font-mons mx-6'>Choose LondonAcne Clinic</h2>
                                        <img src={d3} alt={d3} className="object-cover w-[50px] h-[50px]" />
                                    </div>
                                    <p className='text-right font-medium font-mons text-[16px] pt-1'>For a premium skincare experience, backed by our team of certified professionals.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='mx-5 '>
                        <img src={doctor} alt={doctor} className="object-cover " />

                    </div>
                    <div className=''>
                        <ul className='xl:pt-40  pt-5'>
                            <li>
                                <div className=' md:max-w-md max-w-[300px]'>
                                    <div className='flex '>
                                        <img src={d4} alt={d4} className="object-cover w-[50px] h-[50px]" />
                                        <h2 className='xl:text-[20px] md:text-[16px] text-[18px] font-medium font-mons mx-3'>24/7 Online availability</h2>
                                    </div>
                                    <p className='text-left font-medium font-mons text-[16px] pt-1'>Experience the epitome of hospitality at LondonAcne Clinic, where your comfort is our priority.</p>
                                </div>
                            </li>
                            <li className='py-14'>
                                <div className=' md:max-w-md max-w-[300px]'>
                                    <div className='flex '>
                                        <img src={d5} alt={d5} className="object-cover w-[50px] h-[50px]" />
                                        <h2 className='xl:text-[20px] md:text-[16px] text-[18px] font-medium font-mons mx-3'>Experts Team</h2>
                                    </div>
                                    <p className='text-left font-medium font-mons text-[16px] pt-1'>Your trusted partner in achieving clear, radiant skin through personalized treatments.</p>
                                </div>
                            </li>
                            <li>
                                <div className=' md:max-w-md max-w-[300px]'>
                                    <div className='flex'>
                                        <img src={d6} alt={d6} className="object-cover w-[50px] h-[50px]" />
                                        <h2 className='xl:text-[20px] md:text-[16px] text-[18px] font-medium font-mons mx-3'>Certified Services</h2>
                                    </div>
                                    <p className='text-left font-medium font-mons text-[16px] pt-1'>Our team of experts at LondonAcne Clinic is dedicated to your skin's wellbeing, offering tailored solutions for every individual</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Doctor