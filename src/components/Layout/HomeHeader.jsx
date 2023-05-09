import React, { useState } from 'react'
import logo from '../../assests/lure-logo 1.png'
import { GoThreeBars } from "react-icons/go";
import Sidebar from './Sidebar';
import { useLocation , Link } from 'react-router-dom'
const HomeHeader = ({ type, open }) => {
    const location = useLocation().pathname
    // const location = "/"
    const [sideNavShow, setSideNavShow] = useState(false);

    return (
        <>
            <Sidebar sidebarOpen={sideNavShow} setSidebarOpen={setSideNavShow} />
            <div className={`bg-white lg:w-full w-full h-auto py-2  ${type === true ? 'lg:top-0 2xl:top-0 md:top-0 top-0 border-t-0' : 'top-10'} border-t z-40 `}>
                {/* <div className="bg-white  shadow-md border border-gray-100 py-2"> */}
                <div className="container mx-auto xl:px-10 px-5">
                    <div className='flex xl:justify-center justify-between  items-center'>
                        <div className='w-[30%]'>
                            <img src={logo} alt="personal" className='object-cover xl:w-auto w-[30%]' />
                        </div>
                        <div className='xl:hidden'>
                            <GoThreeBars
                                className="text-[30px] cursor-pointer text-[#1E154E]  mt-1"
                                onClick={() => setSideNavShow(true)}
                            />
                        </div>
                        <div className='w-full lg:block hidden '>
                            <ul className='flex pr-10 items-center justify-between text-[16px] '>
                                <li className='pt-4 ' id="nav-item">
                                    <Link
                                        className={`${location ==="/" ? 'active' : ''}`}
                                        to="/"
                                    >
                                        <h2 className={` pb-3 px-3 cursor-pointer uppercase`}>HOME</h2>
                                    </Link>

                                </li>
                                <li className='pt-3 ' id="nav-item">
                                    <Link
                                        className={`${location ==="/aboutus" ? 'active' : ''}`}

                                        to="/aboutus"
                                    >
                                        <h2 className={` pb-3 px-3 cursor-pointer uppercase `}>ABOUT</h2>
                                    </Link>
                                </li>
                                <li className='pt-3 ' id="nav-item">
                                    <Link
                                        className={`${location ==="/services" ? 'active' : ''}`}

                                        to="/services"
                                    >
                                        <h2 className={` pb-3 px-3 cursor-pointer uppercase `}>SERVICES</h2>
                                    </Link>
                                </li>
                                <li className='pt-3 ' id="nav-item">
                                    <Link
                                        className={`${location ==="/Surgeries" ? 'active' : ''}`}

                                        to="/surgery"
                                    >
                                        <h2 className={` pb-3 px-3 cursor-pointer uppercase `}>Surgeries</h2>
                                    </Link>
                                </li>
                                <li className='pt-3 ' id="nav-item">
                                    <Link
                                        className={`${location ==="/booking" ? 'active' : ''}`}

                                        to="/booking"
                                    >
                                        <h2 className={` pb-3 px-3 cursor-pointer uppercase`}>Booking</h2>
                                    </Link>
                                </li>
                                <li className='pt-3 ' id="nav-item">
                                    <Link
                                        className={`${location ==="/contactus" ? 'active' : ''}`}

                                        to="/contactus"
                                    >
                                        <h2 className={` pb-3 px-3 cursor-pointer uppercase`}>Contacts</h2>
                                    </Link>
                                </li>
                                <li>
                                    <div onClick={() => open(true)} className='border cursor-pointer rounded-full py-2 bg-[#1F3D64] text-[#C9E065] px-5'><h2 className='font-bold text-[16px]'>REQUEST CALL BACK</h2></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeHeader