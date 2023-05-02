import React, { useState, useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Transition from '../Transition/Transition';
import { BsThreeDotsVertical } from 'react-icons/bs';

function GenericDrodown({data}) {

  console.log("data", data )

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
        className={` flex items-center w-full   justify-between bg-transparent  transition duration-150 rounded-full ${dropdownOpen && 'bg-slate-200'}`}
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <BsThreeDotsVertical className='text-[20px] text-[#898989]' />

      </button>

      <Transition
        className={`origin-top-center  z-10 absolute top-full w-[120px] h-[300px]  bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1`}
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
          {/* {data} */}

         <div className='border h-[120px]'> {data} </div> 
        </div>
      </Transition>
    </div>
  )
}

export default GenericDrodown;