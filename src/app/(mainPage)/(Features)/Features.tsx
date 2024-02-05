import { BookHeart, Cross, HeartHandshake, Salad, UsersRound } from "lucide-react";
import styles from './Features.module.css'
import { cn } from "@/shared/lib/utils";
import HStack from "@/shared/ui/Flex/HStack";
import VStack from "@/shared/ui/Flex/VStack";
import Heading from "@/shared/ui/Heading";
import Paragraph from "@/shared/ui/Paragraph";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Features() {
  return (
    <section id='Features' className="px-3  mx-auto max-w-7xl grid grid-cols-2 min-h-72">
        <HStack className="relative aspect-square justify-center items-center pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full animate-spin  max-h-full" style={{
                animationDuration: '10s'
            }}>
                <HeartHandshake className={cn("absolute w-1/5 h-1/5 text-secondary top-[5%] left-[40%]", styles.spin)} />
                <BookHeart className={cn("absolute w-1/5 h-1/5 text-secondary top-[40%] left-[5%]", styles.spin)} />
                <Salad className={cn("absolute w-1/5 h-1/5 text-secondary bottom-[5%] left-[40%]", styles.spin)} />
                <UsersRound className={cn("absolute w-1/5 h-1/5 text-secondary top-[40%] right-[5%]", styles.spin)} />
            </div>
            <div className="absolute w-1/3 h-1/3 border-2 rounded-full border-secondary animate-ping top-[33%] left-[33%]" 
            style={{
                animationDelay: '4s'
            }}/>
            <div className="absolute w-1/4 h-1/4 border-2 rounded-full border-primary animate-ping top-[37.5%] left-[37.5%]" 
            style={{
                animationDelay: '2s'
            }}/>
            <div className="absolute w-1/6 h-1/6 border-2 rounded-full border-secondary animate-ping top-[41.7%] left-[41.7%]" 
            />
            <Cross className="w-1/3 h-1/3 text-primary"/>
        </HStack>
        <VStack className="justify-center">
            <Heading as='h2' className="text-primary text-3xl font-semibold text-center">
                Why choose us?
            </Heading>
            <VStack as='ul' className="gap-6 mt-6 font-medium">
                <HStack as='li' className="gap-4 items-center">
                    <HeartHandshake className="max-w-12 w-full h-full max-h-12 text-secondary"/>
                    <Paragraph className="text-slate-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem expedita tempora nam sunt nobis voluptas eveniet facilis quis fuga. Expedita vitae rerum sit! Sapiente dicta.
                    </Paragraph>
                </HStack>
                <HStack as='li' className="gap-4 items-center">
                    <BookHeart className="max-w-12 w-full h-full max-h-12 text-secondary"/>
                    <Paragraph className="text-slate-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem expedita tempora nam sunt nobis voluptas eveniet facilis quis fuga. Expedita vitae rerum sit! Sapiente dicta.
                    </Paragraph>
                </HStack>
                <HStack as='li' className="gap-4 items-center">
                    <Salad className="max-w-12 w-full h-full max-h-12 text-secondary"/>
                    <Paragraph className="text-slate-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem expedita tempora nam sunt nobis voluptas eveniet facilis quis fuga. Expedita vitae rerum sit! Sapiente dicta.
                    </Paragraph>
                </HStack>
                <HStack as='li' className="gap-4 items-center">
                    <UsersRound className="max-w-12 w-full h-full max-h-12 text-secondary"/>
                    <Paragraph className="text-slate-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem expedita tempora nam sunt nobis voluptas eveniet facilis quis fuga. Expedita vitae rerum sit! Sapiente dicta.
                    </Paragraph>
                </HStack>
            </VStack>
            <Button variant={'secondary'} asChild className="w-1/2 self-center mt-4 text-xl">
                <Link href={'/how-it-works'}>
                    Learn More
                </Link>
            </Button>
        </VStack>
    </section>
  )
}
