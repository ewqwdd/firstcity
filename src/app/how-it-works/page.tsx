'use client'
import VStack from "@/shared/ui/Flex/VStack";
import Heading from "@/shared/ui/Heading";
import Paragraph from "@/shared/ui/Paragraph";
import { EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function page() {
  return (
    <VStack as='main'>
        <VStack as='header' className="bg-FMC_primary px-3 overflow-hidden">
            <div className="mx-auto max-w-7xl w-full grid grid-cols-2">
                <VStack className="py-14 pl-7 max-w-3xl justify-between">
                    <Heading as='h1' className="text-5xl font-bold text-slate-100">
                        Revolutionising the quality of our services and ensuring top customer satisfaction
                    </Heading>
                    <Paragraph className="text-2xl leading-7 text-slate-300">
                        You can see what our business has to offer by checking down below or by watching a short demonstration clip
                    </Paragraph>
                </VStack>
                <div className="h-3/4 my-10 w-3/4 max-w-xl aspect-video">
                <Swiper
                    grabCursor={true}
                    effect={'creative'}
                    className="h-full !overflow-visible"
                    loop
                    creativeEffect={{
                    prev: {
                        translate: ['-10%', '-20%', -100],
                    },
                    next: {
                        translate: ['10%', '20%', 100],
                    },
                    }}
                    modules={[EffectCreative]}
                    
                >
                    <SwiperSlide className="aspect-video  bg-slate-400">Slide 1</SwiperSlide>
                    <SwiperSlide className="aspect-video bg-slate-500">Slide 2</SwiperSlide>
                    <SwiperSlide className="aspect-video bg-slate-600">Slide 3</SwiperSlide>
                    <SwiperSlide className="aspect-video bg-slate-700">Slide 4</SwiperSlide>
                    <SwiperSlide className="aspect-video bg-slate-800">Slide 5</SwiperSlide>

                </Swiper>
                </div>
            </div>
        </VStack>
    </VStack>
  )
}
