import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/widgets/Nav/ui/Nav'
import { cn } from '@/shared/lib/utils'
import NavMobile from '@/widgets/Nav/ui/NavMobile'
import { detectMobileServer } from '@/shared/lib/DetectMobileServer'
import styles from './mainPage.module.css'
import AnimationWrapper from '@/widgets/AnimationWrapper'
import HStack from '@/shared/ui/Flex/HStack'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Find My Care',
  description: 'Find My Care',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isMobile = detectMobileServer()
  const height = isMobile ? styles.navHeightMobile : styles.navHeight
  return (
    <html lang="en">
      <body className={cn(inter.className, 'overflow-x-clip', height)}>
        <div className={cn(styles.progress, 'bg-secondary')} />
        {isMobile ? <NavMobile /> : <Nav />}
        <AnimationWrapper>{children}</AnimationWrapper>
        <HStack
          as="footer"
          className="bg-primary pb-9 pt-11 mt-8 w-full"
        >
          <HStack className="justify-around text-sm mx-auto w-full max-w-7xl px-3 max-sm:flex-col max-sm:gap-3 items-center">
            <Link href="/documentation" className="underline text-white/80">
              Documentation page
            </Link>
            <Link href={'/'} className="underline text-white">
              @ First City Care Group
            </Link>
            <div className="text-white/80">
              <span>Keep up to date with us by following us:</span>
            </div>
          </HStack>
        </HStack>
      </body>
    </html>
  )
}
