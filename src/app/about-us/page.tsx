'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import Button from '@/components/Button'
import { web3Impact } from '@/constants/web3Impact'
import { timelineData } from '@/constants/timelineData'
import { useIsMobile } from '@/hooks/useIsMobile'
import Blog from '@/components/Blog'

interface TimelineItem {
  year: string
  title: string
  description: string
  image: string
}

export default function AboutPage() {
  const [hasMounted, setHasMounted] = useState(false)
  const isMobile = useIsMobile()

  const leftColumn = timelineData.filter((_, i) => i % 2 === 0)
  const rightColumn = timelineData.filter((_, i) => i % 2 !== 0)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  const renderItem = (item: TimelineItem, isRight: boolean, index: number) => (
    <div
      key={index}
      className={`flex flex-col items-start ${isRight ? 'mt-24 items-end text-right' : ''}`}
    >
      <div className="max-w-[520px]">
        <div className="relative mb-5 h-[40px]">
          <div
            className={`absolute bottom-0 h-[9px] w-[9px] rounded-full bg-primary ${
              isRight ? 'right-0' : 'left-0'
            }`}
          />
          <div
            className={`absolute h-[35px] w-[1px] bg-primary/80 ${
              isRight ? 'right-[4px]' : 'left-[4px]'
            }`}
          />
          <div
            className={`absolute bottom-[40px] h-[1px] w-full bg-gradient-to-r from-transparent to-primary/80 lg:w-[500px] ${
              isRight ? 'right-[4px]' : 'left-[4px] rotate-180'
            }`}
          />
        </div>
        <h3 className="text-[40px] font-extrabold tracking-wider text-primary">
          {item.year}
        </h3>
        <h4 className="header-4 mt-4">{item.title}</h4>
        <p className="mt-4 text-lg leading-8 tracking-[0.6px]">
          {item.description}
        </p>
      </div>
      <div className="mt-6 w-full max-w-[500px]">
        <Image
          src={item.image}
          alt={`Year ${item.year}`}
          width={500}
          height={300}
          className="w-full rounded-xl object-cover"
        />
      </div>
    </div>
  )

  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative mx-auto py-16 lg:py-52"
        style={{
          backgroundImage: "url('/images/about-hero-gradient.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto flex w-full max-w-8xl flex-col items-center justify-between gap-12 px-5 lg:flex-row">
          <div>
            <h1 className="header-1 max-w-2xl">
              Empowering the next wave of Web3 innovation
            </h1>
          </div>

          <div className="max-w-xl">
            <p className="paragraph max-w-lg text-justify lg:text-[24px]">
              At goodmorning, we turn blockchain technology into real-world
              impact – helping visionary teams across the globe build bold,
              decentralized futures.
            </p>
            <Button className="mt-8" variant="primary">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative z-10 bg-black px-5 pb-40 pt-36 text-white">
        <div className="mb-24 text-center">
          <h2 className="header-2">
            <span className="gradient-underline">Our journey</span> through
            <br />
            space and <span className="text-primary">time</span>
          </h2>
          <p className="paragraph mx-auto mt-8 max-w-[870px] !font-normal text-white/80">
            We've been in the game for over 15 years – navigating shifts and
            challenges, seizing opportunities, and staying ahead of the curve.
            Our journey has been fueled by resilience, expertise, but above all
            else – a truly relentless drive to innovate.
          </p>
        </div>

        {/* Timeline items */}
        {hasMounted && (
          <div
            className="mx-auto grid max-w-7xl grid-cols-1 gap-x-10 gap-y-20 bg-contain bg-center bg-no-repeat lg:grid-cols-2"
            style={{ backgroundImage: "url('/images/spiral-bg.png')" }}
          >
            {isMobile
              ? timelineData.map((item, index) =>
                  renderItem(item, false, index),
                )
              : [leftColumn, rightColumn].map((column, colIdx) => (
                  <div key={colIdx} className="flex flex-col gap-24">
                    {column.map((item, index) =>
                      renderItem(item, colIdx === 1, index),
                    )}
                  </div>
                ))}
          </div>
        )}
      </section>

      {/* Web3 Impact Section */}
      <section className="bg-black px-5 py-36 text-white">
        <div className="mb-24 text-center">
          <h2 className="header-2 mx-auto max-w-2xl">
            <span className="gradient-underline">Beyond the code:</span> our{' '}
            <span className="text-primary">Web3 impact</span>
          </h2>
          <p className="paragraph mx-auto mt-8 max-w-4xl text-base tracking-wide">
            We're not just playing in the Web3 space - we're redefining the
            rules. From game-changing dApps to Ethereum standards, here's what
            we've been up to when no one's watching (except the dev community,
            apparently).
          </p>
        </div>

        <div className="mx-auto max-w-8xl columns-1 gap-10 space-y-10 lg:columns-3">
          {web3Impact.map((item, idx) => (
            <div
              key={idx}
              className="break-inside-avoid overflow-hidden rounded-2xl"
              style={{
                clipPath:
                  'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)',
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={200}
                className={clsx(
                  'h-auto w-full rounded-t-[25px] object-cover',
                  (idx === 0 || idx === 4) && 'mt-10',
                )}
              />

              <div className="rounded-b-[25px] bg-gray p-6">
                {item.tags && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="relative inline-block h-[31px] min-w-[85px]"
                      >
                        <span
                          className="absolute inset-0 z-0 rounded-sm bg-secondary"
                          style={{
                            clipPath:
                              'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
                            WebkitClipPath:
                              'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
                          }}
                        />
                        <span
                          className="relative z-10 inline-flex h-full w-full items-center justify-center whitespace-nowrap rounded-sm bg-gray px-[10px] text-[10px] uppercase tracking-[1.4px] text-white"
                          style={{
                            clipPath:
                              'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
                            WebkitClipPath:
                              'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
                            width: 'calc(100% - 2px)',
                            height: 'calc(100% - 2px)',
                            left: '1px',
                            right: '1px',
                            bottom: '2.5px',
                          }}
                        >
                          {tag}
                        </span>
                      </span>
                    ))}
                  </div>
                )}

                <h4 className="header-4">{item.title}</h4>
                <p className="mt-3 text-xl leading-7 tracking-[0.4px]">
                  {item.subtitle}
                </p>

                <Link
                  href={item.link}
                  className="mt-5 inline-block text-sm font-semibold tracking-[1px] text-primary transition-colors duration-300 hover:text-white"
                >
                  VIEW PROJECT <span className="ml-3 text-xl">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog section */}
      <section className="bg-gray py-36">
        <div className="mx-auto max-w-8xl">
          <div className="text-center">
            <h2 className="header-2 mb-8 tracking-[1.2px]">
              <span className="text-primary">Insights</span> from our{' '}
              <span className="gradient-underline">experts</span>
            </h2>
            <p className="paragraph mb-20">
              Dive into our treasure chest of Web3 solutions <br /> and explore
              what's next
            </p>
          </div>
          <Blog />
        </div>
      </section>

      {/* CTA section */}
      <section className="relative px-5 py-16 lg:px-0 lg:py-64">
        <div
          className="pointer-events-none absolute inset-0 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/cta-future-bg.png')" }}
        />

        <div className="relative z-10 mx-auto flex max-w-8xl flex-col items-center justify-between gap-10 lg:flex-row lg:gap-0">
          <h2 className="header-2 max-w-xl">
            {' '}
            Let’s build the <br /> future together
          </h2>

          <div className="max-w-[500px] text-center lg:text-left">
            <p className="paragraph leading-[1.33] tracking-[0.6px] lg:text-[24px]">
              Got a project in mind? Let’s chat and see how we can bring it to
              life – faster, smarter, and Web3 ready.
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
