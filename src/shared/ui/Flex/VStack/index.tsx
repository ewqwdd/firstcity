import { FlexProps } from ".."
import Link from "next/link"
import { cn } from "@/shared/lib/utils"

export default function VStack<C extends React.ElementType = 'div'>({children, className, as, ...props}: FlexProps<C>) {
    const Component = as || 'div'

     if (Component === 'a') {
        return (
            <Link href='' {...props} className={cn(`justify-start flex-col flex`, className)}>
                {children}
            </Link>
        )
    }

    return (
        <Component {...props} className={cn(`justify-start flex-col flex`, className)}>
            {children}
        </Component>
    )
}