import { ReactNode } from "react"
import styles from './Orbit.module.css'

interface OrbitProps {
    children: ReactNode
    dimensions?: number
    right?: number
}

export default function Orbit({children, dimensions, right}: OrbitProps) {
  return (
    <div 
    style={{
        height: dimensions,
        width: dimensions,
    }}
    className={styles.wrapper}
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
