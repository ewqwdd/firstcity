import { ClassNames } from "@/shared/lib/ClassNames/ClassNames"
import { bgColorMap } from "@/shared/lib/Colors/bgColor"
import { textColorMap } from "@/shared/lib/Colors/textColor"
import { ForwardedRef, ReactNode, forwardRef } from "react"
import { FlexProps, textMap } from ".."



export default forwardRef(function VStack({align, color = 'gray', justify, gap, children, className}: FlexProps, ref: ForwardedRef<HTMLDivElement>) {
    const textColor = textColorMap(textMap[color])
    const bgColor = bgColorMap(color)

    return (
        <div className={ClassNames(className, {}, [bgColor, textColor, `justify-${justify} items-${align} flex-col`])} ref={ref}>
            {children}
        </div>
    )
})