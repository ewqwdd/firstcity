import { Input, InputProps } from "@/components/ui/input";
import { cn } from "@/shared/lib/utils";
import { ErrorsMap } from "@/shared/types/ErrorsMap";
import VStack from "@/shared/ui/Flex/VStack";
import Paragraph from "@/shared/ui/Paragraph";
import { useMemo, forwardRef, ForwardedRef } from "react";
import { FieldError } from "react-hook-form";

interface UseFormInputInputInput extends InputProps {
    label: string
    error?: FieldError
    map?: ErrorsMap
    required?: boolean
}

export default forwardRef(function useFormInputInput({className, label, id, error, map, required, ...props}: UseFormInputInputInput, ref: ForwardedRef<HTMLInputElement>) {
    const replaced = useMemo(() => label.replaceAll(' ', ''), [label])
    console.log(props)
    return (
            <VStack className={cn("lg:gap-1", className)}>
                <Paragraph as='label' htmlFor={id ?? replaced}>
                    {label}
                    {required && <span className="text-red-600 text-sm">*</span>}
                </Paragraph>
                <Input {...props} id={id ?? replaced} ref={ref} className="text-base bg-slate-100"/>
                <Paragraph as='span' className="text-sm leading-4 text-red-700">
                    {error ? map?.[error?.type] :  <div className='h-4' />}
                </Paragraph>
            </VStack>
    )
}
)