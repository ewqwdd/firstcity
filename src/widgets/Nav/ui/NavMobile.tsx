import HStack from '@/shared/ui/Flex/HStack'
import Heading from '@/shared/ui/Heading'
import styles from './Nav.module.css'
import { Menu } from 'lucide-react'
import NavMobileModal from './NavMobileModal'

export default function NavMobile() {
  return (
    <>
    <div className={styles.nav} />
    <HStack className={'bg-primary fixed top-0 left-0 w-full items-center'}>
      <Heading
        as="a"
        href="/"
        className="text-xl font-semibold text-slate-100 hover:text-slate-200 px-2 py-0.5"
      >
        FIND MY CARE
      </Heading>
      <NavMobileModal />
    </HStack>
    </>
  )
}
