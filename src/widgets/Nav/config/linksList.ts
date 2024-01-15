import { ReactNode } from "react"

interface LinkElement {
    href: string
    label: string | ReactNode
}

export const linksList: LinkElement[] = [
    {
        href: '/',
        label: 'Home'
    },
    {
        href: '/about',
        label: 'About'
    },
    {
        href: '/services',
        label: 'Services'
    },
    {
        href: '/contact-us',
        label: 'Contact us'
    }
]