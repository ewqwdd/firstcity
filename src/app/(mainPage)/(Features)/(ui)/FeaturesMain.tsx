import styles from '../Features.module.css'
import { cn } from '@/shared/lib/utils'
import HStack from '@/shared/ui/Flex/HStack'
import VStack from '@/shared/ui/Flex/VStack'
import Heading from '@/shared/ui/Heading'
import Paragraph from '@/shared/ui/Paragraph'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { features } from '../(config)'

export default function FeaturesMain() {
  return (
    <VStack className="justify-center md:max-lg:col-span-2">
        <Heading
          as="h2"
          className="text-primary text-3xl font-semibold text-center"
        >
          Why choose us?
        </Heading>
        <VStack as="ul" className={'gap-6 max-[420px]:gap-6 mt-6 font-medium max-md:pl-3'}>
          {features.map((elem, index) => (
            <HStack key={index} as="li" className={cn("gap-4 items-center group relative",  'parent', styles.featureWrapper)}>
              {elem.icon}
              <Paragraph className={cn("text-slate-700 max-[420px]:text-sm max-[320px]:text-xs", styles.feature)}>{elem.text}</Paragraph>
            </HStack>
          ))}
        </VStack>
        <Button
          variant={'secondary'}
          asChild
          className="w-1/2 self-center mt-4 text-xl"
        >
          <Link href={'/how-it-works'}>Learn More</Link>
        </Button>
      </VStack>
  )
}
