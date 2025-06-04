'use client'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Image from 'next/image'
import { testimonials } from '@/constants/testimonials'

export default function TestimonialsSlider() {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 2,
      spacing: 70,
    },
  })

  const handlePrev = () => slider.current?.prev()
  const handleNext = () => slider.current?.next()

  return (
    <div className="relative mt-16 w-full px-4">
      <div ref={sliderRef} className="keen-slider">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="keen-slider__slide flex justify-center">
            <div
              className="relative flex-col rounded-[20px] bg-gray p-12"
              style={{
                clipPath:
                  'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)',
              }}
            >
              <div className="flex justify-between">
                <div>
                  <h4 className="text-[25px] font-semibold leading-10 tracking-wide">
                    {testimonial.name}
                  </h4>
                  <p className="text-textGray text-2xl">
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

              <p className="mt-9 text-[26px] italic leading-[1.43] tracking-[0.75px]">
                “{testimonial.text}”
              </p>

              {testimonial.link && (
                <a
                  href={testimonial.link}
                  className="mt-10 inline-flex font-bold tracking-[2.3px] text-teal-400"
                >
                  READ CASE STUDY <span className="ml-4 text-xl">→</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-end gap-4">
        <button onClick={handlePrev}>
          <Image
            src="/icons/arrow-left.png"
            alt="Previous"
            width={50}
            height={50}
            draggable={false}
          />
        </button>
        <button onClick={handleNext}>
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
