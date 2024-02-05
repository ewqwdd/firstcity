import VStack from "@/shared/ui/Flex/VStack";
import Heading from "@/shared/ui/Heading";
import Paragraph from "@/shared/ui/Paragraph";
import { Headphones, Mail } from "lucide-react";

export default function page() {
  return (
    <main className="max-w-7xl grid grid-cols-3 mx-auto mt-4 text-slate-800">
        <VStack as='aside' className="gap-4">
        <VStack className="p-4 rounded-lg bg-primary/20 border-2 border-slate-800/60 group parent">
            <Heading as='h1' className="text-4xl inline-flex gap-4 self-start">
                <Headphones className="w-9 h-9 shaking group-hover:text-slate-600 transition delay-300" />
                Contact Us
            </Heading>
            <Paragraph className="text-lg font-medium text-slate-600">
                Get in touch with us by either directly contacting us or by sumbitting your enquiry using the form
            </Paragraph>
        </VStack>
        <div className="grid gap-x-2" style={{
            gridTemplateColumns: 'auto 1fr'
        }}>
            <Paragraph as='span' className="font-semibold">
                Phone:
            </Paragraph>
            <a className="text-slate-500">
                +12345678
            </a>
            <Paragraph as='span' className="font-semibold">
                Emal:
            </Paragraph>
            <a className="text-slate-500 parent group flex items-center transition-colors hover:text-purple-800">
                <Mail className="w-4 h-4 mr-0.5 shaking !transition-colors" />
                example@email.com
            </a>
            <Paragraph as='span' className="font-semibold">
                Adress:
            </Paragraph>
            <span className="text-slate-500">
                First City House, <br/>Cheney Manor Industrial Estate, <br/>Swindon SN2 2QG

            </span>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9918.885793595131!2d-1.8079188!3d51.5733398!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871460acda1cb51%3A0xb13d35565e506fdc!2sFirst%20City%20Care%20Group!5e0!3m2!1sen!2suk!4v1707148990363!5m2!1sen!2suk" height='380px' allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </VStack>
    </main>
  )
}
