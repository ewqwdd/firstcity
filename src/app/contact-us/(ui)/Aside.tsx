import VStack from '@/shared/ui/Flex/VStack'
import Paragraph from '@/shared/ui/Paragraph'
import { Mail } from 'lucide-react'
import ContactCard from './ContactCard'
import GoogleMapWrapper from './GoogleMapWrapper'

export default function Aside() {
  return (
    <VStack as="aside" className="gap-4 lg:col-span-1 col-span-2">
      <ContactCard className="max-md:hidden" />
      <div
        className="grid gap-x-2"
        style={{
          gridTemplateColumns: 'auto 1fr',
        }}
      >
        <Paragraph as="span" className="font-semibold">
          Phone:
        </Paragraph>
        <a className="text-slate-500">+12345678</a>
        <Paragraph as="span" className="font-semibold">
          Emal:
        </Paragraph>
        <a className="text-slate-500 parent group flex items-center transition-colors hover:text-purple-800">
          <Mail className="w-4 h-4 mr-0.5 shaking !transition-colors" />
          example@email.com
        </a>
        <Paragraph as="span" className="font-semibold">
          Adress:
        </Paragraph>
        <span className="text-slate-500">
          First City House, <br />
          Cheney Manor Industrial Estate, <br />
          Swindon SN2 2QG
        </span>
      </div>
      <GoogleMapWrapper />
    </VStack>
  )
}
