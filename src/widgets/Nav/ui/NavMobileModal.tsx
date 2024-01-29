'use client'
import VStack from '@/shared/ui/Flex/VStack'
import { Menu } from 'lucide-react'
import React, { MutableRefObject, useCallback, useRef, useState } from 'react'
import { linksList } from '../config/linksList'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import styles from './Nav.module.css'

export default function NavMobileModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isClosing, setIsCLosing] = useState<boolean>(false)
  const closeTimeout = useRef() as MutableRefObject<NodeJS.Timeout>

  const toggleNav = useCallback(() => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    setIsCLosing(true)
    closeTimeout.current = setTimeout(() => {
        setIsOpen(prev => !prev)
        setIsCLosing(false)
    }, 400)

  }, [])

  return (
    <>
      <Menu className="text-slate-100 ml-auto w-9 h-9" onClick={toggleNav}/>
      {isOpen ? (
        <VStack className={"fixed bg-blue-100 top-9 w-full h-full right-0 " + styles.mobile}>
          {linksList.map((elem, index) => (
            <>
              <Link
                key={index}
                href={elem.href}
                className="px-2  py-2 hover:bg-slate-400 text-sm transition-all text-slate-700 font-medium"
              >
                {elem.label}
              </Link>
              <Separator />
            </>
          ))}
        </VStack>
      ) : null}
    </>
  )
}
