import HStack from "@/shared/ui/Flex/HStack";
import VStack from "@/shared/ui/Flex/VStack";
import Paragraph from "@/shared/ui/Paragraph";
import Image from "next/image";
import Heading from "@/shared/ui/Heading";
import { Search } from "lucide-react";
import { Orbit } from "@/shared/ui/Orbit";
import { Button } from "@/components/ui/button";
import styles from './Header.module.css'

export default function Header() {
  return (
    <HStack className={styles.heading} as='header'>
        <div className={styles.blob}>
          <Image alt="Person sitting on the chair." src='/images/person_sitting.png' fill objectFit='cover'/>
        </div>
        <VStack className="m-auto gap-6 max-w-[570px] ml-0">
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
          <HStack className="gap-4 text-slate-200">
            <Button variant={'secondary'} className="text-slate-800 font-medium text-lg" size={'lg'}>
              Get Started!
            </Button>
            <Button variant={'ghost'} className="text-lg hover:bg-slate-100/10 hover:text-slate-50" size={'lg'}>
              Learn More
            </Button>
          </HStack>
        </VStack>
      </HStack>
  )
}
