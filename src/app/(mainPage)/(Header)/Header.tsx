import HStack from "@/shared/ui/Flex/HStack";
import VStack from "@/shared/ui/Flex/VStack";
import Paragraph from "@/shared/ui/Paragraph";
import Image from "next/image";
import Heading from "@/shared/ui/Heading";
import { Search } from "lucide-react";
import { Orbit } from "@/shared/ui/Orbit";
import { Button } from "@/components/ui/button";
import styles from './Header.module.css'
import Link from "next/link";
import { cn } from "@/shared/lib/utils";

export default function Header() {
  return (
    <HStack className={'bg-FMC_primary'} as='header' id="header">
      <div className={cn(styles.heading, 'max-w-7xl mx-auto gap-2')}>
        <div className={styles.blob}>
          <Image alt="Person sitting on the chair." src='/images/person_sitting.png' fill className="object-cover z-0"/>
        </div>
          <VStack className="m-auto gap-0 lg:gap-6 lg:max-w-[570px] lg:ml-0 max-lg:px-3 max-lg:items-center max-lg:my-0">
            <Paragraph fontFamily="Salsa" className="text-slate-400 text-xl max-lg:order-2">
              Finding care simplified
            </Paragraph>
            <HStack className="text-slate-100 max-lg:order-1">
              <Heading className="text-6xl max-lg:leading-none font-bold leading-8 text-slate-100">
                Find my care
              </Heading>
              <Orbit right={-8}>
              <Search className="h-16 w-16 ml-6"/>
              </Orbit>
            </HStack>
            <Paragraph className="text-slate-300 max-lg:order-4 max-lg:max-w-3xl max-lg:px-6 max-lg:mt-6">
              Ut amet id quis irure reprehenderit. Elit magna cupidatat elit sint laborum elit do fugiat consectetur dolor excepteur aute. Qui eu nisi eu mollit nulla nisi magna do voluptate non dolor enim non. Veniam ex duis fugiat magna. Ut dolore anim elit dolor velit. Consectetur aliqua ipsum cupidatat commodo Lorem.
            </Paragraph>
            <HStack className="gap-4 text-slate-200 max-lg:order-3 max-lg:mt-5">
              <Button asChild variant={'secondary'} className="text-slate-800 font-medium text-lg" size={'lg'}>
                <Link href={'/auth'}>
                  Get Started!
                </Link>
              </Button>
              <Button variant={'ghost'} className="text-lg hover:bg-slate-100/10 hover:text-slate-50" size={'lg'}>
                How it works?
              </Button>
            </HStack>
          </VStack>
        </div>
      </HStack>
  )
}
