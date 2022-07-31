import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../../../styles/css/swiper.css";
import "../../../../styles/css/style.css";
import { Pagination } from "swiper";
const Testimonials = () => {
  const data = [
    {
      id: 1,
      img: "https://i.ibb.co/McBj6Gd/2.jpg",
    },
    {
      id: 2,
      img: "https://i.ibb.co/wCmBT7r/2.png",
    },
    {
      id: 3,
      img: "https://i.ibb.co/v1ndN0y/4.png",
    },
    {
      id: 4,
      img: "https://i.ibb.co/7z0FMmX/6.png",
    },
    {
      id: 5,
      img: "https://i.ibb.co/VgjYfpS/7.png",
    },
  ];
  return (
    // <!-- Our Testimonials -->
    <section id="our-testimonials" class="our-testimonial">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="main-title text-center">
              <h2 class="color-white">Testimonials</h2>
              <p class="color-white">Here could be a nice sub title</p>
            </div>
          </div>
        </div>
        <Swiper
          style={{
            "--swiper-pagination-bullet-horizontal-gap": "7px",
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          speed={1100}
          className=""
        >
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <div class="testimonial_grid_slider">
                {data.map((img) => (
                  <SwiperSlide>
                    <div class="item">
                      <div class="testimonial_grid">
                        <div class="thumb">
                          <img src={img.img} alt="1.jpg" />
                        </div>
                        <div class="details">
                          <h4>Augusta Silva</h4>
                          <p>Sales Manager</p>
                          <p class="mt25">
                            Aliquam dictum elit vitae mauris facilisis at dictum
                            urna dignissim donec vel <br /> lectus vel felis.
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
