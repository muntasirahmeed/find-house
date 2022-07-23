import React from "react";
import Footer from "../../Shared/Footer/Footer";
import BecomeAgent from "../HomeShared/BecomeAgent";
import OurPartners from "../HomeShared/OurPartners";
import PropertyCities from "../HomeShared/PropertyCities";
import Testimonials from "../HomeShared/Testimonials/Testimonials";
import WhyChoseUs from "../HomeShared/WhyChoseUs";

const Page_1 = () => {
  return (
    <>
      <PropertyCities />
      <WhyChoseUs />
      <Testimonials />
      <OurPartners />
      <BecomeAgent />
      <Footer />
    </>
  );
};

export default Page_1;
