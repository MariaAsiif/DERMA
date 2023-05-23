import React from 'react'
import skinImg from '../../../assests/Rectangle 17 (5).png'
import tr1 from '../../../assests/Ellipse1.png'
import tr2 from '../../../assests/Ellipse2.png'
import tr3 from '../../../assests/Ellipse3.png'
import tr4 from '../../../assests/Ellipse4.png'
import { Truncate } from '../../../util/TrucateString'
import { Link } from 'react-router-dom'
const SkinCare = () => {
   const treatment = [{ pic: tr1, heading: 'Hair loss', desc: "Hair loss, also known as alopecia, refers to the condition of experiencing a significant reduction in hair density or hair thinning. It can affect the scalp, eyebrows, eyelashes, and other parts of the body. Hair loss can occur gradually or suddenly, and it can be temporary or permanent, depending on the underlying causes." }, { pic: tr2, heading: 'Acne', desc: "Acne is a chronic skin disorder that occurs when hair follicles become clogged with oil, dead skin cells, and bacteria. It usually appears as pimples, blackheads, or whiteheads, and commonly affects areas of the body with a high concentration of oil glands, such as the face, chest, and back. Acne can range in severity from mild to severe and may cause physical discomfort as well as psychological distress for those who experience it." }, { pic: tr3, heading: 'Alopecia', desc: "Alopecia refers to a medical condition characterized by hair loss or thinning, which can occur on the scalp or other parts of the body. It can manifest in different forms, ranging from mild to severe, and may result in partial or complete hair loss. Alopecia can have a significant impact on an individual's self-esteem and emotional well-being." }, { pic: tr4, heading: 'Skin tag', desc: "medically known as acrochordons, are small, soft, benign growths that typically appear as tiny, flesh-colored or slightly darker skin flaps. These benign growths are composed of collagen fibers and blood vessels and can vary in size and shape. Skin tags are most commonly found in areas where the skin folds or experiences friction, such as the neck, armpits, under the breasts, groin area, and eyelids." }, { pic: tr1, heading: 'Mole Removel', desc: "Mole removal refers to the medical procedure of removing a mole from the skin's surface. Moles, also known as nevi, are small clusters of pigmented cells that can appear on various parts of the body. While most moles are harmless, some individuals may choose to have them removed for cosmetic reasons or if there are concerns about their potential to develop into skin cancer." }]
  // const treatment = [{ pic: tr1, heading: 'Acne', subHeading: "Skin Care Treatment", desc: "Understanding the root cause of acne will lead to better skin clearance." }, { pic: tr2, heading: 'Rosacea', subHeading: "Skin Care Treatment", desc: "Rosacea is an inflammatory skin disease which usually affects the face area." }, { pic: tr3, heading: 'Pigmentation', subHeading: "Skin Care Treatment", desc: "Pigmentation is the term used for areas of the body's surface that become darker than the rest of the skin." }, { pic: tr4, heading: 'Melasma', subHeading: "Skin Care Treatment", desc: "Melasma is a common skin condition It causes brown to grey-brown patches." }, { pic: tr4, heading: 'Melasma', subHeading: "Skin Care Treatment", desc: "Melasma is a common skin condition It causes brown to grey-brown patches." }, { pic: tr4, heading: 'Melasma', subHeading: "Skin Care Treatment", desc: "Melasma is a common skin condition It causes brown to grey-brown patches." }]
  return (
    <>
      <div className='flex pt-[80px]'>
        <div className='w-full'>
          <div className='lg:ml-[9%] md:ml-[4%] ml-[4%]'>
            <h2 className='text-[#C9E065]  leading-0 lg:text-[60px] md:text-[50px] text-[40px] font-normal font-Herr '>Our Services</h2>
            <h1 className='text-[#1F3D64] lg:-mt-[30px] uppercase leading-0 lg:text-[41px] text-[25px] md:text-[35px] font-sans font-semibold'>Skin Care Treatment Options</h1>
            <div>
              <div className='grid xl:grid-cols-3 md:grid-cols-2 gap-5 pt-[40px]'>
                {
                  treatment?.map((item, i) => (
                    <div className='text-center' key={i}>
                      <div className='flex justify-center items-center'>
                        <img src={item?.pic} alt={item?.pic} className='object-cover' />
                      </div>
                      <h2 className='xl:text-[18px] text-[18px] text-[#171928] font-intr font-normal uppercase '>{item?.heading}</h2>
                      <span className='text-[#C9E065] font-normal font-sans  uppercase text-[14px] leading-[20px]'>{item?.subHeading}</span>
                      <div className=' pb-5  h-[140px] relative z-30'>
                        <p className='text-[15px] leading-[27px] max-w-[230px] font-sans  mx-auto'> { Truncate( item?.desc , 120)}
                        </p>
                        <Link to={`/service-detail/${i}`} className='bg-[#1F3D64] font-sans absolute bottom-0 xl:right-[35%] right-[38%] max-w-[80px]   text-[#C9E065] mt-2 rounded-full px-2 font-semibold text-[10px] py-1'>Learn More</Link>
                      </div>
                    </div>


                  ))
                }
              </div>
              <div className='flex justify-center items-center'>
                <Link to="/services" className='rounded-full lg:text-[16px] text-[14px] font-bold font-sans mt-10 bg-[#1F3D64] text-[#C9E065] hover:bg-[#C9E065] hover:text-[#1F3D64] uppercase px-8 py-3 '>View All Services</Link>
              </div>

            </div>

          </div>
        </div>
        <div className='lg:block hidden md:block'>
          <img src={skinImg} alt={skinImg} className='object-cover w-full h-full rounded-l-[50px]' />
        </div>
      </div>
    </>
  )
}

export default SkinCare