import React from "react";
import sr1 from "../../../assests/Group 29.png";
import sr2 from "../../../assests/Group 29 (1).png";
import sr3 from "../../../assests/Group 29 (2).png";
const Services = () => {
  return (
    <div className="container px-2 my-10 md:my-20 mx-auto md:px-6">
  <section className="mb-5 lg:mb-10 text-center">
    

    <div className="grid lg:grid-cols-3 lg:gap-x-12">
      <div className="mb-12 lg:mb-0">
        <div
          className="block h-full rounded-lg bg-[#1F3D64]">
          <div className="flex justify-center">
            <div className="-mt-8 inline-block rounded-full bg-[#C9E065] p-4 shadow-md">
            <img src={sr1} alt={sr1} className="h-7 w-7" />
            </div>
          </div>
          <div className="p-6 text-white">
            <h5 className="mb-4 text-lg font-semibold text-[#C9E065]">Easy Accessibility</h5>
            <p>
            Connect with us effortlessly via WhatsApp and email for quick and convenient communication.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-12 lg:mb-0">
        <div
          className="block h-full rounded-lg bg-[#1F3D64]">
          <div className="flex justify-center">
            <div className="-mt-8 inline-block rounded-full bg-[#C9E065] p-4 shadow-md">
            <img src={sr2} alt={sr2} className="h-7 w-7" />
            </div>
          </div>
          <div className="p-6 text-white">
            <h5 className="mb-4 text-lg font-semibold text-[#C9E065]">Individualized Care</h5>
            <p>
            Receive personalized and tailored skincare solutions that cater to your unique needs and concerns.

            </p>
          </div>
        </div>
      </div>
      <div>
        <div
          className="block h-full rounded-lg bg-[#1F3D64]">
          <div className="flex justify-center">
            <div className="-mt-8 inline-block rounded-full bg-[#C9E065] p-4 shadow-md">
            <img src={sr3} alt={sr3} className="h-7 w-7" />
            </div>
          </div>
          <div className="p-6 text-white">
            <h5 className="mb-4 text-lg font-semibold text-[#C9E065]">In-Depth Consultation</h5>
            <p>
            Benefit from comprehensive consultations that delve deep into your skin health, ensuring thorough understanding and expert guidance.
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</div>
    // <div className="flex flex-col md:flex-row md:space-x-6 items-center justify-center pt-10">
    //   {/* First Image Block */}
    //   <div className="flex flex-col md:flex-row items-center md:px-5 py-5 ">
    //     <img src={sr1} alt={sr1} className="lg:w-32 h-auto mx-auto w-20" />
    //     <p className="mt-2 text-3xl px-5 ">Easy Accessibility</p>
    //   </div>
    //   {/* Second Image Block */}
    //   <div className="flex flex-col md:flex-row items-center md:px-5 py-5 ">
    //     <img src={sr2} alt={sr2} className="lg:w-32 h-auto mx-auto w-20" />
    //     <p className="mt-2 text-3xl px-5">Individualised Care</p>
    //   </div>
    //   {/* Third Image Block */}
    //   <div className="flex flex-col md:flex-row items-center md:px-5 py-5 ">
    //     <img src={sr3} alt={sr3} className="lg:w-32 h-auto mx-auto w-20" />
    //     <p className="mt-2 text-3xl px-5">In-Depth Consulation</p>
    //   </div>
    // </div>
  );
};

export default Services;
