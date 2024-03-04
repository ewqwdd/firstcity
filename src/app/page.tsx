import CardsCarousel from "@/widgets/CardsCarousel/ui/CardsCarousel";
import Header from "./(mainPage)/(Header)/Header";
import Features from "./(mainPage)/(Features)/Features";
import styles from './mainPage.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.heroGrid}>
        <Header />
        <CardsCarousel />
      </div>
      <Features />
    </>
  )
}
