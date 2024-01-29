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

export default function page() {
  return (
    <VStack className={styles.faqWrapper}>
        <VStack as="header" className={styles.heading}>
            <Heading className="text-base bg-slate-300/60 rounded-lg p-2 text-opacity-70 leading-none font-semibold self-center">
                FAQ
            </Heading>
            <Heading className="text-center text-5xl mt-2 font-bold text-slate-50" fontFamily="Inter" >
                Frequently asked questions.
            </Heading>
            <Paragraph variant="white" className="text-opacity-80 text-center max-w-4xl text-lg mt-3 leading-tight mx-auto">
                Welcome to our FAQ page! We've compiled a list of commonly asked questions to provide with quick and informative answers
            </Paragraph>
        </VStack>
        <section id="faq" about="FAQ" className="grid grid-cols-2 grow">
             <VStack className="bg-slate-100/5 p-8 pb-4 shadow-md items-center rounded-lg max-w-[80%] mx-auto place-self-start mt-8">
                <Heading className="text-2xl font-bold text-center">
                    Still have questions?
                </Heading>
                <Paragraph className="text-sm text-slate-600 leading-snug mt-4 text-center px-3">
                    You can submit your question or request through our contact form. Please provide as much details possible so that we can assist you effectively
                </Paragraph>
                <Button variant={'secondary'} className="mt-4" asChild>
                    <Link href={'/contact'}>
                        Get In Touch
                    </Link>
                </Button>
             </VStack>
             <VStack>
                <HStack className="justify-center py-4 items-center gap-2">
                    <MessageCircleQuestion />
                    <Heading className="text-2xll text-center text-slate-800 font-medium">
                        Common questions:
                    </Heading>
                </HStack>
                <FaqAccordion />
             </VStack>
        </section>
    </VStack>
  )
}