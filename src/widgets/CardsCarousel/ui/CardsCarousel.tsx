'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CarouselItemsList } from "../config/carouselItemsList";
import CardMainPage from "./CardMainPage";
import styles from './CardsCarousel.module.css'
import { cn } from "@/shared/lib/utils";

export default function CardsCarousel() {
  return (
    <div className={cn('m-auto px-10 lg:px-16 w-full relative', styles.carousel)}>
      <Carousel className="w-full max-w-7xl mx-auto" opts={{
        slidesToScroll: 2
      }}
      > 
        <CarouselContent className="-ml-1">
          {CarouselItemsList.map((elem, index) => (
            <CarouselItem key={index} className="pl-1 sm:basis-1/2 min-[900px]:basis-1/3 xl:basis-1/4">
              <div className="p-1 h-full">
                <CardMainPage {...elem}/>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
