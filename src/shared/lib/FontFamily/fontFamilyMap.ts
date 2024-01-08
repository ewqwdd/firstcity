import { NextFont } from "next/dist/compiled/@next/font"
import { Inter, Roboto_Mono, Salsa } from "next/font/google"

export type FontFamily = 'Salsa' | 'Inter' | 'Roboto-mono'

const robotoMono = Roboto_Mono({subsets: ['latin']})
const inter = Inter({subsets: ['latin']})
const salsa = Salsa({weight: "400", subsets: ['latin']})

export const fontFamilyMapper: Record<FontFamily, NextFont> = {
    Inter: inter,
    "Roboto-mono": robotoMono,
    "Salsa": salsa,
}