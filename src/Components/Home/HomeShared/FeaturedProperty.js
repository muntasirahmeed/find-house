import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../../styles/css/swiper.css";
import "../../../styles/css/style.css";
import { Pagination } from "swiper";

import img1 from "../../../styles/images/property/fp1.jpg";
import img2 from "../../../styles/images/property/pposter1.png";

const FeaturedProperty = () => {
  const data = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];
  return (
    <div className="bgc-f7">
      <div className="container pt40 pb40 ovh ">
        <div className="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="main-title text-center mb40">
              <h2>Featured Properties</h2>
              <p>Handpicked properties by our team.</p>
            </div>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            speed={1200}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              //   1024: {
              //     slidesPerView: 5,
              //     spaceBetween: 50,
              //   },
            }}
          >
            <div>
              {data.map((property) => (
                <SwiperSlide>
                  <div class="feat_property">
                    <div class="thumb">
                      <img class="img-whp" src={img1} alt="fp1.jpg" />
                      <div class="thmb_cntnt">
                        <ul class="tag mb0">
                          <li class="list-inline-item">
                            <a href="#">For Rent</a>
                          </li>
                          <li class="list-inline-item">
                            <a href="#">Featured</a>
                          </li>
                        </ul>
                        <ul class="icon mb0">
                          <li class="list-inline-item">
                            <a href="#">
                              <span class="flaticon-transfer-1"></span>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a href="#">
                              <span class="flaticon-heart"></span>
                            </a>
                          </li>
                        </ul>
                        <a class="fp_price" href="#">
                          $13,000<small>/mo</small>
                        </a>
                      </div>
                    </div>
                    <div class="details">
                      <div class="tc_content">
                        <p class="text-thm">Apartment</p>
                        <h4>Renovated Apartment</h4>
                        <p>
                          <span class="flaticon-placeholder"></span> 1421 San
                          Pedro St, Los Angeles, CA 90015
                        </p>
                        <ul class="prop_details mb0">
                          <li class="list-inline-item">
                            <a href="#">Beds: 4</a>
                          </li>
                          <li class="list-inline-item">
                            <a href="#">Baths: 2</a>
                          </li>
                          <li class="list-inline-item">
                            <a href="#">Sq Ft: 5280</a>
                          </li>
                        </ul>
                      </div>
                      <div class="fp_footer">
                        <ul class="fp_meta float-left mb0">
                          <li class="list-inline-item">
                            <a href="#">
                              <img src={img2} alt="pposter1.png" />
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a href="#">Ali Tufan</a>
                          </li>
                        </ul>
                        <div class="fp_pdate float-right">4 years ago</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperty;
