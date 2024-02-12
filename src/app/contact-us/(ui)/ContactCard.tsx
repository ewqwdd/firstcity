import VStack from '@/shared/ui/Flex/VStack'
import Heading from '@/shared/ui/Heading'
import Paragraph from '@/shared/ui/Paragraph'
import { Headphones } from 'lucide-react'
import React, { memo } from 'react'
import { twMerge } from 'tailwind-merge'

interface ContactCardProps {
    className?: string
}

export default memo(function ContactCard({className}: ContactCardProps) {
  return (
    <VStack className={twMerge("p-4 rounded-lg bg-primary/20 border-2 border-slate-800/60 group parent", className)}>
      <Heading
        as="h1"
        className="lg:text-4xl text-3xl inline-flex gap-4 self-start"
      >
        <Headphones className="w-9 h-9 shaking group-hover:text-slate-600 transition delay-300" />
        Contact Us
      </Heading>
      <Paragraph className="lg:text-lg text-base font-medium text-slate-600">
        Get in touch with us by either directly contacting us or by sumbitting
        your enquiry using the form
      </Paragraph>
    </VStack>
  )
}
)