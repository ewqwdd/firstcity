import HStack from '@/shared/ui/Flex/HStack'
import VStack from '@/shared/ui/Flex/VStack'
import Heading from '@/shared/ui/Heading'
import Paragraph from '@/shared/ui/Paragraph'
import Image from 'next/image'
import styles from './About.module.css'
import { cn } from '@/shared/lib/utils'
import { Cross, Headphones, HeartPulse } from 'lucide-react'
import ParallaxCrosses from './(ui)/ParallaxCrosses'

export default function About() {
  return (
    <main className="min-h-[200vh] overflow-x-clip">
      <VStack
        as="section"
        className={cn(
          'justify-between',
          styles.parallaxWrapper
        )}
      >
        <VStack className='bg-FMC_primary'>
            <Heading
          as="h1"
          className="uppercase tracking-wider text-5xl text-slate-50 text-center font-bold my-6"
        >
          about us
        </Heading>
        <HStack as="article" className="w-full min-h-[40dvh] max-w-7xl mx-auto pb-4">
          <VStack className={cn('shrink gap-8 justify-center', styles.heading)}>
            <Heading className="text-3xl -mt-[10%] text-slate-100" as="h2">
              Welcome to First City Care Group Swindon
            </Heading>
            <Paragraph className="text-xl text-slate-200/90">
              Your support, your way, we at First City Care Group will ensure
              that all your care and needs will be met, our services are all
              well looked after and highly rated so you won’t need to question
              if we are right for you. We don’t just offer our services to the
              elderly but to all age group from young kids, to teenagers, to
              young adult and older adults
            </Paragraph>
          </VStack>
          <div className={cn('relative min-w-[40%]', styles.headingPicture)}>
            <Image
              fill
              src="/images/image.jpg"
              className="object-contain"
              alt="image"
            />
          </div>
        </HStack>
        </VStack>
        
        <article className="relative -mt-4 px-10 py-20">
          <Heading className="text-slate-700 text-center text-6xl tracking-wide uppercase font-extrabold">
            More than just a care provider
          </Heading>
          <Paragraph
            fontFamily="Salsa"
            className="text-slate-500 text-center text-2xl max-w-[66%] mx-auto mt-6"
          >
            We want to work with you to deliver holistic care solutions that
            enable you to achieve your goals while ensuring your care needs are
            met.
          </Paragraph>
          <ParallaxCrosses />
        </article>
      </VStack>
      <VStack as='section' className='max-w-6xl mx-auto'>
        <Heading as='h2' className='text-4xl uppercase tracking-wide text-center mt-2 mb-8 font-bold text-secondary'>
            Some heading
        </Heading>
            <HStack className={cn('h-[40dvh] grid-cols-2 gap-8', styles.imagesWrapper)}>
                <div className={cn('relative w-full', styles.imageAnimated)}>
                <Image
                    fill
                    src="/images/image.jpg"
                    className="object-contain object-right"
                    alt="image"
                    />
                    </div>
                <div className={cn('relative w-full', styles.imageAnimated)}>

                <Image
                    fill
                    src="/images/image.jpg"
                    className="object-contain object-left"
                    alt="image"
                    />
                    </div>
            </HStack>
            <Paragraph className='text-center font-medium mt-6 px-12 text-xl mb-16'>
                We are currently actively working with technology providers, community organisations and other community care providers to develop a more reactive model of community care that can flex based on your day-to-day needs. We are keen to involve the people we support in this work, and you can find out more about getting involved here
            </Paragraph>
      </VStack>
      <VStack as='section' className='bg-primary'>
        <Heading as='h2' className='text-4xl uppercase tracking-wide text-center mt-2 mb-8 font-bold text-slate-50'>
            Some heading
        </Heading>
            <VStack as='article' className='max-w-7xl grid grid-cols-2 mx-auto h-[50svh]'>
                <figure className='relative'>
                    <Headphones className="absolute size-[70%] text-pink-400" />
                    <HeartPulse className="absolute size-[70%] text-purple-400 right-0 bottom-0" />
                </figure>
                <Paragraph className='text-slate-100 py-10 text-xl'>
                    First City Care Group is responsive and flexible based on what you need. We offer 24 hours, on-call solutions to ensure you can contact us in the event of things going wrong and a team that is dedicated to working with you to create imaginative care solutions that meet your needs and your lifestyle.
                </Paragraph>
            </VStack>
      </VStack>
    </main>
  )
}
