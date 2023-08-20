import React from "react";
import r1 from "../../../assests/r1.png";
import r2 from "../../../assests/r2.png";
import r3 from "../../../assests/image03.png";
import r4 from "../../../assests/image02.png";
import r5 from "../../../assests/r5.png";
import r6 from "../../../assests/r6.png";
const Results = () => {
  return (
    <>
      <div className="container mx-auto  xl:px-20 px-5 pt-[50px] ">
        <h2 className="text-[#C9E065]  leading-0 lg:text-[60px] text-[40px] md:text-[50px] font-normal font-Herr ">
          Acne Result
        </h2>
        <div className="flex lg:flex-nowrap flex-wrap justify-between items-center lg:-mt-[30px]">
          <h1 className="text-[#1F3D64]  uppercase leading-0 lg:text-[36px] md:text-[28px] text-[20px] font-sans font-medium">
            effective treatments with spectacular results
          </h1>
          <button className="rounded-full lg:text-[16px] text-[14px] font-bold font-sans mt-3 bg-[#1F3D64] text-[#C9E065] hover:bg-[#C9E065] hover:text-[#1F3D64] uppercase px-8 py-3 ">
            view more
          </button>
        </div>
        <div className="pt-[50px]">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-5">
            <div className="">
              <div className="grid grid-cols-2">
                <img src={r1} alt={r1} className="object-cover" />
                <img src={r2} alt={r2} className="object-cover" />
              </div>
              <div>
                <img src={r3} alt={r3} className="object-cover" />
              </div>
            </div>
            <div className="">
              <div>
                <img src={r4} alt={r4} className="object-cover" />
              </div>
              <div className="grid grid-cols-2">
                <img src={r5} alt={r5} className="object-cover" />
                <img src={r6} alt={r6} className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Results;
