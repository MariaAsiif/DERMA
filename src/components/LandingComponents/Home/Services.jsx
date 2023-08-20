import React from "react";
import sr1 from "../../../assests/Group 29.png";
import sr2 from "../../../assests/Group 29 (1).png";
import sr3 from "../../../assests/Group 29 (2).png";
const Services = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-6 items-center justify-center pt-10">
      {/* First Image Block */}
      <div className="flex flex-col md:flex-row items-center md:px-5 py-5 ">
        <img src={sr1} alt={sr1} className="lg:w-32 h-auto mx-auto w-20" />
        <p className="mt-2 text-3xl px-5 ">Easy Accessibility</p>
      </div>
      {/* Second Image Block */}
      <div className="flex flex-col md:flex-row items-center md:px-5 py-5 ">
        <img src={sr2} alt={sr2} className="lg:w-32 h-auto mx-auto w-20" />
        <p className="mt-2 text-3xl px-5">Individualised Care</p>
      </div>
      {/* Third Image Block */}
      <div className="flex flex-col md:flex-row items-center md:px-5 py-5 ">
        <img src={sr3} alt={sr3} className="lg:w-32 h-auto mx-auto w-20" />
        <p className="mt-2 text-3xl px-5">In-Depth Consulation</p>
      </div>
    </div>
  );
};

export default Services;
