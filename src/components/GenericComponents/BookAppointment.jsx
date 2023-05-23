
import React, { useState } from 'react'
import footerImg from '../../assests/footer.png'
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email("Invalid email format").required(),
  service: yup.string().required(),
  desc: yup.string().required(),
  phone: yup.string().required(),

});
const BookAppointment = ({ setShow }) => {

  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });


  const list = ["Acne", "Hair loss", "Alopecia", "Skin tag", "Mole check"]
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  const [quoteDate, setquoteDate] = useState({
    day: Number(dd),
    month: Number(mm),
    year: yyyy,
  });


  // ****************** Datepicker Content ***********
  const renderCustomInput = ({ ref }) => (
    <div className=' cursor-pointe w-full'>
      <input
        readOnly
        ref={ref} // necessary  placeholder="yyy-mm-dd"
        value={
          quoteDate
            ? `${quoteDate.year}/${quoteDate.month}/${quoteDate.day}`
            : ''
        }
        className={`font-sans focus:outline-none font-normal bg-transparent text-white border-b border-white placeholder:text-white  my-5 w-full `}
      />

    </div>
  );



  const onSubmit = async (data) => {

  }
  return (
    <>
      <div className='container mx-auto text-center xl:px-10 px-5 pt-[80px]'>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-5'>
          <div className='bg-[#1F3D64] rounded-2xl h-full p-4 '>
            <form className='pt-6 max-w-[700px] mx-auto' onSubmit={handleSubmit(onSubmit)}>
              <div className='grid xl:grid-cols-2 md:grid-cols-2 xl:gap-10 md:gap-10'>
                <div>
                  <input type="text" placeholder='NAME' {...register('name')} className={`font-sans focus:outline-none font-normal bg-transparent text-white  w-full border-b ${errors.name ? 'border-red-500' : ' border-[#1F3D64]'} placeholder:text-white`} />
                  {errors.name && (
                    <p className="text-red-500 text-sm text-left pt-2">{errors.name.message}</p>
                  )}
                </div>
                <div>

                  <input type="text" placeholder='EMAIL' {...register('email')} className={`font-sans focus:outline-none font-normal bg-transparent text-white  w-full border-b ${errors.email ? 'border-red-500' : ' border-[#1F3D64]'} placeholder:text-white`} />
                  {errors.email && (
                    <p className="text-red-500 text-sm text-left pt-2">{errors.email.message}</p>
                  )}
                </div>

              </div>
              <div className='grid xl:grid-cols-2 md:grid-cols-2 xl:gap-10 md:gap-10'>
                <div className='!w-full '>
                  <DatePicker
                    value={quoteDate}
                    style={{ width: '100% !important' }}
                    name='quoteDate'
                    onChange={(date) => setquoteDate(date)}
                    renderInput={renderCustomInput} // render a custom input
                    shouldHighlightWeekends
                    calendarPopperPosition='bottom'
                  />
                </div>
                {/* <input type="text" placeholder='DATE OF BIRTH || HH:MM' className=' font-sans focus:outline-none font-normal my-5 w-full border-b border-[#1F3D64] placeholder:text-[#1F3D64]' /> */}
                <div>
                  <input type="text" {...register('phone')} placeholder='PHONE NUMBER' className=' font-sans focus:outline-none font-normal mt-5 w-full text-white border-b border-white placeholder:text-white bg-transparent' />
                  {errors.phone && (
                    <p className="text-red-500 text-sm text-left pb-3 pt-2">{errors.phone.message}</p>
                  )}
                </div>

              </div>
              <div className='grid xl:grid-cols-2 md:grid-cols-2 xl:gap-10 md:gap-10'>
                <select className='focus:outline-none font-sans font-normal my-5 w-full text-white border-b border-white placeholder:text-white bg-transparent'>
                  <option>London</option>
                </select>
                <select {...register('service')} className='focus:outline-none font-sans font-normal my-5 w-full text-white border-b border-white placeholder:text-black bg-transparent'>
                  <option className='text-black' value="">SELECT SERVICE</option>
                  {list.map((item, i) => (
                    <option key={i} value={item} className='text-black'>{item}</option>
                  ))}
                </select>
                {errors.service && (
                  <p className="text-red-500 text-sm text-left pb-3">{errors.service.message}</p>
                )}

              </div>
              <textarea placeholder='DESCRIPTION' {...register('desc')} rows={2} className={`font-sans focus:outline-none font-normal mt-5  w-full border-b ${errors.desc ? 'border-red-500' : ' border-[#1F3D64]'} placeholder:text-white bg-transparent text-white`}></textarea>
              {errors.desc && (
                <p className="text-red-500 text-sm text-left pb-3">{errors.desc.message}</p>
              )}
              <div className='flex justify-center items-center py-5'>
                <button type='submit' className=' w-full  bg-white text-[#1F3D64]   uppercase px-8 py-3 text-[14px] font-semibold font-sans  rounded-full text-center '>book now</button>
              </div>
            </form>
            {/* <div className='pt-3 relative h-full'>
              <h2 className='text-center uppercase font-normal font-intr text-[23px] text-white'>Book An Appointment</h2>
              <div className='grid xl:grid-cols-2 md:grid-cols-2 gap-10 pt-4 px-5'>
                <div className='flex flex-col'>
                  
                  <input type='text' placeholder='NAME' className='border-b text-white border-white bg-transparent focus:outline-none' />
                </div>
                <div className='flex flex-col'>
                 
                  <input type='email' placeholder='EMAIL' className='border-b text-white border-white bg-transparent focus:outline-none' />
                </div>
              </div>
              <div className='pt-[40px] px-5'>
                <div className='flex flex-col'>
                 
                  <textarea placeholder='DESCRIPTION' className='border-b text-white border-white bg-transparent w-full focus:outline-none' />
                </div>

              </div>

              <button onClick={() => setShow(true)} className='rounded-full w-full font-semibold font-sans mt-6 lg:left-0 lg:absolute lg:bottom-5  bg-white text-[#1F3D64] text-[14px]  uppercase px-8 py-3 '>request an appointment</button>
            </div> */}
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