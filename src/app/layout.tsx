import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/widgets/Nav/ui/Nav'
import { cn } from '@/shared/lib/utils'
import NavMobile from '@/widgets/Nav/ui/NavMobile'
import { detectMobileServer } from '@/shared/lib/DetectMobileServer'
import styles from './mainPage.module.css'
import AnimationWrapper from '@/widgets/AnimationWrapper'

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
      <body className={cn(inter.className, 'overflow-x-hidden', height)}>
        <div className={cn(styles.progress, 'bg-secondary')} />
        {isMobile ? <NavMobile /> : <Nav />}
        <AnimationWrapper>{children}</AnimationWrapper>
        <div className='bg-primary h-96 mt-6'>

        </div>
      </body>
    </html>
  )
}
