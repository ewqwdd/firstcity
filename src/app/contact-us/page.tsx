import VStack from '@/shared/ui/Flex/VStack'
import Aside from './(ui)/Aside'
import MainContent from './(ui)/MainContent'
import ResponsiveHide from '@/shared/ui/ResponsiveHide'
import ContactCard from './(ui)/ContactCard'
import Loader from '@/shared/ui/Loader'
import HStack from '@/shared/ui/Flex/HStack'
import { Metadata } from 'next/types'
import { ContactForm } from './(model)/types'
import {google} from 'googleapis'

export const metadata: Metadata = {
  title: 'Contact Us | Find My Care',
  description: 'Find My Care',
}

async function postContacts(data: ContactForm) {
  'use server'
  try {
    const auth = new google.auth.JWT(process.env.GOOGLE_CLIENT_EMAIL!, undefined, process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, '\n'),'https://www.googleapis.com/auth/spreadsheets')
  const sheets = google.sheets({
    version: 'v4',
    auth
  })
  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: 'A1:E1',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[data.firstName, data.lastName, data.phone, data.email, data.comment]]
    }
  })
  return {status: 200, data: response.data}
  } catch(err) {
    console.log(err)
    return {status: 500, data: err}
  }
}

export default function page() {
  return (
    <VStack as='main' className="max-w-7xl max-lg:gap-4 flex-col-reverse md:grid lg:grid-cols-3 grid-cols-5 mx-auto mt-4 text-slate-800 px-3">
      <Aside />
      <MainContent cb={postContacts}/>
      <ResponsiveHide
        breakpoint={768}
        fallback={
          <HStack className="h-[143px] justify-center items-center">
            <Loader />
          </HStack>
        }
      >
        <ContactCard />
      </ResponsiveHide>
    </VStack>
  )
}
