import React from "react";
import leaderImg from "../../../assests/dr-maham.jpg";
import { Link } from "react-router-dom";
const MeetLeader = () => {
  return (
    <>
      <div className="container my-2 mx-auto md:px-6">
        <section className="mb-10 text-center lg:text-left">
          <div className="py-12 md:px-6 md:px-12">
            <div className="container mx-auto xl:px-32">
              <div className="flex grid items-center lg:grid-cols-2">
                <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                  <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                    <h2 className="text-[#C9E065] text-[60px] font-normal font-Herr text-center mb-2">
                      About Us
                    </h2>
                    <h1 className="text-[#1F3D64]  mb-4 uppercase lg:text-[30px] text-[20px] font-sans font-medium">
                      Meet Our Leading Specialist
                    </h1>
                    <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                      Dr Maham Khan is an experienced doctor known for her
                      warmth, approachability, and dedication to dermatology.
                      Having trained at the renowned Imperial College Healthcare
                      she now works at leading hospitals in London.
                    </p>
                    <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                      She is an internationally renowned dermatologist, who has
                      worked within the NHS for many years. She has gained
                      further experience in the field by doing Masters in
                      Clinical Dermatology from the prestigious St John's
                      Institute of Dermatology. She has carried out cosmetic
                      Dermatology Procedures at Harley Street, London. She has a
                      special interest in acne, skin cancer and inflammatory
                      skin conditions. She believes in a holistic approach to
                      patient management.
                    </p>
                    <Link
                      to="/booking"
                      className="flex justify-center lg:justify-start"
                    >
                      <button className="rounded-full  lg:text-[16px] text-[14px] font-bold font-sans mt-3 bg-[#1F3D64] text-[#C9E065] hover:bg-[#C9E065] hover:text-[#1F3D64] uppercase px-8 py-3 ">
                        Book an Appointment
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="md:mb-12 lg:mb-0">
                  <img
                    src={leaderImg}
                    alt={leaderImg}
                    className="lg:rotate-[6deg] w-full rounded-lg shadow-lg dark:shadow-black/20"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MeetLeader;
