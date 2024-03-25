'use client'

import { ReactNode, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname } from 'next/navigation';

interface AnimationWrapperProps {
  children: ReactNode
}

export default function AnimationWrapper({ children }: AnimationWrapperProps) {
    const location = usePathname()
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const animElems = document.querySelectorAll('.text-anim') as NodeListOf<HTMLElement>
    animElems.forEach((elem) => {
        gsap.fromTo(elem, { autoAlpha: 0, yPercent: 100 }, {
                autoAlpha: 1, opacity: 1, yPercent: 0,
                duration: 0.5, scrollTrigger: {
                    trigger: elem,
                    start: "top bottom-=80",
                    toggleActions: "play none none none",
                }
            })
    })
    const innerAnimElems = document.querySelectorAll('.inner-text-anim *') as NodeListOf<HTMLElement>
    innerAnimElems.forEach((elem) => {
        gsap.fromTo(elem, { autoAlpha: 0, yPercent: 100 }, {
                autoAlpha: 1, opacity: 1, yPercent: 0,
                duration: 0.5, scrollTrigger: {
                    trigger: elem,
                    start: "top bottom-=80",
                    toggleActions: "play none none none",
                }
            })
    })
  }, [location])

  return children
}
