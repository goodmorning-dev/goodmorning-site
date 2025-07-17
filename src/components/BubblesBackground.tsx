'use client'

import { useEffect, useRef } from 'react'

export default function BubblesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const width = canvas.offsetWidth * dpr
    const height = canvas.offsetHeight * dpr
    canvas.width = width
    canvas.height = height
    ctx.scale(dpr, dpr)

    const bubbles = Array.from({ length: 30 }).map(() => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      radius: Math.random() * 4 + 2,
      speed: Math.random() * 0.3 + 0.1,
      opacity: Math.random() * 0.15 + 0.05,
    }))

    let animationFrameId: number

    const render = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      for (const b of bubbles) {
        ctx.beginPath()
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${b.opacity})`
        ctx.fill()

        b.y -= b.speed
        if (b.y < -b.radius) {
          b.y = canvas.offsetHeight + b.radius
          b.x = Math.random() * canvas.offsetWidth
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 h-full w-full"
      style={{
        pointerEvents: 'none',
        borderRadius: 'inherit',
      }}
    />
  )
}
