import HStack from '@/shared/ui/Flex/HStack'
import VStack from '@/shared/ui/Flex/VStack'
import Paragraph from '@/shared/ui/Paragraph'
import Image from 'next/image'
import Heading from '@/shared/ui/Heading'
import { Search } from 'lucide-react'
import { Orbit } from '@/shared/ui/Orbit'
import { Button } from '@/components/ui/button'
import styles from './Header.module.css'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

export default function Header() {
  return (
    <HStack className={'bg-FMC_primary'} as="header" id="header">
      <div className={cn(styles.heading, 'max-w-7xl mx-auto gap-2')}>
        <div className={styles.blob}>
          <Image
            alt="Person sitting on the chair."
            src="/images/person_sitting.png"
            fill
            className="object-cover z-0"
          />
        </div>
        <VStack className="m-auto gap-0 lg:gap-6 lg:max-w-[570px] lg:ml-0 max-lg:px-3 max-lg:items-center max-lg:my-0">
          <Paragraph
            fontFamily="Salsa"
            className="text-slate-400 text-xl max-lg:order-2 max-[520px]:mt-3"
          >
            Finding care simplified
          </Paragraph>
          <HStack className="text-slate-100 max-lg:order-1">
            <Heading className="sm:text-6xl min-[540px]:text-[50px] min-[360px]:text-[44px] text-[32px] max-lg:leading-none font-bold leading-8 text-slate-100 max-[520px]:mt-6 max-lg:mt-4">
              Find my care
            </Heading>
            <Orbit right={-8}>
              <Search className="sm:h-16 sm:w-16 min-[540px]:w-12 min-[540px]:h-12 h-9 w-9 min-[540px]:ml-6 ml-2" />
            </Orbit>
          </HStack>
          <Paragraph className="text-slate-300 max-lg:order-3 max-[420px]:px-0 max-lg:max-w-3xl max-[520px]:px-3 max-lg:px-6 max-lg:mt-6 max-[520px]:text-center">
            Ut amet id quis irure reprehenderit. Elit magna cupidatat elit sint
            laborum elit do fugiat consectetur dolor excepteur aute.
          </Paragraph>
          <HStack className="lg:gap-4 max-lg:justify-between max-lg:self-stretch text-slate-200 max-lg:order-4 max-lg:mt-5 max-lg:px-6 max-[520px]:flex-col max-[520px]:items-center max-[520px]:gap-4">
            <Button
              asChild
              variant={'secondary'}
              className="text-white py-7 font-medium text-xl w-52"
              size={'lg'}
            >
              <Link href={'/auth'}>Get Started!</Link>
            </Button>
            <Button
              variant={'ghost'}
              className="text-xl py-7 hover:bg-slate-100/10 hover:text-slate-50 max-[520px]:bg-slate-700/50  w-52"
              size={'lg'}
            >
              How it works?
            </Button>
          </HStack>
        </VStack>
      </div>
    </HStack>
  )
}
