import { lazy } from "react";

const CardsCarouselAsync = lazy(async() => import('./CardsCarousel'))

export default CardsCarouselAsync