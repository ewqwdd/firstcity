import { Input } from "@/components/ui/input";
import VStack from "@/shared/ui/Flex/VStack";
import CardsCarousel from "@/widgets/CardsCarousel/ui/CardsCarousel";
import styles from './mainPage.module.css'
import Header from "./(mainPage)/(Header)/Header";

export default function Home() {
  return (
    <>
      <Header />
      <CardsCarousel />
      <Input className="self-center w-44"/>
      
    </>
  )
}
