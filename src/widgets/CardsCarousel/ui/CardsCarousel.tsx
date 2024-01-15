'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CarouselItemsList } from "../config/carouselItemsList";
import CardMainPage from "./CardMainPage";
import styles from './CardsCarousel.module.css'
import { cn } from "@/shared/lib/utils";

export default function CardsCarousel() {
  return (
    <div className={cn('m-auto px-10 lg:px-16 w-full', styles.carousel)}>
      <Carousel className="w-full" opts={{
        slidesToScroll: 2
      }}
      
      setApi={(api) => {
        api.on('scroll', (api_, evt) => {
          const container = api_.containerNode()
          const wrapper = api_.rootNode()
          console.log(wrapper.clientWidth)
          const transform = container.style.transform
          const number = transform.match(/\d+/);
          const nodes = api_
        })
      }}> 
        <CarouselContent className="-ml-1">
          {CarouselItemsList.map((elem, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/3 lg:basis-1/4">
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
