import { Button } from '@/components/ui/button'
import HStack from '@/shared/ui/Flex/HStack'
import VStack from '@/shared/ui/Flex/VStack'
import { ArrowDown } from 'lucide-react'
import styles from './HeroPictureMobile.module.css'
import Image from 'next/image'
import { cn } from '@/shared/lib/utils'

export default function HeroPictureMobile() {
  return (
    <VStack className="grow relative">
      <div
        className="relative max-h-[40dvh]"
        style={{
          aspectRatio: '10/11',
        }}
      >
        <Image
          src="/images/hero-masked.png"
          alt="hero-image"
          fill
          className="object-contain object-top pointer-events-none"
        />
      </div>
      <HStack className="flex-wrap justify-around gap-x-4 gap-y-1 mt-2 mb-4">
        <Button
          className="font-medium sm:text-xl text-lg py-2"
          variant={'secondary'}
        >
          CONTACT US
        </Button>
        <Button
          className="font-medium sm:text-xl text-lg py24 bg-foreground/10"
          variant={'ghost'}
        >
          HOW IT WORKS?
        </Button>
      </HStack>
      <Button
        className={cn(
          'aspect-square rounded-full self-center mt-auto mb-4',
          styles.scrollDownBtn
        )}
        asChild
      >
        <a href="#Carousel">
          <ArrowDown />
        </a>
      </Button>
    </VStack>
  )
}
