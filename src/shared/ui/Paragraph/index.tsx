import { FontFamily, fontFamilyMapper } from "@/shared/lib/FontFamily/fontFamilyMap"
import { cn } from "@/shared/lib/utils"
import Link from "next/link"
import { ReactNode } from "react"

export type ParagraphProps <C extends React.ElementType> = {
    children: ReactNode
    variant?: Variants
    className?: string
    fontFamily?: FontFamily
    as?: C
} & React.ComponentPropsWithoutRef<C>

type Variants = 'default' | 'inverted' | 'white' | 'blue'

const variants: Record<Variants, string> = {
    default: 'text-slate-800',
    inverted: 'text-secondary',
    white: 'text-slate-100',
    blue: 'text-FMC_blue'
}

const variantsLink: Record<Variants, string> = {
    default: 'text-slate-700 hover:text-slate-800',
    inverted: 'text-secondary hover:text-orange-500',
    white: 'text-slate-100 hover:text-slate-300',
    blue: 'text-FMC_blue hover:text-FMC_blue/80'
}
const defaultClassNames = 'leading-normal'

export default function Paragraph<C extends React.ElementType = 'p'>({className, fontFamily = 'Inter', children, variant = 'default', as, ...props}: ParagraphProps<C>) {
    const Component = as || "p";
    if (Component === 'a') {
        return (
            <Link href='' {...props} className={cn('transition-all font-medium', defaultClassNames, variantsLink[variant], fontFamilyMapper[fontFamily].className, className)}>
            {children}
        </Link>
        )
    }

    return (
        <Component {...props} className={cn(defaultClassNames, variants[variant], fontFamilyMapper[fontFamily].className, className)}>
            {children}
        </Component>
    )
}