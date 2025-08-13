'use client'

import { useEffect, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useIsMobile } from '@/hooks/useIsMobile'

const logos = [
  '/logos/limechain.png',
  '/logos/ambire.png',
  '/logos/adex.png',
  '/logos/incentivai.png',
]

export default function LogoScroller() {
  const isMobile = useIsMobile()

  const [loaded, setLoaded] = useState(false)
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      renderMode: 'performance',
      drag: true,
      mode: 'snap',
      slides: {
        perView: isMobile ? 2.1 : 4.1,
        spacing: 86,
      },
    },
    [
      (slider) => {
        slider.on('created', () => setLoaded(true))
      },
    ]
  )

  useEffect(() => {
    if (
      !slider.current ||
      !slider.current.track ||
      !slider.current.track.details ||
      !isMobile
    )
      return

    let animationFrame: number
    let timeoutId: NodeJS.Timeout

    const run = () => {
      animationFrame = requestAnimationFrame(() => {
        const current = slider.current!.track.details.rel
        const next =
          current + 1 < slider.current!.track.details.slides.length
            ? current + 1
            : 0
        slider.current!.moveToIdx(next)
        timeoutId = setTimeout(run, 2500)
      })
    }

    run()

    return () => {
      cancelAnimationFrame(animationFrame)
      clearTimeout(timeoutId)
    }
  }, [slider])

  return (
    <div
      ref={sliderRef}
      className={`keen-slider relative w-full overflow-hidden transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      aria-busy={!loaded}
    >
      {logos.map((src, i) => (
        <div
          key={i}
          className="keen-slider__slide flex w-auto items-center justify-center"
        >
          <img
            src={src}
            height={54}
            alt={`Logo ${i}`}
            className="brightness-0 invert"
          />
        </div>
      ))}
    </div>
  )
}
