import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TopMarquee from "./TopMarquee";
import Popup from "../../util/popup/Popup";
import RequestForCall from "../../components/LandingComponents/Personal/RequestForCall";
import HomeFooter from "./HomeFooter";
import { useLocation } from "react-router-dom";
import HomeHeader from "./HomeHeader";
import { BsWhatsapp } from "react-icons/bs";

const Layout = ({ children }) => {
  const [show, setShow] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const location = useLocation().pathname;

  return (
    <>
      {show && (
        <Popup
          modalOpen={show}
          onClose={() => setShow(false)}
          data={<RequestForCall onCloseRequestModal={() => setShow(false)} />}
        />
      )}
      <div className="relative w-full">
        <div className="shadow-md z-50 sticky">
          <TopMarquee />
          {location === "/personal" ? (
            <Header open={setShow} />
          ) : (
            <HomeHeader open={setShow} />
          )}
        </div>
        <main>{children}</main>
        <div className="fixed bottom-4 z-40 right-2 md:right-4">
          {/* <a target="_blank" href="https://api.whatsapp.com/send?phone=447706695644" rel="noreferrer">
                        <div className='bg-[#5CBD20] rounded-md border-2 borde-white xl:px-4 md:px-2 px-2  xl:w-[230px] md:w-[230px]  py-2'>

                            <div className='flex '>
                                <img src={whatsapp} alt={whatsapp} className='object-cover ' />
                                <div className='pl-2 xl:block md:block hidden'>
                                    <h2 className=' text-white text-[15px] font-sans font-medium'>Contact on</h2>
                                    <h1 className=' text-white text-[20px] font-sans font-bold'>WhatsApp</h1>
                                </div>
                            </div>
                        </div>
                    </a> */}
          <div className="flex justify-center">
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=447706695644"
              rel="noreferrer"
            >
              <div className="-mt-8 inline-block rounded-full bg-[#25D366] p-2 shadow-md">
                <BsWhatsapp size={40} />
              </div>
            </a>
          </div>
          {/* <div onClick={() => setShow(true)} className='bg-[#1F3D64] cursor-pointer rounded-md border-2 borde-white xl:w-[230px] md:w-[230px] xl:px-4 md:px-2 px-2 py-2 mt-4'>
                        <div className='flex '>
                            <img src={consult} alt={consult} className='object-cover' />
                            <div className='pl-2 xl:block md:block hidden'>
                                <h2 className=' text-white text-[15px] font-sans font-medium'>Book </h2>
                                <h1 className=' text-white text-[20px] font-sans font-bold'>Consultation</h1>
                            </div>
                        </div>
                    </div> */}
        </div>
        <div>
          {location === "/personal" ? (
            <Footer />
          ) : (
            <HomeFooter setShow={setShow} />
          )}
        </div>
      </div>
    </>
  );
};

export default Layout;
