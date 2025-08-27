"use client"

import { useEffect, useState } from "react"

export default function FloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const elements = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    initialX: Math.random() * window.innerWidth,
    initialY: Math.random() * window.innerHeight,
    speed: Math.random() * 0.02 + 0.01,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-200/20 to-purple-200/20 blur-xl animate-pulse"
          style={{
            width: element.size,
            height: element.size,
            left: element.initialX + (mousePosition.x - window.innerWidth / 2) * element.speed,
            top: element.initialY + (mousePosition.y - window.innerHeight / 2) * element.speed,
            transform: `translate(-50%, -50%) rotate(${Date.now() * 0.001 * (element.id + 1)}deg)`,
            transition: "left 0.3s ease-out, top 0.3s ease-out",
          }}
        />
      ))}
    </div>
  )
}
