import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

export default function ItemDisplayCarousel() {
    return (
        <div className="bg-gray-200">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide><img src="./images/18.png" alt="MSI RTX4090" /></SwiperSlide>
            <SwiperSlide><img src="./images/19.png" alt="MSI RTX4090" /></SwiperSlide>
            <SwiperSlide><img src="./images/20.png" alt="MSI RTX4090" /></SwiperSlide>
            <SwiperSlide><img src="./images/21.png" alt="MSI RTX4090" /></SwiperSlide>
            <SwiperSlide><img src="./images/22.png" alt="MSI RTX4090" /></SwiperSlide>
            <SwiperSlide><img src="./images/23.png" alt="MSI RTX4090" /></SwiperSlide>
            <SwiperSlide><img src="./images/24.png" alt="MSI RTX4090" /></SwiperSlide>
            <SwiperSlide><img src="./images/25.png" alt="MSI RTX4090" /></SwiperSlide>
            <SwiperSlide><img src="./images/26.png" alt="MSI RTX4090" /></SwiperSlide>
          </Swiper>
          <p className="flex text-orange-500 font-bold justify-end text-lg mr-3"><a href="#">ver todos</a></p>
        </div>
    );
}