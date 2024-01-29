'use client'
import { ReactNode, useCallback, useState } from "react";
import HStack from "../../Flex/HStack";
import { ClassNames } from "@/shared/lib/ClassNames/ClassNames";
import styles from './Overlay.module.css'

interface OverlayProps {
    children: ReactNode
    isOpen?: boolean
    onClose?: () => void
    className?: string
}

export default function Overlay({children, isOpen, onClose, className = ''}: OverlayProps) {
    const [isClosing, setIsCloing] = useState<boolean>(false)
    const closeWithAnim = useCallback(()=>{
        setIsCloing(true)
        setTimeout(() => {
            onClose?.()
            setIsCloing(false)
        }, 300)
    }, [])

    if (!isOpen) return null

  return (
    <HStack className={ClassNames("fixed w-full h-full top-0 left-0 bg-black/30", {[styles.close]: isClosing}, [styles.overlay, className])} onClick={closeWithAnim}>
        {children}
    </HStack>
  )
}
