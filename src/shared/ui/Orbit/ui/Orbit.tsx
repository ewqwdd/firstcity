import { ReactNode } from "react"
import styles from './Orbit.module.css'
import { cn } from "@/shared/lib/utils"

interface OrbitProps {
    children: ReactNode
    right?: number | string
    className?: string
}

export default function Orbit({children, right, className}: OrbitProps) {
  return (
    <div 
    className={cn(styles.wrapper, className)}
    >
        <div className={styles.element}
        style={{
            right: right
        }}>
            {children}
        </div>
    </div>
  )
}
