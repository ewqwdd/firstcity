import HStack from '@/shared/ui/Flex/HStack'
import Heading from '@/shared/ui/Heading'
import styles from './Nav.module.css'
import NavMobileModal from './NavMobileModal'
import { cn } from '@/shared/lib/utils'
import { Button } from '@/components/ui/button'

export default function NavMobile() {
  return (
    <>
    <div className={styles.nav} />
    <HStack className={cn('bg-primary fixed top-0 left-0 w-full items-center z-40 px-2', styles.nav)}>
      <Button variant={'transparent'} asChild>
        <Heading
          as="a"
          href="/"
          className="text-2xl font-semibold text-slate-100 hover:text-slate-200 px-2 py-0.5"
        >
          FIND MY CARE
        </Heading>
      </Button>
      <NavMobileModal />
    </HStack>
    </>
  )
}
