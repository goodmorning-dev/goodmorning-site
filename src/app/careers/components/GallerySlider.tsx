'use client'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Image from 'next/image'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function GallerySlider() {
  const isMobile = useIsMobile()

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: isMobile ? 2 : 3.5,
      spacing: 30,
    },
  })

  const handlePrev = () => slider.current?.prev()
  const handleNext = () => slider.current?.next()

  const galleryImages = [
    '/images/gallery/img1.png',
    '/images/gallery/img2.png',
    '/images/gallery/img3.png',
    '/images/gallery/img4.png',
    '/images/gallery/img5.png',
    '/images/gallery/img6.png',
    '/images/gallery/img7.png',
    '/images/gallery/img8.png',
    '/images/gallery/img9.png',
    '/images/gallery/img10.png',
    '/images/gallery/img11.png'
  ]

  return (
    <div className="relative z-30 mt-20 w-full">
      <div className="lg:pl-[10%]">
        <div ref={sliderRef} className="keen-slider">
          {galleryImages.map((src, index) => (
            <div key={index} className="keen-slider__slide flex justify-center">
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                width={800}
                height={800}
                className="rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-8xl justify-end gap-4">
        <button
          onClick={handlePrev}
          className="transition-transform duration-300 hover:scale-110"
        >
          <Image
            src="/icons/arrow-left.png"
            alt="Previous"
            width={50}
            height={50}
            draggable={false}
          />
        </button>
        <button
          onClick={handleNext}
          className="transition-transform duration-300 hover:scale-110"
        >
          <Image
            src="/icons/arrow-right.png"
            alt="Next"
            width={50}
            height={50}
            draggable={false}
          />
        </button>
      </div>
    </div>
  )
}
