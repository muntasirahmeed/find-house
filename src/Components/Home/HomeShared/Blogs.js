import React from "react";
import img1 from '../../../styles/images/blog/bh1.jpg'
import img2 from '../../../styles/images/blog/bh2.jpg'
import img3 from '../../../styles/images/blog/bh3.jpg'
import img4 from '../../../styles/images/property/pposter1.png'
import img5 from "../../../styles/images/property/pposter1.png";
import img6 from "../../../styles/images/property/pposter1.png";
const Blogs = () => {
  return (
    // <!-- Our Blog -->
    <section class="our-blog bgc-f7 pb30">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="main-title text-center">
              <h2>Articles & Tips</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-4 col-xl-4">
            <div class="for_blog feat_property">
              <div class="thumb">
                <img class="img-whp" src={img1} alt="bh1.jpg" />
              </div>
              <div class="details">
                <div class="tc_content">
                  <p class="text-thm">Business</p>
                  <h4>Skills That You Can Learn In The Real Estate Market</h4>
                </div>
                <div class="fp_footer">
                  <ul class="fp_meta float-left mb0">
                    <li class="list-inline-item">
                      <a href="#">
                        <img src={img5} alt="pposter1.png" />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">Ali Tufan</a>
                    </li>
                  </ul>
                  <a class="fp_pdate float-right" href="#">
                    7 August 2019
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 col-xl-4">
            <div class="for_blog feat_property">
              <div class="thumb">
                <img
                  class="img-whp"
                  src={img2}
                  alt="bh2.jpg"
                />
              </div>
              <div class="details">
                <div class="tc_content">
                  <p class="text-thm">Business</p>
                  <h4>
                    Bedroom Colors You’ll Never <br class="dn-1199" /> Regret
                  </h4>
                </div>
                <div class="fp_footer">
                  <ul class="fp_meta float-left mb0">
                    <li class="list-inline-item">
                      <a href="#">
                        <img src={img5} alt="pposter1.png" />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">Ali Tufan</a>
                    </li>
                  </ul>
                  <a class="fp_pdate float-right" href="#">
                    7 August 2019
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 col-xl-4">
            <div class="for_blog feat_property">
              <div class="thumb">
                <img
                  class="img-whp"
                  src={img3}
                  alt="bh3.jpg"
                />
              </div>
              <div class="details">
                <div class="tc_content">
                  <p class="text-thm">Business</p>
                  <h4>5 Essential Steps for Buying an Investment</h4>
                </div>
                <div class="fp_footer">
                  <ul class="fp_meta float-left mb0">
                    <li class="list-inline-item">
                      <a href="#">
                        <img
                          src={img5}
                          alt="pposter1.png"
                        />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">Ali Tufan</a>
                    </li>
                  </ul>
                  <a class="fp_pdate float-right" href="#">
                    7 August 2019
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
