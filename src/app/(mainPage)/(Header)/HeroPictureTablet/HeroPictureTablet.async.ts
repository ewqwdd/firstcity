import { lazy } from "react";

const HeroPictureTabletAsync = lazy(async() => await import('./HeroPictureTablet'))

export default HeroPictureTabletAsync