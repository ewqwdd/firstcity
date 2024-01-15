import Paragraph from "@/shared/ui/Paragraph";
import { CardMainPageProps } from "../ui/CardMainPage";

export const CarouselItemsList: CardMainPageProps[] = [
    {
        content: <Paragraph>Understand exactly everything that we do</Paragraph>,
        description: 'Our Values',
        link: {
            href: '/',
            label: 'Read more'
        },
        title: 'Home'
    },
    {
        content: <Paragraph>Understand what we have to offer</Paragraph>,
        description: 'What we do',
        link: {
            href: '/about',
            label: 'Read more'
        },
        title: 'About'
    },
    {
        content: <Paragraph>See how you could afford our services</Paragraph>,
        description: 'What we offer and how it works',
        link: {
            href: '/services',
            label: 'Read more'
        },
        title: 'Services'
    },
    {
        content: <Paragraph>Contact us if you have any enquiries or any concerns</Paragraph>,
        description: 'Give us a call',
        link: {
            href: '/contact-us',
            label: 'Read more'
        },
        title: 'Contact'
    },
    {
        description: 'Payment methods and how it works',
        link: {
            href: '/services',
            label: 'Read more'
        },
        title: 'Services'
    }
]