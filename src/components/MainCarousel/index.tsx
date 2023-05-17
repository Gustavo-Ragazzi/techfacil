import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

export default function MainCarousel () {
    return (
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="./images/15.png" alt="MSI RTX4090" /></SwiperSlide>
        <SwiperSlide><img src="./images/16.png" alt="Galax RTX4080" /></SwiperSlide>
        <SwiperSlide><img src="./images/17.png" alt="Gigabyte RTX4080" /></SwiperSlide>
      </Swiper>
    )
}
