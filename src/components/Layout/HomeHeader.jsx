import React, { useState } from 'react'
import logo from '../../assests/lure-logo 1.png'
import { GoThreeBars } from "react-icons/go";
import Sidebar from './Sidebar';
import { useLocation, Link } from 'react-router-dom'
import { RiArrowDropDownLine } from 'react-icons/ri'
const HomeHeader = ({ type, open }) => {
    const location = useLocation().pathname
    // const location = "/"
    const [sideNavShow, setSideNavShow] = useState(false);
    const list = ["Acne", "Hair loss", "Alopecia", "Skin tag", "Mole Removal"]

    return (
        <>
            <Sidebar sidebarOpen={sideNavShow} setSidebarOpen={setSideNavShow} />
            <div className={`bg-white lg:w-full w-full h-auto py-2  ${type === true ? 'lg:top-0 2xl:top-0 md:top-0 top-0 border-t-0' : 'top-10'} border-t z-40 `}>
                {/* <div className="bg-white  shadow-md border border-gray-100 py-2"> */}
                <div className="container mx-auto xl:px-10 px-5">
                    <div className='flex xl:justify-center justify-between  items-center'>
                        <Link to="/" className='w-[30%]'>
                            <img src={logo} alt="personal" className='object-cover xl:w-auto md:w-[30%] w-[40%]' />
                        </Link>
                        <div className='xl:hidden'>
                            <GoThreeBars
                                className="text-[30px] cursor-pointer text-[#1E154E]  mt-1"
                                onClick={() => setSideNavShow(true)}
                            />
                        </div>
                        <div className='w-full lg:block hidden nav-content '>
                            <ul className='flex pr-10 items-center justify-between text-[16px] '>
                                <li className='pt-4 ' id="nav-item">
                                    <Link
                                        className={`${location === "/" ? 'active' : ''}`}
                                        to="/"
                                    >
                                        <h2 className={` pb-3 px-3 cursor-pointer uppercase`}>HOME</h2>
                                    </Link>

                                </li>
                                <li className='pt-3 ' id="nav-item">
                                    <Link
                                        className={`${location === "/aboutus" ? 'active' : ''}`}

                                        to="/aboutus"
                                    >
                                        <h2 className={` pb-3 px-3 cursor-pointer uppercase `}>ABOUT</h2>
                                    </Link>
                                </li>
                                <li className="main-li cursor-pointer uppercase">
                                    <Link to="/services" className="flex items-center">services <RiArrowDropDownLine className="text-[30px]" /></Link>
                                    <div className={`show !w-auto `}>
                                        <div className="bg-white h-[43px]"></div>
                                        <div className="p-3">
                                            <div className="row">
                                                <div className="col-lg-4 w-full   flex items-baseline flex-col ">
                                                    {/* <h3 className="text-[20px] font-medium">recruit</h3> */}
                                                    <div className="flex flex-col justify-start items-start cursor-pointer">
                                                        {
                                                            list.map((item, i) => (
                                                                <span key={i} className="hover:bg-[#81AE37] px-5 w-full text-left ">
                                                                    <Link className="" to={`/service-detail/${i}`}>{item}</Link>
                                                                </span>

                                                            ))
                                                        }


                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </li>
                             

                                {/* <li className="main-li cursor-pointer uppercase">
                                    <Link to="/surgery" className="flex items-center">Surgeries <RiArrowDropDownLine className="text-[30px]" /></Link>
                                    <div className={`show !w-auto `}>
                                        <div className="bg-white h-[43px]"></div>
                                        <div className="p-3">
                                            <div className="row">
                                                <div className="col-lg-4 w-full   flex items-baseline flex-col ">
                                                    <div className="flex flex-col justify-start items-start cursor-pointer">
                                                        {
                                                            listSur.map((item, i) => (
                                                                <span key={i} className="hover:bg-[#81AE37] px-5 w-full text-left ">
                                                                    <Link className="" to={`/surgery-detail/${i}`}>{item}</Link>
                                                                </span>

                                                            ))
                                                        }


                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </li> */}
                                <li className='pt-3 ' id="nav-item">
                                    <Link
                                        className={`${location === "/booking" ? 'active' : ''}`}

                                        to="/booking"
                                    >
                                        <h2 className={` pb-3 px-3 cursor-pointer uppercase`}>Booking</h2>
                                    </Link>
                                </li>
                                <li className='pt-3 ' id="nav-item">
                                    <Link
                                        className={`${location === "/contactus" ? 'active' : ''}`}

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