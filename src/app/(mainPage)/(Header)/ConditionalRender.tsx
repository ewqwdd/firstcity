'use client'

import { useScreen } from "@/shared/hooks/useScreen"
import HeroPictureDesktopAsync from "./HeroPictureDesktop/HeroPictureDesktop.async"
import HeroPictureTabletAsync from "./HeroPictureTablet/HeroPictureTablet.async"
import HeroPictureMobileAsync from "./HeroPictureMobile/HeroPictureMobile.async"

export default function ConditionalRender() {
    const width = useScreen()
    if (!width) return null
    if (Number(width) > 1024) return <HeroPictureDesktopAsync />
    else if (Number(width) > 640) return <HeroPictureTabletAsync />
    else return <HeroPictureMobileAsync />
}
