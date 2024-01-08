import { ClassNames } from "@/shared/lib/ClassNames/ClassNames"
import { Color } from "@/shared/lib/Colors/colors"
import { textColorMap } from "@/shared/lib/Colors/textColor"
import { ReactNode } from "react"

export type TextSize = 'sm' | 'base' | 'lg' | 'xl' | '2xl'
type Weight = 'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'

export type ParagraphProps <C extends React.ElementType> = {
    color?: Color
    size?: TextSize
    className?: string
    children: ReactNode
    weight?: Weight
    as?: C
} & React.ComponentPropsWithoutRef<C>

export default function Paragraph<C extends React.ElementType>({className, color = 'primary', size = 'base', children, weight = 'normal', as}: ParagraphProps<C>) {
    const Component = as || "p";
    
    return (
        <p className={ClassNames(className, {}, [`font-${size} font-${weight}`, textColorMap(color)])}>
            {children}
        </p>
    )
}