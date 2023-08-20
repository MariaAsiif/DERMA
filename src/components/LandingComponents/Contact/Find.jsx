import React from "react";
import location from "../../../assests/location.png";
import phone from "../../../assests/phone.png";
import message from "../../../assests/messge.png";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
const address = "4 Harley St, London W1G 9QY, UK";
const Find = () => {
  return (
    <div className="container my-2 mx-auto md:px-6">
      <div className="block rounded-lg bg-[#C9E065] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
        <div className="flex flex-wrap items-center">
          <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
            <div className="h-[500px] w-full">
              <iframe
                title="google map address"
                src={`https://maps.google.com/maps?q=${address}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
              
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12 text-black">
            <div className="flex flex-wrap px-3 pt-12 pb-2 md:pb-0 lg:pt-0">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md p-4 ">
                      <img src={phone} alt={phone} className="object-cover" />
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold ">Technical support</p>
                    <p className="text-neutral-500 ">020 3916 5407</p>
                    <p className="text-neutral-500 ">077 0669 5644</p>
                  </div>
                </div>
              </div>
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md p-4 ">
                      <img
                        src={location}
                        alt={location}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold ">Address</p>
                    <p className="text-neutral-500 ">4 Harley Street,</p>
                    <p className="text-neutral-500 ">London, W1G 9BP</p>
                  </div>
                </div>
              </div>
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md p-4 ">
                      <img
                        src={message}
                        alt={message}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold ">E-mail</p>
                    <p className="text-neutral-500 ">info@londonacneclinic.co.uk</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center pb-4">
              <AiOutlineTwitter className="text-[20px] text-[#1F3D64]" />
              <a
                href="https://www.instagram.com/drmahamk/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineInstagram className="text-[20px] mx-4 text-[#1F3D64]" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100091451258849"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF className="text-[20px] text-[#1F3D64]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Find;
