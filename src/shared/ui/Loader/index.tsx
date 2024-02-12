import { cn } from '@/shared/lib/utils'
import styles from './Loader.module.css'

interface LoaderProps {
    className?: string
}

export default function Loader({className}: LoaderProps) {
  return (
    <div className={cn(styles.loader, className)} />
  )
}
