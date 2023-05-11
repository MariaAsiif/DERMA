
import React from 'react'
import footerImg from '../../assests/footer.png'
const BookAppointment = () => {
  return (
    <>
      <div className='container mx-auto text-center xl:px-10 px-5 pt-[80px]'>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-5'>
          <div className='bg-[#1F3D64] rounded-2xl h-full p-3 '>
            <div className='pt-3 relative h-full'>
              <h2 className='text-center uppercase font-normal font-intr text-[23px] text-white'>Book An Appointment</h2>
              <div className='grid xl:grid-cols-2 md:grid-cols-2 gap-10 pt-4 px-5'>
                <div className='flex flex-col'>
                  {/* <label htmlFor="">NAME</label> */}
                  <input type='text' placeholder='NAME' className='border-b text-white border-white bg-transparent focus:outline-none' />
                </div>
                <div className='flex flex-col'>
                  {/* <label htmlFor="">EMAIL</label> */}
                  <input type='email' placeholder='EMAIL' className='border-b text-white border-white bg-transparent focus:outline-none' />
                </div>
              </div>
              <div className='pt-[40px] px-5'>
                <div className='flex flex-col'>
                  {/* <label htmlFor="">EMAIL</label> */}
                  <textarea placeholder='DESCRIPTION' className='border-b text-white border-white bg-transparent w-full focus:outline-none' />
                </div>

              </div>

              <button className='rounded-full w-full font-semibold font-sans mt-6 lg:left-0 lg:absolute lg:bottom-5  bg-white text-[#1F3D64] text-[14px]  uppercase px-8 py-3 '>request an appointment</button>
            </div>
          </div>
          <div>
            <img src={footerImg} alt={footerImg} className='object-cover h-full' />
          </div>

        </div>
      </div>
    </>
  )
}

export default BookAppointment