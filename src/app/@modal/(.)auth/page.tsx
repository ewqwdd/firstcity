'use client'
import HStack from "@/shared/ui/Flex/HStack"
import { useRouter } from "next/navigation"
import { useCallback } from "react"
import { MouseEvent } from "react"

export default function page() {
   const router = useRouter()
    const onExit = useCallback(() => {
        router.back()
    }, [router])
    const stopProp = useCallback((e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }, [])

    return (
    <HStack onClick={onExit} className="fixed top-0 left-0 w-full h-full bg-black/25 animate-in justify-center items-center">
        <div onClick={stopProp} className="p-8 relative bg-FMC_lightgray rounded-xl">
            Login
        </div>
    </HStack>
  )
}
