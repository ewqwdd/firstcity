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
import { Suspense } from 'react'
import ConditionalRender from './ConditionalRender'


export default function Header() {
  return (
    <HStack as="header" id="header">
      <div className={cn(styles.heading, 'max-w-7xl mx-auto height-full leading mt-10 overflow-x-clip gap-6 px-3')}>
        <VStack className='gap-10 [&>*]:max-w-[680px] w-full'>
          <HStack className='relative'>
            <Heading className='text-secondary font-extrabold text-6xl'>
              <span className='max-lg:hidden'>Finding care <br/>simplified.</span>
              <span className='lg:hidden'>Finding care simplified.</span>
            </Heading>
            <Orbit className='lg:size-24 md:size-12 ml-12 max-lg:!absolute max-lg:top-[10%] max-lg:right-[10%]' right={'50%'}>
              <Search className='lg:size-24 md:size-12' />
            </Orbit>
          </HStack>
          <Paragraph className='text-2xl text-slate-400'>
            Ut amet id quis irure reprehenderit. Elit magna cupidatat elit sint laborum elit do fugiat consectetur dolor excepteur aute.
          </Paragraph>
          <HStack className='lg:gap-[8%] gap-4 max-lg:flex-wrap'>
            <Button className='font-medium text-xl py-4 basis-[41%]' variant={'secondary'}>
              CONTACT US
            </Button>
            <Button className='font-medium text-xl py-4 bg-foreground/10 basis-[41%]' variant={'ghost'}>
              HOW IT WORKS?
            </Button>
          </HStack>
        </VStack>
        <Suspense fallback={<div className='lg:w-[480px] w-[360px]' />}>
          <ConditionalRender />
        </Suspense>
      </div>
    </HStack>
  )
}
