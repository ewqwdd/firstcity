'use client'

import { useScreen } from "@/shared/hooks/useScreen"
import HeroPictureDesktopAsync from "./HeroPictureDesktop/HeroPictureDesktop.async"
import HeroPictureMobileAsync from "./HeroPictureMobile/HeroPictureMobile.async"

export default function ConditionalRender() {
    const width = useScreen()
    
    if (Number(width) > 520) return <HeroPictureDesktopAsync />
    else return <HeroPictureMobileAsync />
}
