import { Button } from '@/components/ui/button'
import HStack from '@/shared/ui/Flex/HStack'
import Heading from '@/shared/ui/Heading'
import Paragraph from '@/shared/ui/Paragraph'
import { linksList } from '../config/linksList'
import styles from './Nav.module.css'
import { cn } from '@/shared/lib/utils'

export default function Nav() {
  return (
    <HStack as="nav" className={cn("py-1 justify-center ", styles.nav)}>
      <HStack className="justify-end items-center w-full max-w-7xl gap-[3%] px-3">
        <Button variant="transparent" className="py-6" asChild>
          <Heading
            as="a"
            href="/"
            className="mr-auto text-3xl font-semibold hover:text-slate-950"
          >
            FIND MY CARE
          </Heading>
        </Button>
        {linksList.map((elem) => (
          <Paragraph
            as={'a'}
            href={elem.href}
            variant="gray"
            className="font-medium text-sm"
          >
            {elem.label}
          </Paragraph>
        ))}
        <Button>
          CONTACT US
        </Button>
      </HStack>
    </HStack>
  )
}
