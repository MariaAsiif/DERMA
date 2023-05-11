import React, { useEffect, useRef } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assests/lure-logo 1.png'
// import { RiArrowDropDownLine } from 'react-icons/ri';

function Sidebar({
    sidebarOpen,
    setSidebarOpen
}) {

    const location = useLocation().pathname

    // const trigger = useRef(null);
    const sidebar = useRef(null);




    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!sidebarOpen || keyCode !== 27) return;
            setSidebarOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });



    useEffect(() => {
        if (sidebarOpen === true) {
            if (typeof window != "undefined" && window.document) {
                document.body.style.overflow = "hidden";
            }
        } else {
            document.body.style.overflow = "auto";
        }
    }, [sidebarOpen]);


    const list = ["Acne", "Hair loss", "Alopecia", "Skin tag", "Mole check"]


    return (
        <div>
            {/* Sidebar backdrop (mobile only) */}
            <div className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-50  transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true" ></div>

            {/* Sidebar */}



            <div id="sidebar" ref={sidebar} className={`flex flex-col  absolute z-50 border-r  left-0 top-0 lg:left-0  
      ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64  lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-white  border-l py-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`} >
                {/* Sidebar header */}
                <div className=" mb-10 pr-6 sm:px-2">
                    {/* Close button */}
                    <div className='flex justify-start items-start ml-3'>
                        <BsArrowLeft className='border text-[30px] rounded-full border-black hover:text-white p-1' onClick={() => setSidebarOpen(!sidebarOpen)} />
                    </div>
                </div>

                <Link to="/" className='flex justify-center items-center'>
                    <img src={logo} alt={logo} className='object-cover' />
                </Link>

                {/* Links */}
                <div className='pt-5'>
                    <div className="h-full pb-2">
                        {
                            location === "/personal" ?

                                <ul className='flex  items-center flex-col text-[16px] '>
                                    <li className='pt-4'>
                                        <h2 className={` pb-3 px-3 cursor-pointer ${location === "/" ? 'border-b-4 font-bold border-[#C9E065]' : 'font-normal'}`}>HOME</h2>
                                    </li>
                                    <li className='pt-3'>
                                        <h2 className={` pb-3 px-3 cursor-pointer ${location === "/about" ? 'border-b-4 font-bold border-[#C9E065]' : 'font-normal'}`}>ABOUT</h2>
                                    </li>
                                    <li className='pt-3'>
                                        <h2 className={` pb-3 px-3 cursor-pointer ${location === "/treatments" ? 'border-b-4 font-bold border-[#C9E065]' : 'font-normal'}`}>TREATMENTS</h2>
                                    </li>
                                    <li className='pt-3'>
                                        <h2 className={` pb-3 px-3 cursor-pointer ${location === "/packages" ? 'border-b-4 font-bold border-[#C9E065]' : 'font-normal'}`}>OUR PACKAGES</h2>
                                    </li>
                                    <li className='pt-3'>
                                        <h2 className={` pb-3 px-3 cursor-pointer ${location === "/appointment" ? 'border-b-4 font-bold border-[#C9E065]' : 'font-normal'}`}>APPOINTMENT</h2>
                                    </li>
                                    <li className='pt-3'>
                                        <h2 className={` pb-3 px-3 cursor-pointer ${location === "/contact" ? 'border-b-4 font-bold border-[#C9E065]' : 'font-normal'}`}>CONTACTS</h2>
                                    </li>
                                    <li>
                                        <div className='border rounded-full py-2 bg-[#1F3D64] text-[#C9E065] px-5'><h2 className='font-bold text-[16px]'>REQUEST CALL BACK</h2></div>
                                    </li>
                                </ul>
                                :
                                <ul className='flex  items-center flex-col text-[16px] '>
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

                                    <li className='pt-4 ' id="nav-item">
                                        <Link
                                            className={`${location === "/services" ? 'active' : ''}`}
                                            to="/services"
                                        >
                                            <h2 className={` pb-3 px-3 cursor-pointer uppercase`}>services</h2>
                                        </Link>

                                    </li>
                                    {/* <li className="main-li   cursor-pointer ">
                                        <Link to="/services" className="flex pt-3   items-center uppercase">services 
                                        </Link>
                                        <div className={`!w-auto `}>
                                            <div className="bg-white "></div>
                                            <div className="p-3 hidden">
                                                <div className="row">
                                                    <div className="col-lg-4 w-full   flex items-baseline flex-col ">
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


                                    </li> */}


                                   
                                    <li className='pt-3 ' id="nav-item">
                                        <Link
                                            className={`${location === "/booking" ? 'active' : ''}`}

                                            to="/booking"
                                        >
                                            <h2 className={` pb-3  px-3 cursor-pointer uppercase`}>Booking</h2>
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
                                        <div  className='border cursor-pointer rounded-full py-2 bg-[#1F3D64] text-[#C9E065] px-5'><h2 className='font-bold text-[16px]'>REQUEST CALL BACK</h2></div>
                                    </li>
                                </ul>
                        }
                    </div>
                </div>

                {/* Expand / collapse button */}
                {/* <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg className="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                <path className="text-slate-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div> */}
            </div>
        </div>
    );
}

export default Sidebar;