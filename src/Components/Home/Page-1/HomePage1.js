import React from "react";
import Footer from "../../Shared/Footer/Footer";
import BecomeAgent from "../HomeShared/BecomeAgent";
import OurPartners from "../HomeShared/OurPartners";
import PropertyCities from "../HomeShared/PropertyCities";
import WhyChoseUs from "../HomeShared/WhyChoseUs";

const Page_1 = () => {
  return (
    <>
      <PropertyCities />
      <WhyChoseUs />
      <OurPartners />
      <BecomeAgent />
      <Footer />
    </>
  );
};

export default Page_1;
