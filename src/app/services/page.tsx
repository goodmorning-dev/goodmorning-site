'use client'

import { useState } from 'react'
import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
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

      {/* Services Section */}
      <section className="py-40">
        <h1 className="header-2 m-auto mb-8 max-w-5xl text-center !text-[56px]">
          <span className="gradient-underline">Unlock new levels</span> with our
          blockchain development <span className="text-primary">services</span>
        </h1>
        <p className="paragraph m-auto mb-20 max-w-[870px] text-center !font-normal">
          There's more than one way to get things done. So pick your fighter
          from our menu and let's bring your ideas to life. Here's a quick look
          at our service areas.
        </p>
        <div className="mx-auto flex max-w-8xl gap-12">
          <div className="flex w-1/2 flex-col gap-12">
            <div
              className="rounded-3xl bg-gray"
              style={{
                clipPath:
                  'polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%)',
                WebkitClipPath:
                  'polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%)',
                borderRadius: '20px',
                overflow: 'hidden',
              }}
            >
              <div className="p-8">
                <h2 className="header-3 mb-5">
                  Web3 technical cofounder as a service
                </h2>
                <p className="paragraph mb-6 !font-normal">
                  Got the vision but need the technical brainpower? We step in
                  as your technical co-founder helping you shape your product
                  strategy, build scalable architecture, and lead your dev team
                  from day one.
                </p>
                <Link
                  href="#"
                  className="mt-5 font-bold tracking-[2.3px] text-primary transition-colors duration-300 hover:text-white"
                >
                  VIEW MORE <span className="ml-3 text-xl">→</span>
                </Link>
              </div>
              <Image
                src="/images/service-cofounder.png"
                width={700}
                height={400}
                alt="Web3 technical cofounder as a service"
                className="w-full object-cover"
              />
            </div>
            <div className="flex items-center gap-12">
              <div
                className="w-1/2 rounded-3xl bg-gray p-[30px]"
                style={{
                  clipPath:
                    'polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%)',
                  WebkitClipPath:
                    'polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                }}
              >
                <h2 className="header-3 mb-5 !text-[28px]">MVP development</h2>
                <p className="paragraph mb-6 !text-[19px] !font-normal">
                  Ideas are cool, but working products are cooler. We build
                  rock-solid MVPs that get you to market quickly - without
                  cutting corners.
                </p>
                <Link
                  href="#"
                  className="mt-5 font-bold tracking-[2.3px] text-primary transition-colors duration-300 hover:text-white"
                >
                  VIEW MORE <span className="ml-3 text-xl">→</span>
                </Link>
              </div>
              <div
                className="w-1/2 rounded-3xl bg-gray p-[30px]"
                style={{
                  clipPath:
                    'polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%)',
                  WebkitClipPath:
                    'polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                }}
              >
                <h2 className="header-3 mb-5 !text-[28px]">
                  Web3 technical auditing
                </h2>
                <p className="paragraph mb-6 !text-[19px] !font-normal">
                  Security is our forte, so you can count on us to deep dive
                  into your infrastructure and tell you exactly what's solid and
                  what needs fixing.
                </p>
                <Link
                  href="#"
                  className="mt-5 font-bold tracking-[2.3px] text-primary transition-colors duration-300 hover:text-white"
                >
                  VIEW MORE <span className="ml-3 text-xl">→</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex w-1/2 flex-col gap-12">
            <div
              className="rounded-3xl bg-gray"
              style={{
                clipPath:
                  'polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%)',
                WebkitClipPath:
                  'polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%)',
                borderRadius: '20px',
                overflow: 'hidden',
              }}
            >
              <div className="flex">
                <Image
                  src="/images/service-consultancy.png"
                  width={340}
                  height={340}
                  alt="Web3 technical cofounder as a service"
                  className="w-1/2 w-full object-cover"
                />
                <div className="p-8">
                  <h2 className="header-3 mb-5 !text-[28px]">
                    Web3 consultancy
                  </h2>
                  <p className="paragraph mb-6 !text-[19px] !font-normal">
                    Finding the Web3 maze a bit overwhelming? Whatever your
                    struggle, we break it down by offering expert guidance,
                    adding confidence, and taking away the headaches.
                  </p>
                  <Link
                    href="#"
                    className="mt-5 font-bold tracking-[2.3px] text-primary transition-colors duration-300 hover:text-white"
                  >
                    VIEW MORE <span className="ml-3 text-xl">→</span>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="rounded-3xl bg-gray"
              style={{
                clipPath:
                  'polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%)',
                WebkitClipPath:
                  'polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%)',
                borderRadius: '20px',
                overflow: 'hidden',
              }}
            >
              <div className="p-8 pb-14">
                <h2 className="header-3 mb-5">Staff (team) augmentation</h2>
                <p className="paragraph mb-6 !font-normal">
                  If you're in need of an extra pair of hands (or maybe ten),
                  let us plug in our Web3 devs, engineers and blockchain wizards
                  right into your team.
                  <br /> Scaling up feels even better without the long hiring
                  process.
                </p>
                <Link
                  href="#"
                  className="mt-5 font-bold tracking-[2.3px] text-primary transition-colors duration-300 hover:text-white"
                >
                  VIEW MORE <span className="ml-3 text-xl">→</span>
                </Link>
              </div>
              <Image
                src="/images/service-augmentation.png"
                width={700}
                height={400}
                alt="Staff (team) augmentation"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Section */}
      <section className="bg-gray py-40">
        <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-12 md:grid-cols-2">
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
