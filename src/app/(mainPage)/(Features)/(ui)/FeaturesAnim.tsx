import { cn } from '@/shared/lib/utils'
import HStack from '@/shared/ui/Flex/HStack'
import {
  BookHeart,
  Cross,
  HeartHandshake,
  Salad,
  UsersRound,
} from 'lucide-react'
import styles from '../Features.module.css'

const defaultStylesElement = 'absolute w-1/5 h-1/5 text-secondary '
export default function FeaturesAnim() {
  return (
    <HStack className="overflow-clip max-md:w-3/4 max-md:max-w-80 max-md:mx-auto relative aspect-square justify-center items-center pointer-events-none md:my-auto">
      <div
        className="absolute top-0 left-0 w-full h-full animate-spin  max-h-full"
        style={{
          animationDuration: '10s',
        }}
      >
        <HeartHandshake
          className={cn(
            defaultStylesElement,
            'top-[5%] left-[40%]',
            styles.spin
          )}
        />
        <BookHeart
          className={cn(
            defaultStylesElement,
            'top-[40%] left-[5%]',
            styles.spin
          )}
        />
        <Salad
          className={cn(
            defaultStylesElement,
            'bottom-[5%] left-[40%]',
            styles.spin
          )}
        />
        <UsersRound
          className={cn(
            defaultStylesElement,
            'text-secondary top-[40%] right-[5%]',
            styles.spin
          )}
        />
      </div>
      <div
        className="absolute w-1/3 h-1/3 border-2 rounded-full border-secondary animate-ping top-[33%] left-[33%]"
        style={{
          animationDelay: '4s',
        }}
      />
      <div
        className="absolute w-1/4 h-1/4 border-2 rounded-full border-primary animate-ping top-[37.5%] left-[37.5%]"
        style={{
          animationDelay: '2s',
        }}
      />
      <div className="absolute w-1/6 h-1/6 border-2 rounded-full border-secondary animate-ping top-[41.7%] left-[41.7%]" />
      <Cross className="w-1/3 h-1/3 text-primary" />
    </HStack>
  )
}
