import { Input } from "@/components/ui/input";
import CardsCarousel from "@/widgets/CardsCarousel/ui/CardsCarousel";
import Header from "./(mainPage)/(Header)/Header";
import Features from "./(mainPage)/(Features)/Features";

export default function Home() {
  return (
    <>
      <Header />
      <CardsCarousel />
      <Features />
    </>
  )
}
