import VStack from "@/shared/ui/Flex/VStack";
import styles from './faq.module.css'
import Heading from "@/shared/ui/Heading";
import Paragraph from "@/shared/ui/Paragraph";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqElements } from "./(config)/faqElements";
import FaqElem from "./(ui)/FaqElem";
import FaqAccordion from "./(ui)/FaqAccordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MessageCircleQuestion } from "lucide-react";
import HStack from "@/shared/ui/Flex/HStack";
import { cn } from "@/shared/lib/utils";

export default function page() {
  return (
    <VStack className={styles.faqWrapper} as='main'>
        <VStack as="header" className={styles.heading}>
            <Heading className="text-base bg-slate-300/60 rounded-lg p-2 text-opacity-70 leading-none font-semibold self-center headingText">
                FAQ
            </Heading>
            <Heading className="max-sm:text-4xl text-center text-5xl mt-2 font-bold text-slate-50 headingText" fontFamily="Inter" >
                Frequently asked questions.
            </Heading>
            <Paragraph variant="white" className="max-sm:text-base text-opacity-80 text-center max-w-4xl text-lg mt-3 leading-tight mx-auto subHeading">
                Welcome to our FAQ page! We've compiled a list of commonly asked questions to provide with quick and informative answers
            </Paragraph>
        </VStack>
        <section id="faq" about="FAQ" className="grow px-3 max-w-6xl mx-auto w-full pb-12">
             <VStack>
                <HStack className="justify-center py-4 items-center gap-2">
                    <MessageCircleQuestion />
                    <Heading className="text-2xll text-center text-slate-800 font-medium">
                        Common questions:
                    </Heading>
                </HStack>
                <FaqAccordion />
             </VStack>
             <VStack className="bg-slate-100/5 p-4 min-[520px]:p-6 sm:p-8 pb-4 shadow-md border border-slate-600/5 items-center rounded-lg mx-auto mt-12">
                <Heading className={cn("text-xl min-[520px]:text-2xl font-bold text-center", 'text-anim')}>
                    Still have questions?
                </Heading>
                <Paragraph className={cn("text-xs min-[520px]:text-sm text-slate-600 leading-snug mt-4 text-center px-3", 'text-anim')}>
                    You can submit your question or request through our contact form. Please provide as much details possible so that we can assist you effectively
                </Paragraph>
                <Button variant={'secondary'} className={cn("mt-4", styles.cardContent)} asChild>
                    <Link href={'/contact'}>
                        Get In Touch
                    </Link>
                </Button>
             </VStack>
        </section>
    </VStack>
  )
}
