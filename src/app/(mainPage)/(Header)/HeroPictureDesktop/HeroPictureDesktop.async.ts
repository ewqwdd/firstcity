import { lazy } from "react";

const HeroPictureDesktopAsync = lazy(async() => await import('./HeroPictureDesktop'))

export default HeroPictureDesktopAsync