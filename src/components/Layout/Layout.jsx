import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TopMarquee from "./TopMarquee";
import Popup from "../../util/popup/Popup";
import RequestForCall from "../../components/LandingComponents/Personal/RequestForCall";
import HomeFooter from "./HomeFooter";
import { useLocation } from "react-router-dom";
import HomeHeader from "./HomeHeader";

const Layout = ({ children }) => {
  const [show, setShow] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const location = useLocation().pathname;

  const isSticky = () => {
    const scrollData = window.scrollY;
    setScrollTop(scrollData);
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, [scrollTop]);

  // const handleClick = () => {
  //   setShow(!show);
  // }

  return (
    <>
      {show && (
        <Popup
          modalOpen={show}
          onClose={() => setShow(false)}
          data={<RequestForCall onCloseRequestModal={() => setShow(false)}/>}
        />
      )}
      <div className="relative w-full">
        <div className="fixed w-full shadow-md z-50">
          <TopMarquee />
          {location === "/personal" ? (
            <Header type={scrollTop} open={setShow} />
          ) : (
            <HomeHeader type={scrollTop} open={setShow} />
          )}
        </div>
        <main className="xl:pt-32 pt-20">{children}</main>
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
