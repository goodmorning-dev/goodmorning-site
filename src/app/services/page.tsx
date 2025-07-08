'use client'

import { useState } from 'react'
import Button from '@/components/Button'
import steps from '@/constants/successAcordion'
import { FaPlus, FaMinus } from 'react-icons/fa'

export default function ServicesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative mx-auto py-52"
        style={{
          backgroundImage: "url('/images/services-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto flex w-full max-w-8xl items-start justify-between gap-12">
          <div>
            <h1 className="header-1 max-w-3xl">Web3 development services</h1>
          </div>

          <div className="max-w-xl">
            <p className="max-w-lg text-justify text-2xl tracking-[0.6px]">
              Build smarter, scale faster with goodmorning - your Web3
              development services company. Explore our blockchain solutions
              designed to bring your ideas to life — from MVPs to full-scale
              infrastructure.
            </p>
            <Button className="mt-8" variant="primary">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Success Section */}
      <section className="bg-gray py-40">
        <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-14 md:grid-cols-2">
          <div>
            <img
              src="/images/accordion-image.png"
              alt="Our recipe for success"
              className="w-full rounded-3xl object-cover"
            />
          </div>

          <div>
            <h2 className="header-2 mb-5 !text-[56px]">
              Our recipe for success
            </h2>
            <p className="paragraph mb-8 leading-relaxed">
              There’s no room for guesswork in the Web3 world. Here’s our
              battle-tested process that will take your idea from concept to
              launch:
            </p>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index}>
                  <button
                    onClick={() => toggle(index)}
                    className="header-3 flex w-full items-center justify-between text-left tracking-[0.86px] focus:outline-none"
                  >
                    {step.title}
                    {openIndex === index ? (
                      <FaMinus className="text-primary" size={20} />
                    ) : (
                      <FaPlus className="text-primary" size={20} />
                    )}
                  </button>

                  <div
                    className={`mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="max-w-[590px] pt-4 text-[19px] italic leading-[26px] text-white/80">
                      {step.content}
                    </p>
                  </div>
                  <div
                    className="my-8 w-full border-t"
                    style={{ borderColor: '#d8d8d8', opacity: 0.3 }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="relative py-64">
        <div
          className="pointer-events-none absolute inset-0 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/cta-future-bg.png')" }}
        />

        <div className="relative z-10 mx-auto flex max-w-8xl items-center justify-between">
          <h2 className="header-2 max-w-xl">
            Let's elevate your
            <br />
            Web3 journey
          </h2>

          <div className="max-w-[500px]">
            <p className="text-[24px] leading-[1.33] tracking-[0.6px]">
              Ready to bring your ideas to life? Let's chat and explore how our
              blockchain development services can help you level up in the Web3
              space.
            </p>
            <Button className="mt-9" variant="primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
