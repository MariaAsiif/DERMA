import React, { useState } from 'react'
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
const BookingForm = () => {
    const list = ["Acne", "Hair loss", "Alopecia", "Skin tag", "Mole check"]
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    const [quoteDate, setquoteDate] = useState({
        day: dd,
        month: mm,
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
                className={`font-sans focus:outline-none font-normal  my-5 w-full border-b border-[#1F3D64] placeholder:text-[#1F3D64] `}
            />
            
        </div>
    );


    return (
        <>
            <div className='xl:pt-[80px] text-center'>
                <div className='container mx-auto  xl:px-20 px-5 py-8'>
                    <h2 className='text-[#C9E065]  leading-0 lg:text-[72px] md:text-[60px] text-[40px] font-normal font-Herr '>Booking Now</h2>
                    <h1 className='text-[#1F3D64] lg:-mt-[30px] uppercase leading-0 lg:text-[41px] md:text-[30px] text-[22px] font-sans font-semibold'>"Transform Yourself with Personalize Solutions"</h1>

                    <form className='pt-6 max-w-[700px] mx-auto'>
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
                            {/* <input type="text" placeholder='DATE OF BIRTH || HH:MM' className=' font-sans focus:outline-none font-normal my-5 w-full border-b border-[#1F3D64] placeholder:text-[#1F3D64]' /> */}
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
                    </form>
                </div>

            </div>
        </>
    )
}

export default BookingForm