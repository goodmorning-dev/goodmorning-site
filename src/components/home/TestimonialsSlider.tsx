'use client'

import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import Image from 'next/image'
import ReadMoreLink from '@/components/ReadMoreLink'
import { useIsMobile } from '@/hooks/useIsMobile'
import { testimonials } from '@/constants/testimonials'

export default function TestimonialsSlider() {
  const isMobile = useIsMobile()

  const [loaded, setLoaded] = useState(false)

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        perView: isMobile ? 1 : 2,
        spacing: 70,
      },
    },
    [
      (slider) => {
        slider.on('created', () => setLoaded(true))
      },
    ]
  )

  const handlePrev = () => slider.current?.prev()
  const handleNext = () => slider.current?.next()

  return (
    <div className="relative z-30 mt-16 w-full px-4">
      <div
        ref={sliderRef}
        className={`keen-slider transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-busy={!loaded}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="keen-slider__slide flex justify-center">
            <div
              className="relative flex-col rounded-[20px] bg-gray p-12"
              style={{
                clipPath:
                  'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)',
              }}
            >
              <div className="flex flex-col-reverse justify-between lg:flex-row">
                <div>
                  <h4 className="text-[20px] font-semibold leading-10 tracking-wide lg:text-[25px]">
                    {testimonial.name}
                  </h4>
                  <p className="text-[20px] text-textGray lg:text-[25px]">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
                <Image
                  src={testimonial.logo}
                  alt={`${testimonial.company} logo`}
                  width={130}
                  height={60}
                  className="object-contain"
                />
              </div>

              <p className="paragraph mt-9 italic lg:text-[26px] lg:leading-[1.43] lg:tracking-[0.75px]">
                “{testimonial.text}”
              </p>

              {/* {testimonial.link && (
                <ReadMoreLink
                  className="mt-10"
                  href={testimonial.link}
                  label="READ CASE STUDY"
                />
              )} */}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-end gap-4">
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
