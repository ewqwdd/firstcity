'use client'
import React, { useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useScreen } from "@/shared/hooks/useScreen";
import { cn } from "@/shared/lib/utils";
import { CarouselItemsList } from "../config/carouselItemsList";
import CardMainPage from "./CardMainPage";
import styles from "./CardsCarousel.module.css";

export default function CardsCarousel() {
  const width = useScreen();
  const swiper = useRef<SwiperRef>(null);

  return (
    <section
      id="Carousel"
      className={cn(
        "m-auto min-[420px]:px-10 px-3 lg:px-16 w-full relative",
        styles.carousel
      )}
    >
      <Swiper
        ref={swiper}
        navigation={true}
        keyboard={true}
        modules={[Navigation, Keyboard]}
        className={cn("w-full max-w-7xl mx-auto bg-primary/10 lg:!px-8 !px-1 lg:!py-4 !py-1 rounded-xl items-stretch flex", styles.wrapper)}
        breakpoints={{
          520: {
            slidesPerView: 3,
            direction: 'vertical'
          },
          1024: {
            direction: 'horizontal'
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