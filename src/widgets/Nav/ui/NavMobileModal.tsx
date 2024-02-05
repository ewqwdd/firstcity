'use client'
import VStack from '@/shared/ui/Flex/VStack'
import { Menu, X } from 'lucide-react'
import React, { MutableRefObject, useCallback, useRef, useState } from 'react'
import { linksList } from '../config/linksList'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import styles from './Nav.module.css'
import { cn } from '@/shared/lib/utils'
import { Button } from '@/components/ui/button'

const buttonStyles = 'absolute top-0 left-0 p-0 w-full h-full hover:text-inherit hover:bg-white/60'

export default function NavMobileModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [iconMenu, setIconMenu] = useState<boolean>(false)
  const [isClosing, setIsCLosing] = useState<boolean>(false)
  const closeTimeout = useRef() as MutableRefObject<NodeJS.Timeout>

  const toggleNav = useCallback(() => {
    if (closeTimeout.current) {
      setIsCLosing(false)
      clearTimeout(closeTimeout.current)
    }
    if(isOpen) {
      setIconMenu(false)
      setIsCLosing(true)
      closeTimeout.current = setTimeout(() => {
        setIsOpen(prev => !prev)
        setIsCLosing(false)
    }, 400)
    }
    else {
      setIconMenu(true)
      setIsOpen(prev => !prev)
    }
    

  }, [isOpen])

  return (
    <>
      <div className='relative text-slate-100 ml-auto w-14 h-14'>
        <Button className={cn(buttonStyles, (iconMenu ? styles.closeMenu : styles.openMenu))} onClick={toggleNav} variant={'ghost'}><Menu className='w-full h-full' /></Button>
        <Button className={cn(buttonStyles, (!iconMenu ? styles.closeX : styles.openX))} onClick={toggleNav}><X className='w-full h-full' /></Button>
      </div>
      {isOpen ? (
        <VStack className={cn("fixed bg-blue-100 w-full h-full right-0 ", styles.mobile, isClosing ? styles.close : '')}>
          {linksList.map((elem, index) => (
            <>
              <Link
                key={index}
                href={elem.href}
                className="px-2  py-2 hover:bg-slate-400 text-lg transition-all text-slate-700 font-medium"
              >
                {elem.label}
              </Link>
              <Separator className='bg-slate-800'/>
            </>
          ))}
          <Button className='mt-4 text-xl font-semibold' variant={'secondary'}>
            Apply Now
          </Button>
        </VStack>
      ) : null}
    </>
  )
}
