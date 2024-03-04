import { ReactNode } from "react"

interface LinkElement {
    href: string
    label: string | ReactNode
}

export const linksList: LinkElement[] = [
    {
        href: '/how-it-works',
        label: 'How it works'
    },
    {
        href: '/about',
        label: 'About'
    },
    {
        href: '/faq',
        label: 'FAQ'
    },
]