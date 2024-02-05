import { cn } from "@/shared/lib/utils";
import Paragraph, { ParagraphProps } from "../Paragraph";
import { twMerge } from "tailwind-merge";

export default function Heading<C extends React.ElementType>({children, as, className, ...props}: ParagraphProps<C>) {
    const Component = as || 'h1'
    return (
        <Paragraph {...props} className={twMerge('text-xl font-bold', className)} as={Component}>
            {children}
        </Paragraph>
    )
}