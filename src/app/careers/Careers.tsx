'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Button from '@/components/Button'
import FeatureCard from '@/components/home/FeatureCard'
import TestimonialsSlider from './components/GallerySlider'
import Input from '@/components/Input'
import features from './constants/features'
import positions from '@/constants/positions'
import ReadMoreLink from '@/components/ReadMoreLink'
import { FaPlus, FaMinus } from 'react-icons/fa'

export default function CareersPage() {
  const router = useRouter()
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = () => {
    setIsSubmitting(true)
  }

  const toggle = (index: number) => {
    if (openIndex === index) {
      return
    }

    if (openIndex !== null) {
      setOpenIndex(index)
    } else {
      setOpenIndex(index)
    }
  }
  return (
    <main className="scroll-smooth">
      {/* Hero Section */}
      <section
        className="relative mx-auto py-16 lg:py-40"
        style={{
          backgroundImage: "url('/images/careers-hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto flex w-full max-w-8xl flex-col items-center justify-between gap-12 px-5 lg:flex-row">
          <div>
            <h1 className="header-1 max-w-2xl">Are YOU our new teammate?</h1>
            <Button
              className="mt-8"
              variant="secondary"
              outlined
              onClick={() => router.push('#join-form')}
            >
              See open positions
            </Button>
          </div>

          <div className="max-w-xl">
            <p className="paragraph max-w-lg lg:text-[24px]">
              We're not just building products - we're shaping the future, and
              we're always looking for fresh perspectives and people who love
              pushing boundaries to join the ride. Whether you're a blockchain
              guru or a high school student, passionate to learn and innovate,
              there's a spot for you here.
            </p>
            <Button
              className="mt-8"
              variant="primary"
              onClick={() => router.push('/contact')}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      <section className="py-36">
        <div className="mx-auto flex max-w-8xl flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-0">
          <div className="flex max-w-[640px] flex-col items-center justify-center space-y-8 lg:items-start lg:justify-start">
            <h2 className="header-2 text-center lg:text-left">
              <span className="gradient-underline">Welcome</span> to{' '}
              <span className="text-primary">goodmorning</span>
            </h2>
            <p className="paragraph font-regular text-center lg:text-left lg:!text-[20px]">
              With 10+ years in the technological world and a team that has
              stuck together through most of it, we know how to turn ideas into
              game-changing solutions. Our skills, styles, and strengths are in
              perfect sync, making innovation feel seamless.
            </p>
            <Button
              className="m-auto mt-2 lg:m-0"
              outlined
              variant="secondary"
              onClick={() => router.push('/about-us')}
            >
              About Us
            </Button>
          </div>
          <div className="ml-0 flex flex-1 justify-end">
            <div className="max-w-[600px]">
              <Image
                src="/images/careers-welcome.png"
                alt="Hero image"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature section */}
      <section className="bg-gray py-40">
        <div className="mx-auto mb-40 flex w-full max-w-8xl flex-col items-center justify-between px-5 lg:flex-row lg:px-0">
          <div>
            <h2 className="header-2 max-w-2xl text-center lg:text-left">
              <span className="gradient-underline">Join a team</span> that
              values <span className="text-primary">innovation</span>,{' '}
              <span className="text-primary">collaboration</span>, and work-life{' '}
              <span className="text-primary">balance</span>.
            </h2>
          </div>

          <div>
            <p className="paragraph max-w-[645px]">
              Turnover isn't our thing - most of our teammates have been a part
              of goodmorning for 7 years, and that's no accident. We've built a
              team where people feel valued, challenged, and excited to grow -
              both professionally and personally. At the end of the day, we're
              all here to build fulfilling lives and sharing the journey with
              each other has made this goal so much fun!
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-8xl">
          <div className="h-[2px] w-full bg-white/10" />
        </div>

        <div className="mx-auto mt-40 grid max-w-8xl gap-20 px-5 md:grid-cols-2 lg:px-0">
          {features.map((f, idx) => (
            <FeatureCard key={idx} {...f} />
          ))}
        </div>
      </section>

      {/* Trusted companies section */}
      <section className="relative overflow-hidden py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/galaxy-bg.png')" }}
        />
        <div className="mx-auto flex max-w-[850px] flex-col items-center justify-between gap-5 px-5 lg:flex-row lg:px-0 lg:text-left">
          <div className="z-10 max-w-xl">
            <h2 className="header-3 mb-2">Check out our open positions</h2>
            <p className="paragraph lg:text-[20px]">Become part of our team</p>
          </div>
          <Button variant="primary" onClick={() => router.push('#join-form')}>
            Apply Now
          </Button>
        </div>
      </section>

      {/* CTA section */}
      <section className="relative mx-auto px-5 pb-16 pt-36 lg:px-0">
        <div>
          <h2 className="header-2 mb-7 text-center leading-[1.2]">
            <span className="gradient-underline">Explore</span> our vibrant team{' '}
            <span className="text-primary">culture</span>
          </h2>
        </div>
        <TestimonialsSlider />
      </section>

      {/* Web3 Impact Section */}
      <section className="bg-black px-5 py-36 text-white lg:px-0">
        <div className="mb-24 text-center">
          <h2 className="header-2 mx-auto">
            <span className="gradient-underline">What's life</span> at{' '}
            <span className="text-primary">goodmorning</span> like?
          </h2>
          <p className="paragraph mx-auto mt-8 max-w-[735px] text-base tracking-wide lg:text-[20px]">
            At goodmorning, work isn't just about getting things done - it's
            about pushing boundaries, having fun, and building a future we're
            truly excited to be a part of. Here's what waits ahead:
          </p>
        </div>
        <div className="mx-auto flex max-w-8xl flex-col items-center justify-between lg:flex-row">
          <div className="flex flex-col gap-10">
            <div
              className="min-h-[430px] w-full max-w-[440px] items-center rounded-2xl bg-gray px-6 py-10 text-center"
              style={{
                clipPath:
                  'polygon(0 0, calc(100% - 55px) 0, 100% 55px, 100% 100%, 0 100%)',
                WebkitClipPath:
                  'polygon(0 0, calc(100% - 55px) 0, 100% 55px, 100% 100%, 0 100%)',
                borderRadius: '20px',
                overflow: 'hidden',
              }}
            >
              <div className="mb-10 flex items-center justify-center">
                <Image
                  src="/icons/purple-hearth.png"
                  alt="Purple Heart Icon"
                  width={96}
                  height={96}
                />
              </div>
              <div className="flex h-full max-h-[460px] flex-col justify-between">
                <h3 className="header-4 mx-auto mb-4">Personal approach</h3>
                <p className="paragraph lg:text-[20px]">
                  We might not be fluent in corporate jargon, but we speak the
                  language of big ideas. If you're passionate about building the
                  future of Web3, let's skip the formalities and have a chat -
                  we know great minds don't always fit inside a resume.
                </p>
              </div>
            </div>
            <div
              className="min-h-[430px] w-full max-w-[440px] items-center rounded-2xl bg-gray px-6 py-10 text-center"
              style={{
                clipPath:
                  'polygon(0 0, calc(100% - 55px) 0, 100% 55px, 100% 100%, 0 100%)',
                WebkitClipPath:
                  'polygon(0 0, calc(100% - 55px) 0, 100% 55px, 100% 100%, 0 100%)',
                borderRadius: '20px',
                overflow: 'hidden',
              }}
            >
              <div className="mb-10 flex items-center justify-center">
                <Image
                  src="/icons/purple-laptop.png"
                  alt="Purple Laptop Icon"
                  width={96}
                  height={96}
                />
              </div>
              <div className="flex h-full max-h-[460px] flex-col justify-between">
                <h3 className="header-4 mx-auto mb-4">Workshops & Meetups</h3>
                <p className="paragraph lg:text-[20px]">
                  Curiosity is our fuel both inside and outside of work. We hold
                  regular workshops as a space to dive into anything that sparks
                  our interest - from blockchain innovations to tips on making
                  the perfect cup of espresso.
                </p>
              </div>
            </div>
          </div>
          <Image
            src="/images/careers-life.png"
            alt="Careers Life"
            width={440}
            height={840}
          />
          <div className="flex flex-col gap-10">
            <div
              className="min-h-[430px] w-full max-w-[440px] items-center rounded-2xl bg-gray px-6 py-10 text-center"
              style={{
                clipPath:
                  'polygon(0 0, calc(100% - 55px) 0, 100% 55px, 100% 100%, 0 100%)',
                WebkitClipPath:
                  'polygon(0 0, calc(100% - 55px) 0, 100% 55px, 100% 100%, 0 100%)',
                borderRadius: '20px',
                overflow: 'hidden',
              }}
            >
              <div className="mb-10 flex items-center justify-center">
                <Image
                  src="/icons/purple-people.png"
                  alt="Purple People Icon"
                  width={96}
                  height={96}
                />
              </div>
              <div className="flex h-full max-h-[500px] flex-col justify-between">
                <h3 className="header-4 mx-auto mb-4">
                  Communities, communities, communities
                </h3>
                <p className="paragraph lg:text-[20px]">
                  We're all bonded by our thirst for knowledge and growth, but
                  our unique quirks are what makes day-to-day life exciting.
                  That's why we created our dev_clubs where we geek out over
                  sports, cooking, technology, the latest gadgets and everything
                  in between.
                </p>
              </div>
            </div>
            <div
              className="min-h-[430px] w-full max-w-[440px] items-center rounded-2xl bg-gray px-6 py-10 text-center"
              style={{
                clipPath:
                  'polygon(0 0, calc(100% - 55px) 0, 100% 55px, 100% 100%, 0 100%)',
                WebkitClipPath:
                  'polygon(0 0, calc(100% - 55px) 0, 100% 55px, 100% 100%, 0 100%)',
                borderRadius: '20px',
                overflow: 'hidden',
              }}
            >
              <div className="mb-10 flex items-center justify-center">
                <Image
                  src="/icons/purple-message.png"
                  alt="Purple Message Icon"
                  width={96}
                  height={96}
                />
              </div>
              <div className="flex h-full max-h-[460px] flex-col justify-between">
                <h3 className="header-4 mx-auto mb-4">Vox Populi</h3>
                <p className="paragraph lg:text-[20px]">
                  Everyone at goodmorning has a voice and each decision we make
                  is a team effort. We know first hand transparency isn't always
                  easy. But it might just be the secret ingredient in our recipe
                  for sticking together as a team for over a decade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers section */}
      <section className="bg-gray px-5 py-16 lg:px-0 lg:py-40">
        <div className="mx-auto grid max-w-8xl grid-cols-1 items-center md:grid-cols-2">
          <div className="max-w-[555px]">
            <h2 className="header-2 max-w-2xl text-center lg:text-left">
              <span className="gradient-underline">goodmorning</span>
              <br />
              <span className="text-primary">careers</span>
            </h2>
            <p className="paragraph mt-6 lg:text-[20px]">
              Join our innovative team and contribute to groundbreaking Web3
              projects that shape the future. We value passion, skill, ambition,
              and a solid work ethic - not just years on a resume. Whether
              you're a seasoned pro or just starting out, we'd love to meet you!
            </p>
            <Image
              src="/images/careers-astronaut.png"
              alt="Our opened positions"
              className="mx-auto mt-10"
              width={430}
              height={640}
            />
          </div>

          <div className="space-y-6">
            {positions.map((position, index) => (
              <div
                key={index}
                className="rounded-lg bg-lightGray p-7 lg:w-[700px]"
              >
                <button
                  onClick={() => toggle(index)}
                  className="header-4 flex w-full items-center justify-between text-left focus:outline-none"
                >
                  {position.category}
                  {openIndex === index ? (
                    <FaMinus className="text-primary" size={20} />
                  ) : (
                    <FaPlus className="text-primary" size={20} />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? 'max-h-[1000px] opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  {position.jobs.length > 0 ? (
                    <div className="mt-6 space-y-8">
                      {position.jobs.map((job, jobIndex) => (
                        <div key={jobIndex}>
                          <hr
                            key={`divider-${jobIndex}`}
                            className="my-8 border-white/10"
                          />
                          <h3 className="header-4 lg:text-[24px]">
                            {job.title}
                          </h3>
                          <p className="paragraph mt-1 !font-normal italic text-secondary">
                            {job.location}
                          </p>
                          <p className="paragraph my-4 !font-normal lg:text-[20px]">
                            {job.shortDescription}
                          </p>
                          <ReadMoreLink href={job.link} label="READ MORE" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-4 italic text-white/50">
                      No open positions
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join team section */}
      <section id="join-form" className="py-36">
        <div className="mx-auto flex max-w-8xl flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-0">
          <div className="flex w-full flex-col items-center justify-center space-y-8 px-5 lg:w-1/2 lg:items-start lg:justify-start lg:px-0">
            <h2 className="header-2 max-w-2xl text-center lg:text-left">
              <span className="gradient-underline">Join</span> the
              <br /> goodmorning <span className="text-primary">team</span>
            </h2>
            <p className="paragraph !my-6 lg:text-[20px]">
              Not finding the job that best suits you? Fill out the form below
              and tell us what skills you have to complement our team.
            </p>
            <form
              id="upload"
              encType="multipart/form-data"
              action="https://formsend.xyz/submit-form/gm@goodmorning.dev"
              method="POST"
              onSubmit={handleSubmit}
              className="mx-auto w-full space-y-12"
            >
              <Input
                name="name"
                label="Your name"
                type="text"
                required
                placeholder="Enter your name"
              />
              <Input
                name="email"
                label="Your email"
                type="email"
                required
                placeholder="Enter your email"
              />

              <Input name="cv-modal" label="Upload CV" type="upload" required />

              <Input
                name="message"
                label="Do you want to share something else with us?"
                type="textarea"
              />

              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-xl lg:gap-6">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    required
                    className="h-[25px] w-[25px] appearance-none rounded-md bg-lightGray transition duration-150 checked:bg-primary focus:outline-none lg:h-[35px] lg:w-[35px]"
                  />
                  <label htmlFor="terms" className="paragraph lg:text-[20px]">
                    I agree to{' '}
                    <a href="/terms" className="text-primary hover:underline">
                      Terms
                    </a>
                  </label>
                </div>

                <div className="mt-10 text-center lg:text-left">
                  <Button>{isSubmitting ? 'Submitting...' : 'Submit'}</Button>
                </div>
              </div>
            </form>
          </div>
          <div className="ml-0 flex flex-1 justify-end">
            <div className="max-w-[600px]">
              <Image
                src="/images/team-join.png"
                alt="Hero image"
                width={570}
                height={840}
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
