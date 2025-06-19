'use client'

import { Fragment, useState, useEffect } from 'react'
import { notFoundVariants } from '@/constants/notFoundQuotes'
import Button from '@/components/Button'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()
  const [variant, setVariant] = useState<(typeof notFoundVariants)[0] | null>(
    null,
  )

  useEffect(() => {
    const random = Math.floor(Math.random() * notFoundVariants.length)
    setVariant(notFoundVariants[random])
  }, [])

  if (!variant) return null

  const renderWithBreaks = (text: string) =>
    text.split('<br />').map((part, i) => (
      <Fragment key={i}>
        {part}
        {i < text.split('<br />').length - 1 && <br />}
      </Fragment>
    ))

  return (
    <section
      className="relative flex min-h-[90vh] flex-col items-center justify-center bg-black bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${variant.image})`,
        backgroundColor: 'transparent',
        backgroundBlendMode: 'darken',
      }}
    >
      <span
        className="pointer-events-none absolute inset-0 z-0 flex select-none items-center justify-center"
        aria-hidden="true"
        style={{ top: '-20vh' }}
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

      <div className="relative z-10 flex flex-col items-center justify-center">
        <p className="mb-10 text-center text-7xl font-bold">
          {renderWithBreaks(variant.headline)}
        </p>
        <p className="mb-8 max-w-xl text-center text-lg">
          {renderWithBreaks(variant.subtext)}
        </p>
        <Button variant="primary" onClick={() => router.push('/')}>
          {variant.button}
        </Button>
      </div>
    </section>
  )
}
