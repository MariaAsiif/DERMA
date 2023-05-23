import React, { useState } from 'react'
import s1 from '../../../assests/hair loss.jpg'
import s2 from '../../../assests/acne.jpg'
import s3 from '../../../assests/alopecia.jpg'
import s4 from '../../../assests/skin tagg.jpg'
import s5 from '../../../assests/mole check.jpg'
// import s6 from '../../../assests/s6.png'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
const ServicesList = () => {
    const [active, setActive] = useState(1)
    const Services = [{ pic: s1, heading: 'Hair loss', desc: "Hair loss, also known as alopecia, refers to the condition of experiencing a significant reduction in hair density or hair thinning. It can affect the scalp, eyebrows, eyelashes, and other parts of the body. Hair loss can occur gradually or suddenly, and it can be temporary or permanent, depending on the underlying causes." }, { pic: s2, heading: 'Acne', desc: "Acne is a chronic skin disorder that occurs when hair follicles become clogged with oil, dead skin cells, and bacteria. It usually appears as pimples, blackheads, or whiteheads, and commonly affects areas of the body with a high concentration of oil glands, such as the face, chest, and back. Acne can range in severity from mild to severe and may cause physical discomfort as well as psychological distress for those who experience it." }, { pic: s3, heading: 'Alopecia', desc: "Alopecia refers to a medical condition characterized by hair loss or thinning, which can occur on the scalp or other parts of the body. It can manifest in different forms, ranging from mild to severe, and may result in partial or complete hair loss. Alopecia can have a significant impact on an individual's self-esteem and emotional well-being." }, { pic: s4, heading: 'Skin tag', desc: "medically known as acrochordons, are small, soft, benign growths that typically appear as tiny, flesh-colored or slightly darker skin flaps. These benign growths are composed of collagen fibers and blood vessels and can vary in size and shape. Skin tags are most commonly found in areas where the skin folds or experiences friction, such as the neck, armpits, under the breasts, groin area, and eyelids." }, { pic: s5, heading: 'Mole Removel', desc: "Mole removal refers to the medical procedure of removing a mole from the skin's surface. Moles, also known as nevi, are small clusters of pigmented cells that can appear on various parts of the body. While most moles are harmless, some individuals may choose to have them removed for cosmetic reasons or if there are concerns about their potential to develop into skin cancer." }]
    return (
        <>
            <div className='container mx-auto  xl:px-20 px-5 pt-[80px]'>
                <div className='grid xl:grid-cols-2 md:grid-cols-2 xl:gap-20 md:gap-10 gap-5'>
                    {Services.map((item, i) => (
                        <div className='group'>
                            <div className={`${i === i && ' group-hover:border-2 group-hover:border-[#C9E065]'} p-2`}>
                                <Link to={`/service-detail/${i}`} key={i} className={`   p-3 cursor-pointer rounded-md `}>
                                    <img src={item?.pic} alt={item?.pic} className='object-cover' />
                                    <h2 className={` ${i === i ? 'font-bold' : 'font-normal'} font-intr text-[23px] leading-[26px] uppercase pt-8`}>{item?.heading}</h2>
                                    <div className='border-2 my-6 border-[#1F3D64] w-[80px]'></div>
                                    <p className='text-medium font-mons text-[16px] leading-[30px]'>{item?.desc}</p>
                                    <div className='relative xl:max-w-[205px] md:max-w-[205px] max-w-[185px]   '>
                                        <button className={`
                                ${i === i ? 'group-hover:bg-[#1F3D64] group-hover:text-[#C9E065] ' : 'bg-transparent  text-[#1F3D64]  '}
                                rounded-full lg:text-[16px] text-[14px] border  font-normal font-mons mt-10  uppercase px-8 py-2.5 
                                `}>View  Services</button>

                                        <div className={`border rounded-full absolute top-[60%] right-0  ${i === i ? 'group-hover:bg-[#C9E065] group-hover:text-[#1F3D64] ' : ' bg-[#1F3D64] text-white  '}`}>
                                            <MdOutlineKeyboardArrowRight className={`text-[20px]  `} />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default ServicesList