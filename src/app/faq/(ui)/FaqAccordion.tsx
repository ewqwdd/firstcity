'use client'

import { Accordion } from '@/components/ui/accordion'
import { faqElements } from '../(config)/faqElements'
import FaqElem from './FaqElem'

export default function FaqAccordion() {
  return (
    <Accordion type='multiple' className="w-full border-slate-400/35 border-t-2">
      {faqElements.map((elem, index) => (
        <FaqElem {...elem} value={index.toString()} key={index} />
      ))}
    </Accordion>
  )
}
