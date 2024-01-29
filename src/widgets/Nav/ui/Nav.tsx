import { Button } from '@/components/ui/button'
import HStack from '@/shared/ui/Flex/HStack'
import Heading from '@/shared/ui/Heading'
import Paragraph from '@/shared/ui/Paragraph'
import { linksList } from '../config/linksList'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <HStack as="nav" className={"bg-primary py-1 justify-center " + styles.nav}>
      <HStack className="justify-end items-center w-full max-w-7xl gap-4 px-[70px]">
        <Button variant="transparent" className="py-6" asChild>
          <Heading
            as="a"
            href="/"
            className="mr-auto text-2xl font-semibold text-slate-100 hover:text-slate-200"
          >
            FIND MY CARE
          </Heading>
        </Button>
        {linksList.map((elem) => (
          <Paragraph
            as={'a'}
            href={elem.href}
            variant="white"
            className="font-medium text-sm"
          >
            {elem.label}
          </Paragraph>
        ))}
      </HStack>
    </HStack>
  )
}
