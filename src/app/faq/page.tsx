import VStack from "@/shared/ui/Flex/VStack";
import styles from './faq.module.css'
import Heading from "@/shared/ui/Heading";
import Paragraph from "@/shared/ui/Paragraph";

export default function page() {
  return (
    <VStack>
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
        <section id="faq" about="FAQ" className="grid grid-cols-2">

        </section>
    </VStack>
  )
}
