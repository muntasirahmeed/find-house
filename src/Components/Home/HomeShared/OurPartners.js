import React from "react";
import "../../../styles/css/bootstrap.min.css";
import "../../../styles/css/responsive.css";
import "../../../styles/css/style.css";
import img1 from "../../../styles/images/partners/1.png";
import img2 from "../../../styles/images/partners/2.png";
import img3 from "../../../styles/images/partners/3.png";
import img4 from "../../../styles/images/partners/4.png";
import img5 from "../../../styles/images/partners/5.png";
const OurPartners = () => {
  return (
    <div>
      {/* Our Partners  */}
      <section id="our-partners" class="our-partners">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <div class="main-title text-center">
                <h2>Our Partners</h2>
                <p>We only work with the best companies around the globe</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 col-md-4 col-lg">
              <div class="our_partner">
                <img
                  class="img-fluid"
                  src={img1}
                  alt="1.png"
                />
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg">
              <div class="our_partner">
                <img
                  class="img-fluid"
                  src={img2}
                  alt="2.png"
                />
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg">
              <div class="our_partner">
                <img
                  class="img-fluid"
                  src={img3}
                  alt="3.png"
                />
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg">
              <div class="our_partner">
                <img
                  class="img-fluid"
                  src={img4}
                  alt="4.png"
                />
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg">
              <div class="our_partner">
                <img
                  class="img-fluid"
                  src={img5}
                  alt="5.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurPartners;
