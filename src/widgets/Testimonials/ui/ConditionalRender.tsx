import { sheets_v4 } from 'googleapis'
import { Suspense } from 'react'
import ErrorAsync from './Error.async'
import Loader from '@/shared/ui/Loader'
import TestimonialsAsync from './Testimonial.async'

interface TestimonialsProps {
  data?: sheets_v4.Schema$ValueRange['values']
  err?: unknown
}

export default function ConditionalRender({ data, err }: TestimonialsProps) {
  if (err) {
    return (
      <Suspense
        fallback={
          <div className="flex w-full max-w-56 aspect-video bg-primary/60 border-primary items-center justify-center">
            <Loader />
          </div>
        }
      >
        <ErrorAsync />
      </Suspense>
    )
  }

  return (
    <Suspense
      fallback={
        <div className="flex w-full max-w-56 aspect-video bg-primary/60 border-primary items-center justify-center">
          <Loader />
        </div>
      }
    >
      <TestimonialsAsync data={data} />
    </Suspense>
  )
}
