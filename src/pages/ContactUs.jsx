import React from "react";
import Layout from "../components/Layout/Layout";
import Find from "../components/LandingComponents/Contact/Find";
import BannerGeneric from "../components/GenericComponents/BannerGeneric";

const ContactUs = () => {
  return (
    <Layout>
      <BannerGeneric
        heading={"Contact US"}
        subHeading={"Get in touch with us"}
      />
      <Find />
    </Layout>
  );
};

export default ContactUs;
