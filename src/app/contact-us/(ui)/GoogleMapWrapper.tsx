'use client'

import { useScreen } from '@/shared/hooks/useScreen'
import { display } from '@/shared/types/Display'
import GoogleMap from './GoogleMap'

export default function GoogleMapWrapper() {
  const width = useScreen()
  let display
  if (width) {
    if (width <= 520) {
      display = 'mobile'
    } else if (width <= 1024) {
      display = 'tablet'
    } else {
      display = 'desktop'
    }
  }

  return <GoogleMap display={display as display} />
}
