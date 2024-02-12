import { display } from '@/shared/types/Display'
import Loader from '@/shared/ui/Loader'
import React, { memo } from 'react'

interface GoogleMapProps {
    display?: display
}

export default memo(function GoogleMap({display}: GoogleMapProps) {
  let height
  if (!display) return <div className='w-full h-80 flex justify-center items-center'><Loader /></div>
  if (display === 'tablet') {
    height = 320
  }
  if (display === 'mobile') {
    height = 280
  }
  else {
    height = 380
  }
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9918.885793595131!2d-1.8079188!3d51.5733398!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871460acda1cb51%3A0xb13d35565e506fdc!2sFirst%20City%20Care%20Group!5e0!3m2!1sen!2suk!4v1707148990363!5m2!1sen!2suk"
      height={height + "px"}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  )
}
)