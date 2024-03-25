import { cn } from "@/shared/lib/utils";
import HStack from "@/shared/ui/Flex/HStack";
import Image from "next/image";
import styles from './About.module.css'
import Heading from "@/shared/ui/Heading";
import VStack from "@/shared/ui/Flex/VStack";
import { Remarkable } from 'remarkable'
import { readFileSync } from "fs";
import path from "path";

const md = new Remarkable();

export default function About() {
    const aboutUs = readFileSync(path.resolve(process.cwd(), 'public', 'markdowns', 'about-us.md'), 'utf-8')
    const raw = md.render(aboutUs);
  return (
    <main>
        <HStack as='header' className={cn("relative h-96 w-full after:bg-slate-800", styles.hero)}>
            <Image src='/images/about-header.webp' fill alt='Nurse' className="object-cover object-top -z-10"/>
            <VStack className="text-white gap-[14px] self-center w-full max-w-7xl mx-auto px-3">
                <Heading className="capitalize text-[40px] text-white font-medium headingText" as='h1'>
                    About <b>First City</b>
                </Heading>
                <p className="lg:text-xl text-base max-w-[710px] subHeading">
                    Your support, your way, we at First City Care Group will ensure that all your care and needs will be met, our services are all well looked after and highly rated so you won’t need to question if we are right for you. We don’t just offer our services to the elderly but to all age group from young kids, to teenagers, to young adult and older adults
                </p>
            </VStack>
        </HStack>
        <VStack as='section' className="my-20 max-w-7xl px-3 lg:flex-row gap-[5%] mx-auto">
            <VStack className="lg:min-w-[560px] lg:w-[50%]">
                <span className="text-secondary uppercase tracking-[10%] text-xl text-anim">
                    About us
                </span>
                <VStack className="[&>h2]:capitalize [&>h2]:text-4xl [&>h2]:text-slate-800 [&>h2]:font-medium [&>h2]:mb-3 [&>h2]:mt-7 gap-2 inner-text-anim" dangerouslySetInnerHTML={{
                    __html: raw
                }} />
            </VStack>
            <div className={cn("relative w-full", styles.imageWrapper)}>
                <Image src='/images/nurse-old-woman-looking-window.jpg' fill alt='Nurse and old woman are looking to window' className="object-contain"/>
            </div>
        </VStack>
    </main>
  )
}
