import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Paragraph from "@/shared/ui/Paragraph";
import { ArrowDown } from "lucide-react";
import { CarouselItemsList } from "../config/carouselItemsList";
import CardMainPage from "./CardMainPage";

export default function CardsCarousel() {
  return (
    <div className="max-w-7xl m-auto px-10 lg:px-16 w-full">
      <Carousel className="w-full"> 
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
