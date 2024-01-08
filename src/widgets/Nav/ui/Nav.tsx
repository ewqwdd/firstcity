import { Button } from "@/components/ui/button";
import HStack from "@/shared/ui/Flex/HStack";
import Heading from "@/shared/ui/Heading";
import Paragraph from "@/shared/ui/Paragraph";
import Link from "next/link";

export default function Nav() {
    return (
        <HStack as='nav' className="bg-FMC_primary py-1 justify-center">
            <HStack className="justify-end items-center w-full max-w-7xl gap-2">
                <Button variant="transparent" className="py-6" asChild>
                    <Heading as='a' href=""  className="mr-auto *:text-4xl font-semibold">
                        <Paragraph as='span' variant="inverted">
                            First
                        </Paragraph>
                        <Paragraph as='span' variant="blue" fontFamily="Salsa">
                            City
                        </Paragraph>
                    </Heading>
                </Button>
                <Paragraph as={'a'} href='/' variant="white">
                    Home
                </Paragraph>
                <Paragraph as={'a'} href='about' variant="white">
                    About
                </Paragraph>
            </HStack>
        </HStack>
    )
}