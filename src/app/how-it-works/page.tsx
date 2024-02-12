import VStack from "@/shared/ui/Flex/VStack";
import Heading from "@/shared/ui/Heading";
import Paragraph from "@/shared/ui/Paragraph";

export default function page() {
  return (
    <VStack as='main'>
        <VStack as='header' className="bg-FMC_primary px-3">
            <div className="mx-auto max-w-7xl w-full grid grid-cols-2">
                <VStack className="py-14 pl-7 max-w-3xl justify-between">
                    <Heading as='h1' className="text-5xl font-bold text-slate-100">
                        Revolutionising the quality of our services and ensuring top customer satisfaction
                    </Heading>
                    <Paragraph className="text-2xl leading-7 text-slate-300">
                        You can see what our business has to offer by checking down below or by watching a short demonstration clip
                    </Paragraph>
                </VStack>
            </div>
        </VStack>
    </VStack>
  )
}
