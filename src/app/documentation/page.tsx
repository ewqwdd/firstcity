import VStack from '@/shared/ui/Flex/VStack'
import { Remarkable } from 'remarkable'
import { readFileSync } from 'fs'
import path from 'path'
import { Metadata } from 'next/types'
import HStack from '@/shared/ui/Flex/HStack'
import { ArrowDown, Check } from 'lucide-react'

const md = new Remarkable()
const results: string[] = [
  'Safe, Rated Good',
  'Effective, Rated Good',
  'Caring, Rated Good',
  'Responsive, Rated Outstanding',
  'Well-Led, Rated Outstanding',
]

export const metadata: Metadata = {
  title: 'Documentation | Find My Care',
  description: 'Find My Care',
}

export default function About() {
  const aboutUs = readFileSync(
    path.resolve(process.cwd(), 'public', 'markdowns', 'documentation.md'),
    'utf-8'
  )
  const raw = md.render(aboutUs)
  return (
    <HStack as="main" className="lg:min-height-no-nav max-w-7xl mx-auto gap-4 max-lg:flex-col px-3">
      <VStack
        as="aside"
        className="h-full lg:min-height-no-nav px-3 pt-9 gap-4 bg-black/5 lg:max-w-96 shrink lg:rounded-xl"
        style={{
          border: '1px solid rgba(184, 184, 184, 0.34)',
        }}
      >
        <h2 className="text-slate-800 font-medium">
          First City Care Group aims to stick to the guidelines of the business
          and ensure that every customer is aware of the regulations which are
          set in place
        </h2>
        <HStack className="items-center text-slate-800/80 font-light">
          <p>Below are First City Care Group’s Overview Documentation</p>
          <ArrowDown className="size-9 lg:grow" />
        </HStack>
        <p className="text-slate-800">
          First City Care Group’s Latest Inspection: 29 September 2023
        </p>
        <p className="text-slate-800/80">
          This report was published on 19 November 2021
        </p>
        <p className="text-slate-800/80">Latest review: 6 July 2023</p>
        <h3 className="text-slate-800">Results as follows:</h3>
        <VStack as="ul" className="gap-1">
          {results.map((elem, index) => (
            <HStack as="li" className="gap-1 text-primary/80" key={index}>
              <span>{elem}</span>
              <Check className="size-6" />
            </HStack>
          ))}
        </VStack>
      </VStack>
      <VStack className="gap-8" as='section'>
        <HStack className="text-slate-800 items-center gap-4">
          <div>
            <h3>Below are First City Care Group’s registration details</h3>
            <p>
              These are also the legal documentation of what they have been
              authorised and given permission of doing
            </p>
          </div>
          <ArrowDown className="size-10" />
        </HStack>
        <VStack
          className="[&>h2]:capitalize [&>h2]:text-4xl [&>h2]:text-slate-800 [&>h2]:font-medium [&>h2]:mb-3 [&>h2]:mt-7 gap-2"
          dangerouslySetInnerHTML={{
            __html: raw,
          }}
        />
      </VStack>
    </HStack>
  )
}
