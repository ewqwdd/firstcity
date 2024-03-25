'use client'
import { cn } from '@/shared/lib/utils'
import { Cross } from 'lucide-react'
import styles from '../About.module.css'
import { useEffect, useState } from 'react'
export default function ParallaxCrosses() {
   const [isMounted, setIsMounted] = useState<boolean>(false)
  
    useEffect(() => {
        setIsMounted(true)
        return () => {
            setIsMounted(false)
        }
    }, [])

    return (
    <>
      <Cross
        className={cn(
          'size-20 text-secondary left-1 top-1 absolute z-10 opacity-70',
          styles.cross,
          isMounted && styles.loaded
        )}
      />
      <Cross
        className={cn(
          'size-20 text-secondary right-[12%] top-[22%] absolute z-10 opacity-70',
          styles.cross,
          isMounted && styles.loaded
        )}
      />
      <Cross
        className={cn(
          'size-12 text-secondary right-[30%] top-[12%] absolute -z-10 opacity-50',
          styles.cross,
          isMounted && styles.loaded
        )}
      />
      <Cross
        className={cn(
          'size-16 text-purple-900 right-[30%] top-[40%] absolute z-10 opacity-70',
          styles.cross,
          isMounted && styles.loaded
        )}
      />
      <Cross
        className={cn(
          'size-8 text-purple-900 left-[20%] top-[60%] absolute -z-10 opacity-50',
          styles.cross,
          isMounted && styles.loaded
        )}
      />
      <Cross
        className={cn(
          'size-14 text-secondary right-[50%] top-[50%] absolute -z-10 opacity-50',
          styles.cross,
          isMounted && styles.loaded
        )}
      />
      <Cross
        className={cn(
          'size-20 text-purple-900 left-[20%] top-[16%] absolute z-10 opacity-70',
          styles.cross,
          isMounted && styles.loaded
        )}
      />
      <Cross
        className={cn(
          'size-20 text-purple-900 left-[40%] bottom-[-34%] absolute z-10 opacity-50',
          styles.cross,
          isMounted && styles.loaded
        )}
      />
      <Cross
        className={cn(
          'size-16 text-secondary left-[10%] bottom-[-20%] absolute z-10 opacity-50',
          styles.cross,
          isMounted && styles.loaded
        )}
      />
      <Cross
        className={cn(
          'size-12 text-secondary right-[20%] bottom-[-45%] absolute -z-10 opacity-50',
          styles.cross,
          isMounted && styles.loaded
        )}
      />
      <Cross
        className={cn(
          'size-8 text-secondary left-[16%] bottom-[-60%] absolute -z-10 opacity-50',
          styles.cross,
          isMounted && styles.loaded
        )}
      />
    </>
  )
}
