import React from 'react'
import logo from '../../assests/lure-logo 1.png'
// import { useLocation } from 'react-router-dom'
const Header = () => {
    // const location = useLocation().pathname
    const location = "/"
    return (
        <>
            <div className="bg-white shadow-md border border-gray-100 py-2">
                <div className="container mx-auto px-10">
                    <div className='flex  items-center'>
                        <div className='w-[60%]'>
                            <img src={logo} alt="personal" className='object-cover' />
                        </div>
                        <div className='w-full  '>
                            <ul className='flex pr-10 items-center justify-between text-[11px] '>
                                <li className='pt-3'>
                                    <h2 className={` pb-3 px-3 ${location === "/" ? 'border-b-4 font-bold border-[#C9E065]' : 'font-normal'}`}>HOME</h2>
                                </li>
                                <li className='pt-3'>
                                    <h2 className={` pb-3 px-3 ${location === "/about" ? 'border-b-4 font-bold border-[#C9E065]' : 'font-normal'}`}>ABOUT</h2>
                                </li>
                                <li className='pt-3'>
                                    <h2 className={` pb-3 px-3 ${location === "/treatments" ? 'border-b-4 font-bold border-[#C9E065]' : 'font-normal'}`}>TREATMENTS</h2>
                                </li>
                                <li className='pt-3'>
                                    <h2 className={` pb-3 px-3 ${location === "/packages" ? 'border-b-4 font-bold border-[#C9E065]' : 'font-normal'}`}>OUR PACKAGES</h2>
                                </li>
                                <li className='pt-3'>
                                    <h2 className={` pb-3 px-3 ${location === "/appointment" ? 'border-b-4 font-bold border-[#C9E065]' : 'font-normal'}`}>APPOINTMENT</h2>
                                </li>
                                <li className='pt-3'>
                                    <h2 className={` pb-3 px-3 ${location === "/contact" ? 'border-b-4 font-bold border-[#C9E065]' : 'font-normal'}`}>CONTACTS</h2>
                                </li>
                                <li>
                                    <div className='border rounded-full py-2 bg-[#1F3D64] text-[#C9E065] px-5'><h2 className='font-bold text-[10px]'>REQUEST CALL BACK</h2></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header