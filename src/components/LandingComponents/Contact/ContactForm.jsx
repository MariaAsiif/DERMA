import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email("Invalid email format").required(),
    desc: yup.string().required(),

});
const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });
    const onSubmit = async (data) => {

    }

    return (
        <>
            <div className='xl:pt-[80px] md:pt-[50px] text-center'>
                <div className='container mx-auto  xl:px-20 px-5 py-8'>
                    <h2 className='text-[#C9E065]  leading-0 lg:text-[72px] md:text-[60px] text-[40px] font-normal font-Herr '>Contact Us </h2>
                    <h1 className='text-[#1F3D64] lg:-mt-[30px] uppercase leading-0 lg:text-[41px] md:text-[30px] text-[22px] font-sans font-semibold'>HAVE ANY QUESTIONS?</h1>

                    <form className='pt-6 max-w-[600px] mx-auto' onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid xl:grid-cols-2 md:grid-cols-2 xl:gap-10 md:gap-10'>
                            <div>
                                <input type="text" placeholder='NAME' {...register('name')} className={`font-sans focus:outline-none font-normal  w-full border-b ${errors.name ? 'border-red-500' : ' border-[#1F3D64]'} placeholder:text-[#1F3D64]`} />
                                {errors.name && (
                                    <p className="text-red-500 text-sm text-left pt-2">{errors.name.message}</p>
                                )}
                            </div>
                            <div>

                                <input type="text" placeholder='EMAIL' {...register('email')} className={`font-sans focus:outline-none font-normal  w-full border-b ${errors.email ? 'border-red-500' : ' border-[#1F3D64]'} placeholder:text-[#1F3D64]`} />
                                {errors.email && (
                                    <p className="text-red-500 text-sm text-left pt-2">{errors.email.message}</p>
                                )}
                            </div>

                        </div>

                        <textarea placeholder='DESCRIPTION' {...register('desc')} rows={2} className={`font-sans focus:outline-none font-normal mt-5  w-full border-b ${errors.desc ? 'border-red-500' : ' border-[#1F3D64]'} placeholder:text-[#1F3D64]`}></textarea>
                        {errors.desc && (
                            <p className="text-red-500 text-sm text-left pb-3">{errors.desc.message}</p>
                        )}

                        <div className='flex '>
                            <input type='checkbox' className='borderxl:w-auto md:w-auto w-[20px] h-[20px]' />
                            <p className='text-[14px] px-2 font-normal text-[#1D1D1D] font-sans '>I agree that my submitted data is being collected and stored.</p>
                        </div>


                        <div className='flex justify-center items-center py-5'>
                            <button className=' w-[55%] py-3 text-[10px] font-semibold font-sans  rounded-full bg-[#1F3D64] text-white text-center uppercase'>Send Message</button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default ContactForm