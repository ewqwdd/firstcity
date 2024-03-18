import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react"

export type FlexProps <C extends ElementType> = {
    children?: ReactNode
    className?: string
    as?: C
} & ComponentPropsWithoutRef<C>