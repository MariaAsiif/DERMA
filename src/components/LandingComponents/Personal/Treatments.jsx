import React from 'react'
import tr1 from '../../../assests/Ellipse1.png'
import tr2 from '../../../assests/Ellipse2.png'
import tr3 from '../../../assests/Ellipse3.png'
import tr4 from '../../../assests/Ellipse4.png'
const Treatments = () => {
    const treatment = [{ pic: tr1, heading: 'Acne', subHeading: "Skin Care Treatment", desc: "Understanding the root cause of acne will lead to better skin clearance." }, { pic: tr2, heading: 'Rosacea', subHeading: "Skin Care Treatment", desc: "Rosacea is an inflammatory skin disease which usually affects the face area." }, { pic: tr3, heading: 'Pigmentation', subHeading: "Skin Care Treatment", desc: "Pigmentation is the term used for areas of the body's surface that become darker than the rest of the skin." }, { pic: tr4, heading: 'Melasma', subHeading: "Skin Care Treatment", desc: "Melasma is a common skin condition It causes brown to grey-brown patches." }]
    return (
        <>
            <div className='pt-[30px] treatment' id="treatment">
                <h2 className='xl:text-[41px] text-[25px] text-center uppercase text-[#1F3D64]'>TREATMENTS</h2>
                <div className='container mx-auto px-10'>
                    <div className='grid xl:grid-cols-4 md:grid-cols-2 gap-5 pt-[40px]'>
                        {
                            treatment?.map((item, i) => (
                                <div className='text-center' key={i}>
                                    <div className='flex justify-center items-center'>
                                        <img src={item?.pic} alt={item?.pic} className='object-cover' />
                                    </div>
                                    <h2 className='xl:text-[18px] text-[18px] text-[#171928] font-intr font-normal uppercase '>{item?.heading}</h2>
                                    <span className='text-[#C9E065] font-normal font-sans  uppercase text-[14px] leading-[20px]'>{item?.subHeading}</span>
                                    <div className=' pb-5  h-[140px] relative z-30'>
                                        <p className='text-[15px] leading-[27px] max-w-[230px] font-sans  mx-auto'> {item?.desc}
                                        </p>
                                        <button className='bg-[#1F3D64] font-sans absolute bottom-0 xl:right-[35%] right-[38%] max-w-[80px]   text-[#C9E065] mt-2 rounded-full px-2 font-semibold text-[10px] py-1'>Learn More</button>
                                    </div>
                                </div>


                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Treatments