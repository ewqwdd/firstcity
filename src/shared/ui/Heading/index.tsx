import { cn } from "@/shared/lib/utils";
import Paragraph, { ParagraphProps } from "../Paragraph";

export default function Heading<C extends React.ElementType>({children, as, className, ...props}: ParagraphProps<C>) {
    const Component = as || 'h1'
    return (
        <Paragraph {...props} className={cn('text-xl', className)} as={Component}>
            {children}
        </Paragraph>
    )
}