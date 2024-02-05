import { BookHeart, HeartHandshake, Salad, UsersRound } from "lucide-react";
import { ReactNode } from "react";
import styles from '../Features.module.css'
import { cn } from "@/shared/lib/utils";

interface Feature {
    icon: ReactNode
    text: string
}
const stylings = cn("max-w-12 w-full h-full max-h-12 text-secondary group-hover:text-purple-900 max-md:absolute max-md:-top-6 max-md:-left-6 max-md:opacity-30 -z-10 max-md:max-h-20 max-md:max-w-20", styles.shaking)
export const features: Feature[] = [
    {
        icon: <HeartHandshake className={stylings} />,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem expedita tempora nam sunt nobis voluptas eveniet facilis quis fuga. Expedita vitae rerum sit! Sapiente dicta.'
    },
    {
        icon: <BookHeart className={stylings} />,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem expedita tempora nam sunt nobis voluptas eveniet facilis quis fuga. Expedita vitae rerum sit! Sapiente dicta.'
    },
    {
        icon: <Salad className={stylings} />,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem expedita tempora nam sunt nobis voluptas eveniet facilis quis fuga. Expedita vitae rerum sit! Sapiente dicta.'
    },
    {
        icon: <UsersRound className={stylings} />,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem expedita tempora nam sunt nobis voluptas eveniet facilis quis fuga. Expedita vitae rerum sit! Sapiente dicta.'
    }
]
