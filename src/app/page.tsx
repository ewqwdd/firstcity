import CardsCarousel from "@/widgets/CardsCarousel/ui/CardsCarousel";
import Header from "./(mainPage)/(Header)/Header";
import Features from "./(mainPage)/(Features)/Features";
import styles from './mainPage.module.css'
import { ConditionalRender } from "@/widgets/Testimonials";
import { getSheetValues } from "@/shared/lib/api/getTestimonials";
import { sheets_v4 } from "googleapis";
import { Suspense } from "react";
import CardsCarouselAsync from "@/widgets/CardsCarousel/ui/CardsCarousel.async";
import Loader from "@/shared/ui/Loader";

interface Forward {
  data?: sheets_v4.Schema$ValueRange['values']
  err?: unknown
}

export const revalidate = 3600

export default async function Home() {

  const data = await getSheetValues()
  let forward: Forward = {}
  if (data.status === 200 && data.data.values) {
    forward.data = data.data.values
  } else if (data.status === 500) {
    forward.err = data.data
  }

  return (
    <>
      <div className={styles.heroGrid}>
        <Header />
        <Suspense fallback={<Loader />}>
          <CardsCarouselAsync />
        </Suspense>
      </div>
      <Features />
      <section className="overflow-clip px-3 mt-6" id='testimonials' style={{
        maxWidth: '100dvw'
      }}>
        <h2 className="text-4xl text-slate-900 text-center font-semibold">
          Testimonials
        </h2>
        <p className="text-slate-900/80 text-center max-w-screen-sm mx-auto my-6 block">
          We put a lot of our attention towards making sure that not only you receive the best treatment possible here at First City but also our employees
        </p>
        <ConditionalRender {...forward} />
      </section>
    </>
  )
}
