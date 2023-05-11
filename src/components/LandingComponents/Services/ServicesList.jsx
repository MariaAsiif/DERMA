import React, { useState } from 'react'
import s1 from '../../../assests/s1.png'
import s2 from '../../../assests/s2.png'
import s3 from '../../../assests/s3.png'
import s4 from '../../../assests/s4.png'
import s5 from '../../../assests/s5.png'
// import s6 from '../../../assests/s6.png'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
const ServicesList = () => {
    const [active, setActive] = useState(1)
    const Services = [{ pic: s1, heading: 'Hair loss', desc: "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum…" }, { pic: s2, heading: 'Acne', desc: "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum…" }, { pic: s3, heading: 'Alopecia', desc: "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum…" }, { pic: s4, heading: 'Skin tag', desc: "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum…" }, { pic: s5, heading: 'Mole check', desc: "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum…" }]
    return (
        <>
            <div className='container mx-auto  xl:px-20 px-5 pt-[80px]'>
                <div className='grid xl:grid-cols-2 md:grid-cols-2 xl:gap-20 md:gap-10 gap-5'>
                    {Services.map((item, i) => (
                        <Link to={`/service-detail/${i}`} key={i} onClick={() => setActive(i)} className={`  ${active === i && ' border-2 border-[#C9E065]'} p-3 cursor-pointer rounded-md`}>
                            <img src={item?.pic} alt={item?.pic} className='object-cover' />
                            <h2 className={` ${active === i ? 'font-bold' : 'font-normal'} font-intr text-[23px] leading-[26px] uppercase pt-8`}>{item?.heading}</h2>
                            <div className='border-2 my-6 border-[#1F3D64] w-[80px]'></div>
                            <p className='text-medium font-mons text-[16px] leading-[30px]'>{item?.desc}</p>
                            <div className='relative xl:max-w-[205px] md:max-w-[205px] max-w-[185px]   '>
                                <button className={`
                                ${active === i ? 'bg-[#1F3D64] text-[#C9E065] ' : 'bg-transparent border-2 border-[#1F3D64] text-[#1F3D64]  '}
                                rounded-full lg:text-[16px] text-[14px]  font-normal font-mons mt-10  uppercase px-8 py-2.5 
                                `}>View  Services</button>

                                <div className={`border rounded-full absolute top-[60%] right-0  ${active === i ? 'bg-[#C9E065] text-[#1F3D64] ' : ' bg-[#1F3D64] text-white  '}`}>
                                    <MdOutlineKeyboardArrowRight className={`text-[20px]  `} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </>
    )
}

export default ServicesList