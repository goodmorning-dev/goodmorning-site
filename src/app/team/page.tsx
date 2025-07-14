'use client'

import Image from 'next/image'
import Button from '@/components/Button'
import TeamSection from '@/components/Team'
import { teamValues } from '@/constants/values'

export default function TeamPage() {
  return (
    <main>
      {/* Hero section */}
      <section
        className="relative pb-24 pt-24 lg:pt-48"
        style={{
          backgroundImage: "url('/images/team-hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mb-48 text-center lg:mb-[430px]">
          <h1 className="header-1 mb-8">Makers, thinkers, explorers</h1>
          <p className="paragraph lg:text-[20px]">
            Not Just Devs. Digital Chaos Architects.
          </p>
        </div>

        <div className="mx-auto flex max-w-8xl flex-col justify-between gap-20 px-5 lg:flex-row lg:px-0">
          <div className="max-w-xl">
            <h2 className="header-2 text-center lg:text-left">
              <span className="text-primary">Level up</span> with our <br />
              <span className="gradient-underline">innovative</span> Web3 <br />
              development squad
            </h2>
          </div>

          <div className="paragraph max-w-[600px] text-center !font-normal lg:text-left">
            At goodmorning, we’re all about turning big ideas into
            high-performing tech solutions. Growth through the exciting
            challenges of your projects is part of our journey. But we always
            keep our eyes on the ultimate goal – building cutting-edge
            technological products that we’re proud of.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-8xl px-5 pb-16 pt-12 lg:px-0 lg:pb-36">
        <div className="mb-32">
          <Image
            src="/images/team-image.png"
            alt="GoodMorning team overhead photo"
            width={1400}
            height={935}
            className="mx-auto w-full rounded-xl"
            priority
          />
        </div>

        <div className="mx-auto flex flex-col justify-between gap-20 lg:flex-row">
          <div className="max-w-xl">
            <h2 className="header-2 text-center lg:text-left">
              <span className="gradient-underline">Make an impact</span> with{' '}
              <br />a <span className="text-primary">crew</span> that gets it
            </h2>
          </div>

          <div className="paragraph max-w-[640px] text-center !font-normal lg:text-left lg:text-[20px]">
            We’re all obsessed with what we do — but we also know that great
            tech isn’t just about clean code, it’s about the minds behind it.
            Collaboration, bold thinking, and radical trust drive everything we
            build. When you work with us, you’re not just hiring devs — you’re
            teaming up with a crew that’s all in, from first spark to final
            launch (and beyond).
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className="bg-gray px-5 py-36 lg:px-0">
        <div className="mx-auto max-w-8xl space-y-28">
          {teamValues.map((item, index) => {
            const isEven = index % 2 === 0

            return (
              <div
                key={index}
                className={`flex flex-col-reverse items-center gap-12 lg:flex-row lg:gap-32 ${
                  !isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="max-w-[650px]">
                  <div className="mb-4 flex items-start gap-4 lg:gap-8">
                    <span className="pt-10 text-[42px] font-extrabold text-secondary lg:text-[75px]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="mt-6 h-16 w-[2px] bg-white/20" />
                    <div>
                      <span className="text-[32px] font-extrabold leading-tight tracking-wide text-primary lg:text-[42px]">
                        {item.highlight}
                      </span>
                      <span className="text-[32px] font-extrabold leading-tight tracking-wide text-white lg:text-[42px]">
                        {item.subtitle}
                      </span>
                      <p className="paragraph mt-4 lg:text-[20px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={500}
                    className="h-auto w-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Team section */}
      <section className="px-5 py-16 lg:px-0 lg:py-36">
        <div className="mx-auto max-w-8xl">
          <div className="text-center">
            <h2 className="header-2 mb-8 tracking-[1.2px]">
              The <span className="text-primary">goodmorning</span>{' '}
              <span className="gradient-underline">team</span>
            </h2>
            <p className="paragraph mb-20">of makers, thinkers and explorers</p>
          </div>

          <TeamSection />
        </div>
      </section>

      {/* CTA section */}
      <section className="relative bg-gray px-5 py-16 lg:px-0 lg:py-64">
        <div
          className="pointer-events-none absolute inset-0 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/cta-future-bg-gray.png')" }}
        />

        <div className="relative z-10 mx-auto flex max-w-8xl flex-col items-center justify-between gap-10 text-center lg:flex-row lg:gap-0 lg:text-left">
          <h2 className="header-2 max-w-xl">Let’s build something legendary</h2>

          <div className="max-w-[500px]">
            <p className="paragraph leading-[1.33] tracking-[0.6px] lg:text-[24px]">
              We bring the code, the brains, and the energy. You bring the
              vision. Together, let's make Web3 better, smarter, and way more
              exciting.
            </p>
            <Button className="mt-9" variant="primary">
              Get in touch
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
