'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { cn } from "@/shared/lib/utils";
import { CarouselItemsList } from "../config/carouselItemsList";
import CardMainPage from "./CardMainPage";
import styles from "./CardsCarousel.module.css";

export default function CardsCarousel() {

  return (
    <section
      id="Carousel"
      className={cn(
        "m-auto md:ml-10 lg:mx-0 px-0.5 md:px-3 max-sm:px-6 sm:max-lg:mt-10 max-sm:w-full lg:w-full relative py-2 sm:py-8 max-lg:bg-primary/10 max-lg:rounded-xl ",
        styles.carousel
      )}
    >
      <Swiper
        navigation={true}
        keyboard={true}
        modules={[Navigation, Keyboard]}
        className={cn("w-full max-w-7xl lg:bg-primary/10 lg:rounded-xl mx-auto lg:!px-8 !px-1 lg:!py-4 !py-1 items-stretch flex !static lg:!relative", styles.wrapper)}
        breakpoints={{
          0: {
            direction: 'horizontal',
            slidesPerView: 1
          },
          640: {
            slidesPerView: 3,
            direction: 'vertical'
          },
          1024: {
            direction: 'horizontal',
            slidesPerView: 3
          },
          1280: {
            slidesPerView: 4
          }
        }}
      >
        {CarouselItemsList.map((elem, index) => (
          <SwiperSlide
            key={index}
            className="pl-1"
            style={{
              height: "unset",
            }}
          >
            <div className="p-1 h-full">
              <CardMainPage {...elem} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}