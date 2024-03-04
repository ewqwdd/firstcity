import { Input, InputProps } from "@/components/ui/input";
import { cn } from "@/shared/lib/utils";
import VStack from "@/shared/ui/Flex/VStack";
import Paragraph from "@/shared/ui/Paragraph";
import { useMemo, forwardRef, ForwardedRef } from "react";
import { FieldError } from "react-hook-form";
import { ErrorsMap } from "../../../app/contact-us/(model)/types";

interface FormHookInputInput extends InputProps {
    label: string
    error?: FieldError
    map?: ErrorsMap
}

export default forwardRef(function FormHookInput({className, label, id, error, map, ...props}: FormHookInputInput, ref: ForwardedRef<HTMLInputElement>) {
    const replaced = useMemo(() => label.replaceAll(' ', ''), [label])
    return (
            <VStack className={cn("gap-1", className)}>
                <Paragraph as='label' htmlFor={id ?? replaced}>
                    {label}
                </Paragraph>
                <Input {...props} id={id ?? replaced} ref={ref} className="text-base"/>
                <Paragraph as='span' className="text-sm text-red-700">
                    {error && map?.[error?.type]}
                </Paragraph>
            </VStack>
    )
}
)