'use client'

import { useEffect, useRef } from 'react'
import clsx from 'clsx'

interface Bubble {
  x: number
  y: number
  radius: number
  speed: number
  opacity: number
}

interface BubblesBackgroundProps {
  className?: string
}

export default function BubblesBackground({
  className,
}: BubblesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const bubblesRef = useRef<Bubble[]>([])
  const animationRef = useRef<number | null>(null)

  const initCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const width = canvas.offsetWidth
    const height = canvas.offsetHeight
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.scale(dpr, dpr)

    bubblesRef.current = Array.from({ length: 30 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 4 + 2,
      speed: Math.random() * 0.3 + 0.1,
      opacity: Math.random() * 0.15 + 0.05,
    }))
  }

  const render = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const width = canvas.offsetWidth
    const height = canvas.offsetHeight

    ctx.clearRect(0, 0, width, height)

    for (const b of bubblesRef.current) {
      ctx.beginPath()
      ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${b.opacity})`
      ctx.fill()

      b.y -= b.speed
      if (b.y < -b.radius) {
        b.y = height + b.radius
        b.x = Math.random() * width
      }
    }

    animationRef.current = requestAnimationFrame(render)
  }

  useEffect(() => {
    initCanvas()
    render()

    const handleResize = () => {
      cancelAnimationFrame(animationRef.current!)
      initCanvas()
      render()
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationRef.current!)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={clsx(
        'absolute inset-0 z-0 h-full w-full transition-opacity duration-500 ease-in-out',
        className,
      )}
      style={{
        pointerEvents: 'none',
        borderRadius: 'inherit',
      }}
    />
  )
}
