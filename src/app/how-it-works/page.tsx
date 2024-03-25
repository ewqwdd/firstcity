import VStack from "@/shared/ui/Flex/VStack";
import Heading from "@/shared/ui/Heading";
import HStack from "@/shared/ui/Flex/HStack";
import Image from "next/image";
import { cn } from "@/shared/lib/utils";
import styles from './HowItWorks.module.css'
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: 'How It Works | Find My Care',
  description: 'Find My Care',
}

export default function page() {
  return (
    <main>
        <HStack as='header' className={cn("relative min-h-96 w-full after:bg-slate-800 overflow-clip", styles.hero)}>
            <HStack className={cn("w-[300%] absolute top-0 left-0 h-full grid grid-cols-3 -z-10", styles.carousel)}>
                <div className="w-full h-full relative">
                    <Image src='/images/how-it-works-1.webp' fill alt='Carousel Image 1' className="object-cover object-top"/>
                </div>
                <div className="w-full h-full relative">
                    <Image src='/images/how-it-works-2.webp' fill alt='Carousel Image 2' className="object-cover object-top"/>
                </div>
                <div className="w-full h-full relative">
                    <Image src='/images/how-it-works-3.webp' fill alt='Carousel Image 3' className="object-cover object-top"/>
                </div>
            </HStack>
            <VStack className="text-white gap-[14px] self-center w-full max-w-7xl mx-auto px-3">
                <Heading className="capitalize text-[40px] text-white font-medium max-w-[710px] max-sm:text-[32px] leading-tight max-[450px]:text-28 max-[420px]:text-25 headingText" as='h1'>
                    Revolutionising the quality of our services and ensuring top <b>customer satisfaction</b>
                </Heading>
                <p className="text-xl max-w-[710px] subHeading">
                    You can see what our business has to offer by checking down below or by watching a short demonstration clip
                </p>
            </VStack>
        </HStack>
    </main>
  )
}
