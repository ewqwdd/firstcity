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

export default function Home() {
  return (
    <VStack className="gap-4">
      <div className="w-44 h-44 relative rounded-full overflow-clip self-center pointer-events-none">
        <Image alt="Person sitting on the chair." src='/images/person_sitting.png' fill objectFit='cover'/>
      </div>
      <VStack className="gap-0 items-center">
        <HStack className="justify-center">
          <Heading className="text-3xl font-bold leading-8">
            Find my care
          </Heading>
          <Orbit right={-4}>
          <Search className="h-7 w-7 ml-2"/>

          </Orbit>
        </HStack>
        <Paragraph fontFamily="Salsa" className="text-slate-600">
          Finding care simplified
        </Paragraph>
      </VStack>
        <CardsCarousel />
        <HStack className="items-center">
          <Button variant={"default"}>
            Button
          </Button>
          <Button variant={"destructive"}>
            Button
          </Button>
          <Button variant={"ghost"}>
            Button
          </Button>
          <Button variant={"outline"}>
            Button
          </Button>
          <Button variant={"secondary"}>
            Button
          </Button>
          <Button variant={"transparent"}>
            Button
          </Button>
        </HStack>
        <Input className="self-center w-44"/>
    </VStack>
  )
}
