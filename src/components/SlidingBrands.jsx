import React from "react";
import "../styles/slidingbrands.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { clubs, companies, colleges } from "../data";

const SlidingBrands = ({ small, title, type }) => {
  var brands = companies;
  var rounded = "none";

  if (type === "club") {
    brands = clubs;
    rounded = "50px";
  } else if (type === "college") {
    brands = colleges;
  }

  return (
    <section className="slidingbrands">
      <div className="slidingbrands-container">
        <h2>
          {small}
          <span>{title}</span>
        </h2>
        <div className="brands-container">
          <Swiper
            spaceBetween={1}
            slidesPerView={4}
            autoplay={{
              delay: 1000,
            }}
            loop={true}
            pagination={{
              clickable: true,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            speed={2000}
          >
            {brands.map((ele, i) => {
              return (
                <SwiperSlide key={i}>
                  <img
                    style={{
                      borderRadius: rounded,
                    }}
                    src={ele}
                    alt={"brand"}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SlidingBrands;
