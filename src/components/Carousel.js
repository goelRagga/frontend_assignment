"use client";

import React, { useRef } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import styles from "../app/page.module.css";
import CarouselProductCard from "./CarouselProductCard";

const Carousel = ({ products }) => {
  const navigationNextRef = useRef(null);

  return (
    <div className={styles.carousel}>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
        }}
        // navigation={{
        //   //   prevEl: navigationPrevRef.current,
        //   nextEl: navigationNextRef.current,
        // }}
        // onBeforeInit={(swiper) => {
        //   //   swiper.params.navigation.prevEl = navigationPrevRef.current;
        //   swiper.params.navigation.nextEl = navigationNextRef.current;
        // }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {products &&
          products.slice(0, 8).map((obj, index) => {
            return (
              <SwiperSlide className={styles.carouselSlide}>
                <CarouselProductCard data={obj} key={index} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default Carousel;
