import Paragraph from "@/shared/ui/Paragraph";
import { CardMainPageProps } from "../ui/CardMainPage";

export const CarouselItemsList: CardMainPageProps[] = [
    {
    title: 'How it Works?',
    description: 'Discover the process in detail',
    content: <Paragraph className="text-anim">Understand exactly how it works</Paragraph>,
    link: {
      href: '/how-it-works',
      label: 'Read more',
    },
  },
  {
    title: 'About Us',
    description: 'Learn more about what we do',
    content: <Paragraph className="text-anim">Understand what we have to offer</Paragraph>,
    link: {
      href: '/about',
      label: 'Read more',
    },
  },
  {
    title: 'Testimonials',
    description: 'Explore feedback from our valued customers',
    content: <Paragraph className="text-anim">See what our customers say about us</Paragraph>,
    link: {
      href: '#testimonials',
      label: 'Read more',
    },
  },
  {
    title: 'Contact Us',
    description: 'Reach out to us with your inquiries or concerns',
    content: <Paragraph className="text-anim">Contact us if you have any enquiries or any concerns</Paragraph>,
    link: {
      href: '/contact-us',
      label: 'Read more',
    },
  },
  {
    title: 'Documents',
    description: 'Access official documents and contracts',
    content: <Paragraph className="text-anim">Find all official documents and contracts</Paragraph>,
    link: {
      href: '/documentation',
      label: 'Read more',
    },
  },
];