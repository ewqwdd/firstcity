import VStack from '@/shared/ui/Flex/VStack'
import Aside from './(ui)/Aside'
import MainContent from './(ui)/MainContent'
import ResponsiveHide from '@/shared/ui/ResponsiveHide'
import ContactCard from './(ui)/ContactCard'
import Loader from '@/shared/ui/Loader'
import HStack from '@/shared/ui/Flex/HStack'
import { Metadata } from 'next/types'

export const metadata: Metadata = {
  title: 'Contact Us | Find My Care',
  description: 'Find My Care',
}

export default function page() {
  return (
    <VStack as='main' className="max-w-7xl max-lg:gap-4 flex-col-reverse md:grid lg:grid-cols-3 grid-cols-5 mx-auto mt-4 text-slate-800 px-3">
      <Aside />
      <MainContent />
      <ResponsiveHide
        breakpoint={768}
        fallback={
          <HStack className="h-[143px] justify-center items-center">
            <Loader />
          </HStack>
        }
      >
        <ContactCard />
      </ResponsiveHide>
    </VStack>
  )
}
