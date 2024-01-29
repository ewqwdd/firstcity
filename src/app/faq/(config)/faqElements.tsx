import Paragraph from "@/shared/ui/Paragraph";
import { ReactNode } from "react";

export interface FaqElementSchema {
    trigger: ReactNode | string
    content: ReactNode | string
}

export const faqElements: FaqElementSchema[] = [
    {
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi totam excepturi nostrum ratione eius? Tempore numquam deleniti sequi, ea, dignissimos commodi doloribus tenetur quas tempora incidunt ut veniam, quo fuga',
        trigger: 'Example 1'
    },
    {
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi totam excepturi nostrum ratione eius? Tempore numquam deleniti sequi, ea, dignissimos commodi doloribus tenetur quas tempora incidunt ut veniam, quo fuga',
        trigger: 'Example 2'
    },
    {
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi totam excepturi nostrum ratione eius? Tempore numquam deleniti sequi, ea, dignissimos commodi doloribus tenetur quas tempora incidunt ut veniam, quo fuga',
        trigger: 'Example 3'
    },
]