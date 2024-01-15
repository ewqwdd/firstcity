import HStack from "@/shared/ui/Flex/HStack";
import Paragraph from "@/shared/ui/Paragraph";
import { CrossIcon } from "lucide-react";

export default function MainPageGoals() {
  return (
    <div className="grid grid-cols-2 gap-4">
        <HStack className="items-center gap-4">
            <Paragraph>
                <CrossIcon />
            </Paragraph>
        </HStack>
    </div>
  )
}
