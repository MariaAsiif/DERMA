import React, { useState } from 'react'
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

const BookingForm = () => {

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

    console.log("Date", quoteDate)

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
                className={`font-sans focus:outline-none font-normal mt-5 w-full border-b border-[#1F3D64] placeholder:text-[#1F3D64] `}
            />

        </div>
    );


    const onSubmit = async (data) => {

    }

    return (
        <>
            <div className='xl:pt-[80px] text-center'>
                <div className='container mx-auto  xl:px-20 px-5 py-8'>
                    <h2 className='text-[#C9E065]  leading-0 lg:text-[72px] md:text-[60px] text-[40px] font-normal font-Herr '>Booking Now</h2>
                    <h1 className='text-[#1F3D64] lg:-mt-[30px] uppercase leading-0 lg:text-[41px] md:text-[30px] text-[22px] font-sans font-semibold'>"Transform Yourself with Personalize Solutions"</h1>

                    {/* <form className='pt-6 max-w-[700px] mx-auto'>
                        <div className='grid xl:grid-cols-2 md:grid-cols-2 xl:gap-10 md:gap-10'>
                            <input type="text" placeholder='NAME' className=' font-sans focus:outline-none font-normal my-5 w-full border-b border-[#1F3D64] placeholder:text-[#1F3D64]' />
                            <input type="text" placeholder='EMAIL' className=' font-sans focus:outline-none font-normal my-5 w-full border-b border-[#1F3D64] placeholder:text-[#1F3D64]' />

                        </div>
                        <div className='grid xl:grid-cols-2 md:grid-cols-2 xl:gap-10 md:gap-10'>
                            <div className='!w-full '>
                                <DatePicker
                                    value={quoteDate}
                                    style={{width:'100% !important'}}
                                    name='quoteDate'
                                    onChange={(date) => setquoteDate(date)}
                                    renderInput={renderCustomInput} // render a custom input
                                    shouldHighlightWeekends
                                    calendarPopperPosition='bottom'
                                />
                            </div>
                          
                            <input type="text" placeholder='PHONE NUMBER' className=' font-sans focus:outline-none font-normal my-5 w-full border-b border-[#1F3D64] placeholder:text-[#1F3D64]' />

                        </div>
                        <div className='grid xl:grid-cols-2 md:grid-cols-2 xl:gap-10 md:gap-10'>
                            <select className='focus:outline-none font-sans font-normal my-5 w-full border-b border-[#1F3D64] placeholder:text-[#1F3D64]'>
                                <option>London</option>
                            </select>
                            <select className='focus:outline-none font-sans font-normal my-5 w-full border-b border-[#1F3D64] placeholder:text-[#1F3D64]'>
                                <option>SELECT SERVICE</option>
                                {list.map((item, i) => (
                                    <option key={i}>{item}</option>
                                ))}
                            </select>

                        </div>
                        <textarea placeholder='MESSAGE' rows={2} className=' font-sans focus:outline-none font-normal my-5 w-full border-b border-[#1F3D64] placeholder:text-[#1F3D64]'></textarea>
                        <div className='flex justify-center items-center py-5'>
                            <button className=' w-[55%] py-3 text-[10px] font-semibold font-sans  rounded-full bg-[#1F3D64] text-white text-center uppercase'>book now</button>
                        </div>
                    </form> */}

                    <form className='pt-6 max-w-[700px] mx-auto' onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid xl:grid-cols-2 md:grid-cols-2 xl:gap-10 md:gap-10 gap-5'>
                            <div>
                                <input type="text" placeholder='NAME' {...register('name')} className={`font-sans focus:outline-none font-normal bg-transparent text-[#1F3D64]  w-full border-b ${errors.name ? 'border-red-500' : ' border-[#1F3D64]'} placeholder:text-[#1F3D64]`} />
                                {errors.name && (
                                    <p className="text-red-500 text-sm text-left pt-2">{errors.name.message}</p>
                                )}
                            </div>
                            <div>
                                <input type="text" placeholder='EMAIL' {...register('email')} className={`font-sans focus:outline-none font-normal bg-transparent text-[#1F3D64]  w-full border-b ${errors.email ? 'border-red-500' : ' border-[#1F3D64]'} placeholder:text-[#1F3D64]`} />
                                {errors.email && (
                                    <p className="text-red-500 text-sm text-left pt-2">{errors.email.message}</p>
                                )}
                            </div>

                        </div>
                        <div className='grid xl:grid-cols-2 md:grid-cols-2 xl:gap-10 md:gap-10 gap-5'>
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
                                <input type="text" {...register('phone')} placeholder='PHONE NUMBER' className={`focus:outline-none font-sans font-normal xl:mt-5 md:mt-5    w-full text-[#1F3D64] ${errors.phone ? 'border-red-500' : ' border-[#1F3D64]'} border-b border-[#1F3D64] placeholder:text-black bg-transparent`} />
                                {errors.phone && (
                                    <p className="text-red-500 text-sm text-left pb-3 pt-2">{errors.phone.message}</p>
                                )}
                            </div>

                        </div>
                        <div className='grid xl:grid-cols-2 md:grid-cols-2 xl:gap-10 md:gap-10'>
                            <div>
                                <select className={`focus:outline-none font-sans font-normal mt-5  w-full text-[#1F3D64] border-b border-[#1F3D64] placeholder:text-black bg-transparent`}>
                                    <option>London</option>
                                </select>

                            </div>
                            <div>
                                <select {...register('service')} className={`focus:outline-none font-sans font-normal  mt-5  w-full text-[#1F3D64] ${errors.service ? 'border-red-500' : ' border-[#1F3D64]'} border-b border-[#1F3D64] placeholder:text-black bg-transparent`}>
                                    <option className='text-black' value="">SELECT SERVICE</option>
                                    {list.map((item, i) => (
                                        <option key={i} value={item} className='text-black'>{item}</option>
                                    ))}
                                </select>
                                {errors.service && (
                                    <p className="text-red-500 text-sm text-left pb-3 pt-2">{errors.service.message}</p>
                                )}

                            </div>

                        </div>
                        <textarea placeholder='DESCRIPTION' {...register('desc')} rows={2} className={`font-sans focus:outline-none font-normal mt-5  w-full border-b ${errors.desc ? 'border-red-500' : ' border-[#1F3D64]'} placeholder:text-[#1F3D64] bg-transparent text-white`}></textarea>
                        {errors.desc && (
                            <p className="text-red-500 text-sm text-left pb-3">{errors.desc.message}</p>
                        )}
                        <div className='flex justify-center items-center py-5'>
                            <button type='submit' className=' w-full  bg-[#1F3D64] text-white  uppercase px-8 py-3 text-[14px] font-semibold font-sans  rounded-full text-center '>book now</button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default BookingForm