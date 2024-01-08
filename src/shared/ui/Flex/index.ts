import { Color } from "@/shared/lib/Colors/colors"
import { ReactNode } from "react"

type Align = 'center' | 'start' | 'end' | 'stretch'
type Justify = 'center' | 'between' | 'around' | 'between'

export const textMap: Record<Color, Color> = {
    blue: "gray",
    cyan: 'gray',
    gray: 'blue',
    primary: 'gray',
    secondary: 'gray'
}

export interface FlexProps {
    align?: Align
    justify?: Justify
    color?: Color
    gap?: number
    children: ReactNode
    className?: string
}