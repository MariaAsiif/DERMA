import React, { useState } from 'react'
import logo from '../../assests/lure-logo 1.png'
import { GoThreeBars } from "react-icons/go";
import Sidebar from './Sidebar';
import { Link as ScrollLink } from "react-scroll";
// import { useLocation } from 'react-router-dom'
const Header = ({ type }) => {
    // const location = useLocation().pathname
    const location = "/"
    const [sideNavShow, setSideNavShow] = useState(false);

    return (
        <>
            <Sidebar sidebarOpen={sideNavShow} setSidebarOpen={setSideNavShow} />
            <div className={`bg-white lg:w-full w-full h-auto py-2 fixed ${type === true ? 'lg:top-0 2xl:top-0 md:top-0 top-0 border-t-0' : 'top-0'} border z-40 `}>
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
                                <li className='pt-4'>
                                    <ScrollLink
                                        activeClass="active"
                                        to="banner"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}   >
                                    <h2 className={` pb-3 px-3 cursor-pointer ${location === "/" ? 'border-b-4 font-bold border-[#C9E065]' : 'font-normal'}`}>HOME</h2>
                                    </ScrollLink>

                                </li>
                                <li className='pt-3'>
                                    <ScrollLink
                                        activeClass="active"
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}   >
                                        <h2 className={` pb-3 px-3 cursor-pointer ${location === "/about" ? 'border-b-4 font-bold border-[#C9E065]' : 'font-normal'}`}>ABOUT</h2>
                                    </ScrollLink>
                                </li>
                                <li className='pt-3'>
                                    <ScrollLink
                                        activeClass="active"
                                        to="treatment"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}   >
                                        <h2 className={` pb-3 px-3 cursor-pointer ${location === "/treatments" ? 'border-b-4 font-bold border-[#C9E065]' : 'font-normal'}`}>TREATMENTS</h2>
                                    </ScrollLink>
                                </li>
                                <li className='pt-3'>
                                    <ScrollLink
                                        activeClass="active"
                                        to="services"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}   >
                                        <h2 className={` pb-3 px-3 cursor-pointer ${location === "/packages" ? 'border-b-4 font-bold border-[#C9E065]' : 'font-normal'}`}>OUR PACKAGES</h2>
                                    </ScrollLink>
                                </li>
                                <li className='pt-3'>
                                    <ScrollLink
                                        activeClass="active"
                                        to="appointment"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}   >
                                        <h2 className={` pb-3 px-3 cursor-pointer ${location === "/appointment" ? 'border-b-4 font-bold border-[#C9E065]' : 'font-normal'}`}>APPOINTMENT</h2>
                                    </ScrollLink>
                                </li>
                                <li className='pt-3'>
                                    <ScrollLink
                                        activeClass="active"
                                        to="review"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}   >
                                        <h2 className={` pb-3 px-3 cursor-pointer ${location === "/contact" ? 'border-b-4 font-bold border-[#C9E065]' : 'font-normal'}`}>REVIEWS</h2>
                                    </ScrollLink>
                                </li>
                                <li>
                                    <div className='border rounded-full py-2 bg-[#1F3D64] text-[#C9E065] px-5'><h2 className='font-bold text-[16px]'>REQUEST CALL BACK</h2></div>
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