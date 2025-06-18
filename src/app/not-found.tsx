'use client'

import { useEffect, useState } from 'react'
import { notFoundVariants } from '@/constants/notFoundQuotes'
import Button from '@/components/Button'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()
  const [variant, setVariant] = useState(notFoundVariants[0])

  useEffect(() => {
    const random = Math.floor(Math.random() * notFoundVariants.length)
    setVariant(notFoundVariants[random])
  }, [])

  return (
    <section
      className="relative flex min-h-[90vh] flex-col items-center justify-center bg-black bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${variant.image})`,
        backgroundColor: 'transparent',
        backgroundBlendMode: 'darken',
      }}
    >
      {/* Outlined 404 background */}
      <span
        className="pointer-events-none absolute inset-0 z-0 flex select-none items-center justify-center"
        aria-hidden="true"
      >
        <span
          className="text-[18vw] font-black drop-shadow-lg"
          style={{
            WebkitTextStroke: '8px rgba(255,255,255,0.3)',
            color: 'transparent',
          }}
        >
          404
        </span>
      </span>
      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <p className="mb-2 max-w-xl text-center text-4xl font-bold">
          {variant.headline}
        </p>
        <p className="mb-8 max-w-xl text-center text-lg">{variant.subtext}</p>
        <Button
          variant="primary"
          className="mt-2"
          onClick={() => router.push('/')}
        >
          {variant.button}
        </Button>
      </div>
    </section>
  )
}
