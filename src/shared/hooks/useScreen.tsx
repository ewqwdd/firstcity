import { useEffect, useState } from "react"

export const useScreen = () => {
    const [width, setWidth] = useState<number>()

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return width
}