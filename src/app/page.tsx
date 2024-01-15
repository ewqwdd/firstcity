import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import HStack from "@/shared/ui/Flex/HStack";
import VStack from "@/shared/ui/Flex/VStack";
import Heading from "@/shared/ui/Heading";
import { Orbit } from "@/shared/ui/Orbit";
import Paragraph from "@/shared/ui/Paragraph";
import CardsCarousel from "@/widgets/CardsCarousel/ui/CardsCarousel";
import { Search } from "lucide-react";
import Image from "next/image";
import styles from './mainPage.module.css'

export default function Home() {
  return (
    <VStack className="">
      <HStack className={styles.heading}>
        <div className={styles.blob}>
          <Image alt="Person sitting on the chair." src='/images/person_sitting.png' fill objectFit='cover'/>
        </div>
        <VStack className="m-auto gap-6">
          <Paragraph fontFamily="Salsa" className="text-slate-400 text-xl">
            Finding care simplified
          </Paragraph>
          <HStack className="text-slate-100">
            <Heading className="text-6xl font-bold leading-8 text-slate-100">
              Find my care
            </Heading>
            <Orbit right={-8}>
            <Search className="h-16 w-16 ml-6"/>
            </Orbit>
          </HStack>
          <Paragraph className="text-slate-300">
            Ut amet id quis irure reprehenderit. Elit magna cupidatat elit sint laborum elit do fugiat consectetur dolor excepteur aute. Qui eu nisi eu mollit nulla nisi magna do voluptate non dolor enim non. Veniam ex duis fugiat magna. Ut dolore anim elit dolor velit. Consectetur aliqua ipsum cupidatat commodo Lorem.
          </Paragraph>
        </VStack>
      </HStack>
      
      <VStack className="gap-0 items-center">
        
      </VStack>
        <CardsCarousel />
        <Input className="self-center w-44"/>
    </VStack>
  )
}
