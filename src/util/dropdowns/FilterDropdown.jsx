import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Transition from '../Transition/Transition';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

function FilterDropdown({
  align
}) {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className={` flex items-center w-full px-5 py-2 justify-between bg-white shadow-md transition duration-150 rounded-full ${dropdownOpen && 'bg-slate-200'}`}
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <h2> Filter </h2>
        <MdOutlineKeyboardArrowDown className='text-[20px] ml-2' />
      </button>

      <Transition
        className={`origin-top-center lg:right-20 md:right-0 xtra-small:right-0  lg:-left-[60px]  rounded-md  z-10 absolute top-full w-[200px]  bg-white border border-slate-200 py-5 px-2  shadow-lg overflow-hidden mt-1 `}
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <ul>
            <li>
              <Link
                className="text-[#444444] text-[14px] font-medium  flex items-center py-1 px-3"
                to="#0"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>Successful Transactions</span>
              </Link>
            </li>
            <li>
              <Link
                className="text-[#444444] text-[14px] font-medium  flex items-center py-1 px-3"
                to="#0"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>Failed Transactions</span>
              </Link>
            </li>
            <li>
              <Link
                className="text-[#444444] text-[14px] font-medium  flex items-center py-1 px-3"
                to="#0"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>Historical Transactions</span>
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  )
}

export default FilterDropdown;