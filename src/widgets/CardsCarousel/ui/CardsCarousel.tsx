'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CarouselItemsList } from "../config/carouselItemsList";
import CardMainPage from "./CardMainPage";
import styles from './CardsCarousel.module.css'
import { cn } from "@/shared/lib/utils";
import { useScreen } from "@/shared/hooks/useScreen";

export default function CardsCarousel() {
  const width = useScreen()
  return (
    <div className={cn('m-auto min-[420px]:px-10 px-6 lg:px-16 w-full relative', styles.carousel)}>
      <Carousel className="w-full max-w-7xl mx-auto" opts={{
        slidesToScroll: width && width<=1024 ? 1 : 2
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
        <CarouselPrevious className="max-[420px]:w-6 max-[420px]:h-6 max-[420px]:-left-[1.3rem]" />
        <CarouselNext className="max-[420px]:w-6 max-[420px]:h-6 max-[420px]:-right-[1.3rem]" />
      </Carousel>
    </div>
  )
}
