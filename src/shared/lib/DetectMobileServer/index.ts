import { headers } from "next/headers"
import UaParser from 'ua-parser-js'

export const detectMobileServer = () => {
  const userAgent = headers().get('user-agent')
  const parsed = new UaParser(userAgent || '')
  const isMobile = ['mobile', 'tablet'].includes(parsed.getDevice().type || '')
  return isMobile
}