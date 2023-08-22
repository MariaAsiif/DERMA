import React from "react";
import sr1 from "../../../assests/Group 29.png";
import sr2 from "../../../assests/Group 29 (1).png";
import sr3 from "../../../assests/Group 29 (2).png";
const Services = () => {
  const myServices = [
    {
      pic: sr1,
      heading: "Easy Accessibility",
      desc: "Connect with us effortlessly via WhatsApp and email for quick and convenient communication.",
    },
    {
      pic: sr2,
      heading: "Individualized Care",
      desc: "Receive personalized and tailored skincare solutions that cater to your unique needs and concerns.",
    },
    {
      pic: sr3,
      heading: "In-Depth Consultation",
      desc: "Benefit from comprehensive consultations that delve deep into your skin health, ensuring thorough understanding and expert guidance.",
    },
  ];
  return (
    <div className="container px-2 mt-10 md:my-20 mx-auto md:px-6">
      <section className="lg:mb-10 text-center">
        <div className="grid lg:grid-cols-3 lg:gap-x-12">
          {myServices.map((item, i) => (
            <div className="mb-9 lg:mb-0" key={i + item.heading}>
              <div className="block h-full rounded-lg bg-gray-200 shadow-xl">
                <div className="flex justify-center">
                  <div className="-mt-8 inline-block rounded-full bg-[#1F3D64] p-4 shadow-xl">
                    <img src={item.pic} alt={item.pic} className="h-7 w-7" />
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-4 text-lg font-semibold">{item.heading}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
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
