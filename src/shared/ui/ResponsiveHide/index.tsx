'use client'

import { useScreen } from "@/shared/hooks/useScreen"
import { ReactNode } from "react"

interface ResponsiveHideProps {
    children?: ReactNode
    breakpoint: number
    hideUnderBreakpoint?: boolean
    fallback?: ReactNode
}

export default function ResponsiveHide({breakpoint, children, hideUnderBreakpoint, fallback}: ResponsiveHideProps) {
    const width = useScreen()
    if (!width) {
        return fallback ?? null
    }
    if (hideUnderBreakpoint && width <= breakpoint) {
        return null
    } else if (!hideUnderBreakpoint && width >= breakpoint) {
        return null
    }
    return children
}
