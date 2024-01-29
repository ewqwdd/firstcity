import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Paragraph from '@/shared/ui/Paragraph'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React, { ReactNode } from 'react'

export interface CardMainPageProps {
  title?: string
  description?: string
  content?: ReactNode
  link?: {
    href: string
    label: string
  }
}

export default function CardMainPage({
  content,
  description,
  link,
  title,
}: CardMainPageProps) {
  return (
    <Card className='h-full flex flex-col justify-between'>
      <CardHeader className="p-4">
        {title ? (
          <CardTitle>
            <Paragraph>{title}</Paragraph>
          </CardTitle>
        ) : null}
        {description ? (
          <CardDescription className="!mt-0">{description}</CardDescription>
        ) : null}
      </CardHeader>
      <CardContent className="px-4 pb-2 mt-auto mb-2 flex flex-col items-start gap-2">
        {content}
        {link && (
          <Button variant={'secondary'} className="mt-4" asChild>
            <Link href={link.href}>
              {link.label}
              <ArrowRight className='ml-1'/>
            </Link>
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
