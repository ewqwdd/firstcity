import { lazy } from "react";

const HeroPictureMobileAsync = lazy(async() => await import('./HeroPictureMobile'))

export default HeroPictureMobileAsync