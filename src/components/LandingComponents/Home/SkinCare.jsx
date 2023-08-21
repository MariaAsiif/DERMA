import React from "react";
import skinImg from "../../../assests/Rectangle 17 (5).png";
import tr1 from "../../../assests/Ellipse1.png";
import tr2 from "../../../assests/Ellipse2.png";
import tr3 from "../../../assests/Ellipse3.png";
import tr4 from "../../../assests/Ellipse4.png";
import { Link } from "react-router-dom";
const SkinCare = () => {
  const treatment = [
    {
      pic: tr1,
      heading: "Hair loss",
      desc: "Hair loss, also known as alopecia, refers to the condition of experiencing a significant reduction in hair density or hair thinning...",
    },
    {
      pic: tr2,
      heading: "Acne",
      desc: "Acne is a chronic skin disorder that occurs when hair follicles become clogged with oil, dead skin cells, and bacteria...",
    },
    {
      pic: tr3,
      heading: "Allergy testing",
      desc: "Allergy testing is a diagnostic procedure that helps identify specific substances (allergens) that trigger an allergic reaction in an individual...",
    },
    {
      pic: tr4,
      heading: "Skin tag",
      desc: "medically known as acrochordons, are small, soft, benign growths that typically appear as tiny, flesh-colored or slightly darker skin flaps...",
    },
    {
      pic: tr1,
      heading: "Mole Removel",
      desc: "Mole removal refers to the medical procedure of removing a mole from the skin's surface. Moles, also known as nevi, are small clusters of pigmented cells...",
    },
  ];
  return (
    <>
      <div className="flex mb-10 sm:max-md:px-2">
        <div className="w-full">
          <div className="lg:ml-[9%] ml-[4%]">
            <h2 className="text-[#C9E065]  leading-0 lg:text-[60px] md:text-[50px] text-[40px] font-normal font-Herr ">
              Our Services
            </h2>
            <h1 className="text-[#1F3D64] lg:-mt-[30px] uppercase leading-0 lg:text-[41px] text-[25px] md:text-[35px] font-sans font-semibold">
              Skin Care Treatment Options
            </h1>
            <div>
              <div className="container my-2 md:my-5 mx-auto md:px-2">
                <section className=" text-center">
                  <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
                    {treatment?.map((item, i) => (
                      <div className="mb-12" key={i}>
                        <div className="mb-6 flex justify-center">
                          <img
                            src={item?.pic}
                            alt={item?.pic}
                            className=" rounded-full shadow-lg dark:shadow-black/20"
                          />
                        </div>
                        <h5 className="mb-2 text-lg font-bold">
                          {" "}
                          {item?.heading}
                        </h5>

                        <p className="mb-4">{item?.desc}</p>
                        <div className="mb-0 flex justify-center">
                          <Link
                            to={`/service-detail`}
                            className="bg-[#1F3D64] font-sans  bottom-0 xl:right-[35%] right-[38%] max-w-[80px]   text-[#C9E065] mt-2 rounded-full px-2 font-semibold text-[10px] py-1"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
              <div className="flex justify-center items-center">
                <Link
                  to="/services"
                  className="rounded-full lg:text-[16px] text-[14px] font-bold font-sans bg-[#1F3D64] text-[#C9E065] hover:bg-[#C9E065] hover:text-[#1F3D64] uppercase px-8 py-3 "
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:block hidden md:block">
          <img
            src={skinImg}
            alt={skinImg}
            className="object-cover w-full h-full rounded-l-[50px]"
          />
        </div>
      </div>
    </>
  );
};

export default SkinCare;
