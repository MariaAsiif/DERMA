import React from 'react'
// import { AiFillCloseSquare } from 'react-icons/ai'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email("Invalid email format").required(),
    phone: yup.string().required(),
    service: yup.string().required(),

});

const RequestForCall = () => {

    const list = ["Acne", "Hair loss", "Alopecia", "Skin tag", "Mole check"]


    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });
    const onSubmit = async (data) => {

    }

    return (
        <>
            <div className=' w-full px-10'>
                <h2 className='font-Herr font-normal text-[#C9E065] text-[72px] text-center'>Request Call Back</h2>
                <h1 className='text-[30px] font-normal font-intr text-center '>Let's Talk! Schedule a Call with Us Today.</h1>
                <form className='pt-6' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register('name')} placeholder='NAME' className={`font-sans focus:outline-none font-normal  w-full border-b  placeholder:text-[#1F3D64] ${errors.name ? 'border-red-500 mt-5' : 'border-[#1F3D64] my-5'}`} />
                    {errors.email && (
                        <p className="text-red-500 text-sm text-left">{errors.name.message}</p>
                    )}
                    <input type="text" {...register('email')} placeholder='EMAIL' className={`font-sans focus:outline-none font-normal  w-full border-b  placeholder:text-[#1F3D64] ${errors.email ? 'border-red-500 mt-5' : 'border-[#1F3D64] my-5'}`} />
                    {errors.email && (
                        <p className="text-red-500 text-sm text-left">{errors.email.message}</p>
                    )}
                    <input type="text" {...register('phone')} placeholder='PHONE NUMBER' className={`font-sans focus:outline-none font-normal  w-full border-b  placeholder:text-[#1F3D64] ${errors.phone ? 'border-red-500 mt-5' : 'border-[#1F3D64] my-5'}`} />
                    {errors.phone && (
                        <p className="text-red-500 text-sm text-left">{errors.phone.message}</p>
                    )}
                    <select {...register('service')} className={`focus:outline-none font-sans font-normal w-full border-b border-[#1F3D64] placeholder:text-[#1F3D64] ${errors.service ? 'border-red-500 mt-5' : 'border-[#1F3D64] my-5'}`}>
                        <option value="">SELECT SERVICE</option>
                        {list.map((item, i) => (
                            <option key={i} value={item} className='text-black'>{item}</option>
                        ))}
                    </select>
                    {errors.service && (
                        <p className="text-red-500 text-sm text-left">{errors.service.message}</p>
                    )}

                    <div className='flex justify-center items-center py-5'>
                        <button className=' w-[55%] py-[6px] rounded-full bg-[#1F3D64] text-white text-center uppercase'>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default RequestForCall