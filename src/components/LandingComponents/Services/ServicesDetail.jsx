import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
// import sr1 from '../../../assests/sr1.png'
import sr2 from '../../../assests/srv2.png'
import sr3 from '../../../assests/sr3.png'
// import sr4 from '../../../assests/check.png'
import { GoCheck } from 'react-icons/go'
import { Link } from 'react-router-dom'
const ServicesDetails = ({ serviceDetail }) => {
  const list = [ "Hair loss", "Acne", "Alopecia", "Skin tag", "Mole Removal"]
  // const [active, setActive] = useState(0)

 const  handleName= (name) =>  {
    if (name.includes(":")) {
      return name.replace(":", ":<br/>");
    } else {
      return name;
    }
  }


  return (
    <>
      {/* Section 1  */}
      <div className='container mx-auto  xl:px-10 px-5 lg:py-8 py-5 '>
      <div className='flex xl:flex-nowrap flex-wrap justify-between pt-[50px]'>
          <div className='xl:w-[30%] w-full md:w-[40%]'>
            <ul>
              {
                list.map((item, i) => (
                  <li key={i} >
                    <Link to={`/service-detail/${i}`} className={`${serviceDetail?.id === i ? 'bg-[#1F3D64] text-[#C9E065]' : 'border-[#1F3D64] bg-transparent border-2'} cursor-pointer mb-2 px-3 py-2 flex justify-between items-center relative rounded-full `}>
                      <div className='flex items-center'>
                        <h2 className='lg:text-[16px] text-[14px]  font-normal font-mons uppercase'>{item}</h2>
                        <img src={sr2} alt={sr2} className="object-contain w-[30px] h-[30px]" />
                      </div>
                      {/* <div className={`border !bg-[#1F3D64] border-[#1F3D64] rounded-full bg-transparent  `}>
                        <MdOutlineKeyboardArrowRight className={`text-[23px] text-white `} />
                      </div> */}
                      <div className={`border rounded-full   ${serviceDetail?.id === i ? 'bg-[#C9E065] text-[#1F3D64] absolute top-[30%] -right-3 ' : ' bg-[#1F3D64] text-white  '}`}>
                        <MdOutlineKeyboardArrowRight className={`text-[22px]  `} />
                      </div>
                    </Link>
                  </li>
                ))
              }

            </ul>
          </div>
          <div className='xl:px-10'>
            <img src={serviceDetail?.pic} alt={serviceDetail?.pic} className='objet-cover' />
          </div>
          <div className='xl:w-[50%]'>
            <h2 className='text-[#B58F2E]  leading-0 lg:text-[60px] md:text-[50px] text-[40px] font-normal font-Herr '>{serviceDetail?.Heading} </h2>
            <h1 className='text-[#1D1D1D] lg:-mt-[30px] uppercase leading-0 lg:text-[42px] md:text-[30px] text-[22px] font-intr font-normal'>{serviceDetail?.subHeading}</h1>

            <p className='text-[16px] text-[#555555] font-mons font-medium pt-[20px] leading-[32px]'>{serviceDetail?.desc}</p>
            <p className='text-[16px] text-[#555555] font-mons font-medium pt-[20px] leading-[32px]'>{serviceDetail?.subdesc}</p>

            <p className='text-[16px] text-[#7B5F43] font-mons font-medium pt-[10px] leading-[32px]'>{serviceDetail?.contact}</p>

            <div className='relative xl:max-w-[180px] md:max-w-[205px] max-w-[165px]   '>
              <button className={`bg-transparent border-2 border-[#1F3D64] text-[#1F3D64] 
                                rounded-full lg:text-[16px] text-[14px]  font-normal font-mons mt-3  uppercase px-8 py-2.5 
                                `}>book now</button>

              <div className={`border rounded-full absolute top-[40%] right-0  bg-[#1F3D64] text-white `}>
                <MdOutlineKeyboardArrowRight className={`text-[20px]  `} />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className='bg-gradient-to-r from-[#BACD67] to-[#A8B95D] relative '>
        <div className='container mx-auto  xl:px-10 px-5 lg:py-8 py-5 '>

          <div className={`${serviceDetail?.symptoms ? 'grid xl:grid-cols-3 md:grid-cols-2' : 'grid xl:grid-cols-2  md:grid-cols-2'} gap-5`}>
            <div className='bg-white rounded-2xl px-8 py-10'>
              <h2 className='text-[30px] text-[#1E3D64] font-normal font-intr leading-[30px]'>{ serviceDetail.id === 4 ?"Procedures " :"Types of" } {serviceDetail?.subHeading}</h2>
              <div className='border-2 w-[70px] border-[#C9E065] mt-4'></div>
              <ul className='pt-5'>
                {
                  serviceDetail?.typesOf?.map((item, i) => (
                    <li key={i}>
                      <div className='flex '>
                        <div>
                          <GoCheck className='text-[20px] text-[#C9E065]' />
                          {/* <img src={sr4} alt={sr4} className='object-contain w-[35px] h-[35px]' /> */}
                        </div>
                        <p className='px-2 text-[16px] font-intr font-normal leading-[28px]'>{item}</p>
                      </div>
                    </li>

                  ))
                }
              </ul>
            </div>
            <div className='bg-white rounded-2xl px-8 py-10'>
              <h2 className='text-[30px] font-normal font-antic text-[#1E3D64] leading-[30px]'>Causes of {serviceDetail?.subHeading}</h2>
              <div className='border-2 w-[70px] border-[#C9E065] mt-4'></div>
              <ul className='pt-5'>
                {
                  serviceDetail?.causesOf?.map((item, i) => (


                    <li key={i} className='pb-5'>
                      <div className='flex items-start '>
                        <div>
                          <GoCheck className='text-[20px] text-[#C9E065]' />
                          {/* <img src={sr4} alt={sr4} className='object-contain w-[35px] h-[35px]' /> */}
                        </div>
                        <p className='px-2 text-[16px] font-intr font-normal leading-[28px]'>{item}</p>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
            {serviceDetail?.symptoms &&
              <div className='bg-white rounded-2xl px-8 py-10'>
                <h2 className='text-[30px] font-normal font-antic text-[#1E3D64] leading-[30px]'>Symptoms of  {serviceDetail?.subHeading}</h2>
                <div className='border-2 w-[70px] border-[#C9E065] mt-4'></div>
                <ul className='pt-5'>
                  {
                    serviceDetail?.symptoms?.map((item, i) => (


                      <li key={i} className='pb-5'>
                        <div className='flex items-start '>
                          <div>
                            <GoCheck className='text-[20px] text-[#C9E065]' />
                            {/* <img src={sr4} alt={sr4} className='object-contain w-[35px] h-[35px]' /> */}
                          </div>
                          <p className='px-2 text-[16px] font-intr font-normal leading-[28px]'>{item}</p>
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </div>
            }
          </div>

          <div className='absolute bottom-0 right-0'>
            <img src={sr3} alt={sr3} className='object-cover' />
          </div>
        </div>
      </div>

    </>
  )
}

export default ServicesDetails