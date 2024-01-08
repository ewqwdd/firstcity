import { ElementType } from "react";
import Paragraph, { ParagraphProps, TextSize } from "../Paragraph";

type HeadingProps = ParagraphProps<'h1'>

const headingSizeMap: Record<TextSize, ElementType> = {
    "2xl": 'h1',
    xl: 'h2',
    lg: 'h3',
    base: 'h4',
    sm: 'h5'
}

export default function Heading({children, size = '2xl', ...props}: HeadingProps) {
    return (
        <Paragraph {...props} size={size} as={headingSizeMap[size]}>
            {children}
        </Paragraph>
    )
}