import React, { useRef } from "react";
import "../styles/showcase.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import carrerCarnival from "../assets/carrerCarnival.jpg";
import COverIt from "../assets/CoverIt.jpg";
import Enliven from "../assets/Enliven.jpg";
import gameaTHon from "../assets/gameaTHon.jpg";
import scrims from "../assets/scrims.jpg";

const Showcase = ({ type }) => {
  const banners = [
    carrerCarnival,
    COverIt,
    Enliven,
    gameaTHon,
    scrims,
  ];
  const windowSize = useRef(window.innerWidth);

  return (
    <section className={`showcase ${type}-showcase`}>
      <div className="showcase-container container">
        <Swiper
          spaceBetween={1}
          slidesPerView={windowSize.current <= 1150 ? 1 : 2}
          pagination={(true, { clickable: true })}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, Pagination]}
          speed={800}
        >
          {banners.map((ele, i) => {
            return (
              <SwiperSlide key={i}>
                <img src={ele} alt={"brand"} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Showcase;
