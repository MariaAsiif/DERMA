import React, { useState } from "react";
import logo from "../../assests/lure-logo 1.png";
import { GoThreeBars } from "react-icons/go";
import Sidebar from "./Sidebar";
import { useLocation, Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
const HomeHeader = ({ open }) => {
  const location = useLocation().pathname;
  // const location = "/"
  const [sideNavShow, setSideNavShow] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const list = [
    "Hair loss",
    "Acne",
    "Alopecia",
    "Skin tag",
    "Mole Removal",
    "Hair-PRP",
    "Allergy Testing",
  ];

  return (
    <>
      <Sidebar sidebarOpen={sideNavShow} setSidebarOpen={setSideNavShow} />

      <div className="flex justify-between w-full bg-white border-t">
        <div className="w-1/6 p-2 pl-5">
          <Link to="/">
            <img src={logo} alt="personal" className="object-cover w-[70px]" />
          </Link>
        </div>
        <div className=" lg:w-5/6 flex justify-end items-center">
          <nav className="flex space-x-10 hidden lg:flex relative">
            <Link
              to="/"
              className={`block hover:text-[#be9162] ${
                location === "/" ? "border-b-4 border-[#1F3D64]" : ""
              }`}
            >
              HOME
            </Link>
            <Link
              to="/aboutus"
              className={`block hover:text-[#be9162] ${
                location === "/aboutus" ? "border-b-4 border-[#1F3D64]" : ""
              }`}
            >
              ABOUT
            </Link>
            <div
              className="block relative"
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
              style={{ zIndex: 1 }}
            >
              <span className="flex items-center">
                <Link
                  to="/services"
                  className={`block hover:text-[#be9162] ${
                    location === "/services"
                      ? "border-b-4 border-[#1F3D64]"
                      : ""
                  }`}
                >
                  SERVICES
                </Link>
                <RiArrowDropDownLine className="ml-1 text-lg" />
              </span>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 bg-black text-white p-2 w-40 rounded-md shadow-md">
                  <ul>
                    {list.map((item, index) => (
                      <li key={index}>
                        <Link
                          to={`/service-detail/${index}`}
                          className="block hover:bg-green-500 p-1 "
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <Link
              to="/booking"
              className={`block hover:text-[#be9162] ${
                location === "/booking" ? "border-b-4 border-[#1F3D64]" : ""
              }`}
            >
              BOOKING
            </Link>
            <Link
              to="/contactus"
              className={`block hover:text-[#be9162] ${
                location === "/contactus" ? "border-b-4 border-[#1F3D64]" : ""
              }`}
            >
              CONTACT US
            </Link>
          </nav>

          <div className="px-10 lg:px-10">
            <GoThreeBars
              className="text-[30px] cursor-pointer text-[#1E154E] lg:hidden"
              onClick={() => setSideNavShow(true)}
            />
            <div
              onClick={() => open(true)}
              className="hidden lg:block border cursor-pointer rounded-full py-2 bg-[#1F3D64] transform delay-100 ease-out text-[#C9E065] hover:bg-white hover:text-[#1F3D64] px-5"
            >
              <h2 className="font-bold text-[16px]">REQUEST CALL BACK</h2>
            </div>
          </div>
        </div>
        {/* <div className="w-2/6 p-4 flex justify-end items-center">
          <GoThreeBars
            className="text-[30px] cursor-pointer text-[#1E154E] lg:hidden"
            onClick={() => setSideNavShow(true)}
          />

          <div
            onClick={() => open(true)}
            className="hidden lg:block border cursor-pointer rounded-full py-2 bg-[#1F3D64] transform delay-100 ease-out text-[#C9E065] hover:bg-white hover:text-[#1F3D64] px-5"
          >
            <h2 className="font-bold text-[16px]">REQUEST CALL BACK</h2>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default HomeHeader;
