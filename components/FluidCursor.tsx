"use client"

import { useEffect, useRef } from "react"
import useFluidCursor from "@/hooks/use-FluidCursor"

const FluidCursor = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        if (!canvasRef.current) return
        useFluidCursor(canvasRef.current)
    }, [])

    return (
        <div className="fixed top-0 left-0 z-50 pointer-events-none">
            <canvas ref={canvasRef} className="w-screen h-screen" />
        </div>
    )
}

export default FluidCursor
