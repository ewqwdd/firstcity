'use client'

import { sheets_v4 } from 'googleapis'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCreative, Navigation } from 'swiper/modules'

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from 'next/image'
import { Skeleton } from '@/components/ui/skeleton'
import VStack from '@/shared/ui/Flex/VStack'
import './testimonial.css'

interface TestimonialsProps {
  data?: sheets_v4.Schema$ValueRange['values']
}

export default function Testimonials({ data }: TestimonialsProps) {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination, EffectCreative, Navigation]}
      slidesPerView={1}
      navigation
      effect='creative'
      className='max-w-[800px] !overflow-visible testimonial-slider'
      centeredSlides
      initialSlide={1}
      creativeEffect={{
        next: {
          translate: [320, 0, -400],
          rotate: [0, -16, 0],
          shadow: true
        },
        prev: {
          translate: [-320, 0, -400],
          rotate: [0, 16, 0],
          shadow: true
        },
      }}
    >
      {data?.map((elem, index) => (
        <SwiperSlide
          key={index}
          className="bg-primary px-4 py-2 sm:px-14 sm:py-9 shadow-lg border-t-2 border-white rounded-3xl relative"
        >
            <Image src='/images/bg-smiles.svg' alt='background-smiles' fill className='object-cover object-left-top'/>
          <div className="flex gap-5">
            <div className="relative size-16 rounded-full overflow-hidden">
              {elem[4] ? (
                <Image src={elem[4]} alt="avatar" />
              ) : (
                <Skeleton className="bg-slate-300 size-full" />
              )}
            </div>
            <VStack className="py-2 mt-2">
              <h3 className="text-lg font-semibold text-white">{elem[0]}</h3>
              <span className="text-white/90">{elem[1]}</span>
            </VStack>
          </div>
          <p className="text-white max-sm:text-sm">{elem[2]}</p>
          <span className="self-end text-xs text-white/60 w-full text-right mx-1">{elem[3]}</span>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
