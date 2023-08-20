import React, { useState } from 'react'
import logo from '../../assests/lure-logo 1.png'
import { GoThreeBars } from "react-icons/go";
import Sidebar from './Sidebar';
import { Link as ScrollLink } from "react-scroll";
// import { useLocation } from 'react-router-dom'
const Header = ({ type, open }) => {
    // const location = useLocation().pathname
    // const location = "/"
    const [sideNavShow, setSideNavShow] = useState(false);



    return (
        <>
            <Sidebar sidebarOpen={sideNavShow} setSidebarOpen={setSideNavShow} show={() => open(true)} />
            <div className={` bg-white lg:w-full w-full h-auto py-2  ${type === true ? 'lg:top-0 2xl:top-0 md:top-0 top-0 border-t-0' : 'top-10'} border-t z-40 `}>
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
                                    <ScrollLink
                                        activeClass="active"
                                        to="banner"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}   >
                                        <h2 className={` pb-3 px-3 cursor-pointer`}>HOME</h2>
                                    </ScrollLink>

                                </li>
                                <li className='pt-3 ' id="nav-item">
                                    <ScrollLink
                                        activeClass="active"
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}   >
                                        <h2 className={` pb-3 px-3 cursor-pointer `}>ABOUT</h2>
                                    </ScrollLink>
                                </li>
                                <li className='pt-3 ' id="nav-item">
                                    <ScrollLink
                                        activeClass="active"
                                        to="treatment"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}   >
                                        <h2 className={` pb-3 px-3 cursor-pointer `}>TREATMENTS</h2>
                                    </ScrollLink>
                                </li>
                                <li className='pt-3 ' id="nav-item">
                                    <ScrollLink
                                        activeClass="active"
                                        to="appointment"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}   >
                                        <h2 className={` pb-3 px-3 cursor-pointer `}>OUR PACKAGES</h2>
                                    </ScrollLink>
                                </li>
                                <li className='pt-3 ' id="nav-item">
                                    <ScrollLink
                                        activeClass="active"
                                        to="review"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}   >
                                        <h2 className={` pb-3 px-3 cursor-pointer`}>REVIEWS</h2>
                                    </ScrollLink>
                                </li>
                                <li>
                                    <div onClick={() => open(true)} className='border cursor-pointer rounded-full py-2 bg-[#1F3D64] transform delay-100 ease-out text-[#C9E065] hover:bg-white hover:text-[#1F3D64] text-[#C9E065] px-5'><h2 className='font-bold text-[16px]'>REQUEST CALL BACK</h2></div>
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