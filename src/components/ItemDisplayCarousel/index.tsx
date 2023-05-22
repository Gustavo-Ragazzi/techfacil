import { Swiper, SwiperSlide } from "swiper/react";
import itemList from '../../storage.json'

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import ItemCard from "../ItemCard";

export default function ItemDisplayCarousel() {
    return (
        <div className="bg-gray-200 shadow-lg px-5 py-8">
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
              1320: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1750: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {itemList.map((item) => (
              <SwiperSlide key={item.id}>
                <ItemCard 
                  id={item.id}
                  name={item.name}
                  price={item.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <p className="flex text-orange-500 font-bold justify-end text-lg mr-3"><a href="#">ver todos</a></p>
        </div>
    );
}