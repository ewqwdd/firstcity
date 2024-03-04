'use client'

import { useScreen } from "@/shared/hooks/useScreen"
import ContactCard from "./ContactCard"

export default function ContactCardMobileWrapper() {
  const width = useScreen()

  if (width && width < 768) {
    return <ContactCard />
  }

  return null
}
