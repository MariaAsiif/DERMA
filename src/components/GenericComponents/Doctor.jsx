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
                                <div className='max-w-[300px]'>
                                    <div className='flex'>
                                        <h2 className='xl:text-[24px] md:text-[16px] text-[14px] font-medium font-mons mx-6'>High Hospitality</h2>
                                        <img src={d1} alt={d1} className="object-cover"  />
                                    </div>
                                    <p className='text-right font-medium font-mons text-[16px] pt-1'>Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies</p>
                                </div>
                            </li>
                            <li className='py-14'>
                                <div className='max-w-[300px]'>
                                    <div className='flex'>
                                        <h2 className='xl:text-[24px] md:text-[16px] text-[14px] font-medium font-mons mx-5'>New Equipment</h2>
                                        <img src={d2} alt={d2} className="object-cover"  />
                                    </div>
                                    <p className='text-right font-medium font-mons text-[16px] pt-1'>Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies</p>
                                </div>
                            </li>
                            <li>
                                <div className='max-w-[300px]'>
                                    <div className='flex'>
                                        <h2 className='xl:text-[24px] md:text-[16px] text-[14px] font-medium font-mons mx-6'>Pure Medicines</h2>
                                        <img src={d3} alt={d3} className="object-cover"  />
                                    </div>
                                    <p className='text-right font-medium font-mons text-[16px] pt-1'>Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='mx-5 '>
                        <img src={doctor} alt={doctor} className="object-cover"  />

                    </div>
                    <div className=''>
                        <ul className='xl:pt-40  pt-5'>
                            <li>
                                <div className='max-w-[300px]'>
                                    <div className='flex'>
                                        <img src={d4} alt={d4} className="object-cover"  />
                                        <h2 className='xl:text-[24px] md:text-[16px] text-[14px] font-medium font-mons mx-3'>24/7 Ambulance</h2>
                                    </div>
                                    <p className='text-left font-medium font-mons text-[16px] pt-1'>Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies</p>
                                </div>
                            </li>
                            <li className='py-14'>
                                <div className='max-w-[300px]'>
                                    <div className='flex'>
                                        <img src={d5} alt={d5} className="object-cover"  />
                                        <h2 className='xl:text-[24px] md:text-[16px] text-[14px] font-medium font-mons mx-3'>Experts Team</h2>
                                    </div>
                                    <p className='text-left font-medium font-mons text-[16px] pt-1'>Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies</p>
                                </div>
                            </li>
                            <li>
                                <div className='max-w-[300px]'>
                                    <div className='flex'>
                                        <img src={d6} alt={d6} className="object-cover"  />
                                        <h2 className='xl:text-[24px] md:text-[16px] text-[14px] font-medium font-mons mx-3'>Certified Services</h2>
                                    </div>
                                    <p className='text-left font-medium font-mons text-[16px] pt-1'>Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies</p>
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