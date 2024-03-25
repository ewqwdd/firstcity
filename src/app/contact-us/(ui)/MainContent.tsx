'use client'
import { useForm } from 'react-hook-form'
import { ContactForm } from '../(model)/types'
import VStack from '@/shared/ui/Flex/VStack'
import HStack from '@/shared/ui/Flex/HStack'
import Paragraph from '@/shared/ui/Paragraph'
import { Textarea } from '@/components/ui/textarea'
import Heading from '@/shared/ui/Heading'
import { Button } from '@/components/ui/button'
import { emailRegExp, phoneRegExp } from '@/shared/lib/regExp'
import { FieldErrorsMap } from '../(model)/config'
import { FormHookInput } from '@/shared/ui/FormHookInput'
import { useCallback, useState } from 'react'
import Loader from '@/shared/ui/Loader'

interface MainContentProps {
  cb?: (data: ContactForm) => Promise<{status: number, data: unknown}>
}

export default function MainContent({cb}: MainContentProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control: {_disableForm}
  } = useForm<ContactForm>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onSubmit = useCallback(handleSubmit(async (e) => {
    _disableForm(true)
    setIsLoading(true)
    const res = await cb?.(e)
    _disableForm(false)
    setIsLoading(false)
  }), [])

  return (
    <VStack
      as="form"
      className="lg:col-span-2 col-span-3 lg:px-[5%] md:px-4 gap-0.5 text-lg text-purple-950 relative"
      onSubmit={onSubmit}
    >
      {isLoading ? <HStack className='justify-center size-full absolute top-0 left-0'>
        <HStack className='items-center justify-center w-[95%] h-full bg-black/10 rounded-md'> 
          <Loader />
        </HStack>
      </HStack> : null}
      <Heading as="h2" className="text-xl text-purple-950">
        Request a call from our team of experts by completing the form below:
      </Heading>
      <HStack className="justify-between mt-4 gap-2 max-[520px]:gap-0 max-[520px]:flex-col">
        <FormHookInput
          {...register('firstName', { required: true, minLength: 2 })}
          error={errors['firstName']}
          map={FieldErrorsMap['firstName']}
          placeholder="John"
          className="lg:basis-[45%] max-lg:grow"
          label="First Name"
          required
        />
        <FormHookInput
          {...register('lastName', { required: true, minLength: 2 })}
          error={errors['lastName']}
          map={FieldErrorsMap['lastName']}
          placeholder="Smith"
          className="lg:basis-[45%] max-lg:grow"
          label="Last Name"
          required
        />
      </HStack>
      <HStack className="justify-between gap-2 max-[520px]:gap-0 max-[520px]:flex-col">
        <FormHookInput
          {...register('email', { required: true, pattern: emailRegExp })}
          error={errors['email']}
          map={FieldErrorsMap['email']}
          type="email"
          placeholder="example@email.com"
          className="lg:basis-[45%] max-lg:grow"
          label="Email"
          required
        />
        <FormHookInput
          {...register('phone', { required: true, pattern: phoneRegExp })}
          error={errors['phone']}
          map={FieldErrorsMap['phone']}
          type="tel"
          placeholder="07712345678"
          className="lg:basis-[45%] max-lg:grow"
          label="Phone Number"
          required
        />
      </HStack>
      <VStack className="gap-1">
        <Paragraph as="label" htmlFor="Comment">
          Comment
        </Paragraph>
        <Textarea
          {...register('comment', {maxLength: 900})}
          placeholder="Comment"
          className="max-h-64 min-h-20 h-28 max-sm:resize-none bg-slate-100"
        />
        <Paragraph as="span" className="text-sm text-red-700">
          {errors['comment'] ?
            FieldErrorsMap['comment']?.[errors['comment']?.type] : <div className='h-5' />}
        </Paragraph>
      </VStack>
      <Button variant={'secondary'} type="submit">
        Submit
      </Button>
    </VStack>
  )
}
