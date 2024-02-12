'use client'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { FaqElementSchema } from '../(config)/faqElements'

interface FaqElemProps extends FaqElementSchema {
    value: string
}

export default function FaqElem({ content, trigger, value }: FaqElemProps) {
  return (
    <AccordionItem value={"item-" + value} className='border-slate-400/35 border-b-2' asChild>
      <li>
        <AccordionTrigger className="text-lg font-medium hover:no-underline">
          {trigger}
        </AccordionTrigger>
        <AccordionContent className="text-zinc-600">{content}</AccordionContent>
      </li>
    </AccordionItem>
  )
}
