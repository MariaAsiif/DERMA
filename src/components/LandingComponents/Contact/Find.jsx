import React from "react";
import location from "../../../assests/location.png";
import phone from "../../../assests/phone.png";
import message from "../../../assests/messge.png";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import ContactForm from "./ContactForm";
import { BsGeoAlt, BsTelephone, BsWhatsapp } from "react-icons/bs";
const address = "4 Harley St, London W1G 9QY, UK";
const Find = () => {
  return (
    <>
      <div className="container mx-auto px-2 md:px-6">
        <section className="mb-5 lg:mb-10">
          <div className="container md:px-12">
            <div className="block rounded-lg bg-[#C9E065] px-2 py-4 ">
              <div className="mb-2 grid md:grid-cols-2 lg:grid-cols-4">
                <div className="mx-auto mb-3 text-center lg:mb-0">
                  <BsGeoAlt className="mx-auto mb-2 h-7 w-7" />
                  <h6 className="font-medium">
                    4 Harley Street, London, W1G 9BP
                  </h6>
                </div>
                <div className="mx-auto mb-3 text-center lg:mb-0">
                  <BsTelephone className="mx-auto mb-2 h-7 w-7" />
                  <h6 className="font-medium">020 3916 5407</h6>
                </div>
                <div className="mx-auto mb-3 text-center lg:mb-0">
                  <BsWhatsapp className="mx-auto mb-2 h-7 w-7" />
                  <h6 className="font-medium">077 0669 5644</h6>
                </div>
                <div className="mx-auto mb-3 text-center lg:mb-0">
                  <HiOutlineMail className="mx-auto mb-2 h-7 w-7" />
                  <h6 className="font-medium">info@londonacneclinic.co.uk</h6>
                </div>
              </div>
              <div className="mx-auto ">
                <div className="container my-2 mx-auto md:px-6">
                  <section className="mb-3 text-center">
                    <div className="py-1 md:px-1">
                      <div className="container mx-auto xl:px-32">
                        <div className="grid items-center lg:grid-cols-2">
                          <div className="md:mb-12 lg:mb-0">
                            <div className="relative h-[500px] mb-2 md:mb-0 rounded-lg shadow-lg dark:shadow-black/20">
                              <iframe
                                title="google map address"
                                src={`https://maps.google.com/maps?q=${address}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                                className="absolute left-0 top-0 h-full w-full rounded-lg"
                                frameborder="0"
                                allowfullscreen
                              ></iframe>
                            </div>
                          </div>
                          <div className="mb-2 md:mt-12 lg:mt-0 lg:mb-0">
                            <div className="relative z-[1] block rounded-lg bg-white px-3 md:px-6 py-5 md:py-12  backdrop-blur-sm bg-white/80 md:px-12 lg:-ml-14">
                              <ContactForm />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Find;
