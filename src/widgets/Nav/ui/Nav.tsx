import { Button } from '@/components/ui/button'
import HStack from '@/shared/ui/Flex/HStack'
import Heading from '@/shared/ui/Heading'
import Paragraph from '@/shared/ui/Paragraph'
import UserNavBar from './UserNavBar'
import { linksList } from '../config/linksList'

export default function Nav() {
  return (
    <HStack as="nav" className="bg-primary py-1 justify-center">
      <HStack className="justify-end items-center w-full max-w-7xl gap-4 px-[70px]">
        <Button variant="transparent" className="py-6" asChild>
          <Heading as="a" href="" className="mr-auto *:text-4xl font-semibold">
            <Paragraph as="span" variant="inverted">
              First
            </Paragraph>
            <Paragraph as="span" variant="blue" fontFamily="Salsa">
              City
            </Paragraph>
          </Heading>
        </Button>
        {linksList.map((elem) => (
          <Paragraph as={'a'} href={elem.href} variant="white">
            {elem.label}
          </Paragraph>
        ))}

        <UserNavBar className="ml-6 hover:opacity-80 transition-opacity" />
      </HStack>
    </HStack>
  )
}
