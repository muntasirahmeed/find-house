import React from "react";
import Footer from "../../Shared/Footer/Footer";
import BecomeAgent from "../HomeShared/BecomeAgent";
import Blogs from "../HomeShared/Blogs";
import FeaturedProperty from "../HomeShared/FeaturedProperty";
import Header1 from "../HomeShared/Headers/Header1";

import OurPartners from "../HomeShared/OurPartners";
import PropertyCities from "../HomeShared/PropertyCities";
import Testimonials from "../HomeShared/Testimonials/Testimonials";
import WhyChoseUs from "../HomeShared/WhyChoseUs";

const Page_1 = () => {
  return (
    <>
      <Header1 />
      <FeaturedProperty />
      <PropertyCities />
      <WhyChoseUs />
      <Testimonials />
      <Blogs />
      <OurPartners />
      <BecomeAgent />
      <Footer />
    </>
  );
};

export default Page_1;
