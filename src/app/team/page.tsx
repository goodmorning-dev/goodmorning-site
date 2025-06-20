'use client'

import Image from 'next/image'
import Button from '@/components/Button'
import TeamSection from '@/components/home/Team'

export default function TeamPage() {
  return (
    <main className="bg-black text-white">
      {/* Hero section */}
      <section className="py-36 text-center">
        <h1 className="header-1 mb-4">Makers, thinkers, explorers</h1>
        <p className="text-lg text-white/80">
          Not Just Devs. Digital Chaos Architects.
        </p>
        <div className="mx-auto mt-12 h-[4px] max-w-[400px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </section>

      {/* Level up block */}
      <section className="mx-auto mb-24 flex max-w-8xl flex-col items-center justify-between gap-10 px-6 md:flex-row">
        <div className="max-w-lg">
          <h2 className="header-2">
            <span className="text-primary">Level up</span> with our <br />
            innovative Web3 <br />
            development squad
          </h2>
          <p className="mt-6 text-lg text-white/80">
            As passionate devs, we’re all about turning big ideas into
            high-impact results. Our team blends technical expertise with a
            startup spirit, always staying one step ahead of the curve — whether
            it’s building new dApps, pioneering new tooling, or contributing to
            open source.
          </p>
        </div>
        <Image
          src="/images/team-photo.png"
          alt="GoodMorning Team"
          width={800}
          height={400}
          className="w-full max-w-3xl rounded-xl"
        />
      </section>

      {/* Make an impact */}
      <section className="px-6 pb-32 text-center">
        <h2 className="text-3xl font-bold">
          <span className="text-white/80">Make an </span>
          <span className="gradient-underline">impact</span>{' '}
          <span className="text-white/80">with a </span>
          <span className="text-primary">crew</span>{' '}
          <span className="text-white/80">that gets it</span>
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-white/80">
          We’ve all chosen to walk this path — to build what truly matters. From
          game-changing platforms to tooling that powers builders, we’re a
          diverse Web3 crew with a strong engineering backbone and clear product
          thinking.
        </p>
      </section>

      {/* Values grid */}
      <section className="bg-gray py-36">
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-24 px-6 md:grid-cols-2"></div>
      </section>

      {/* Team section */}
      <section className="py-36">
        <div className="mx-auto max-w-8xl">
          <div className="text-center">
            <h2 className="header-2 mb-8 tracking-[1.2px]">
              The <span className="text-primary">goodmorning</span>{' '}
              <span className="gradient-underline">team</span>
            </h2>
            <p className="paragraph mb-20">of makers, thinkers and explorers</p>
          </div>

          <TeamSection short />
        </div>
      </section>

      {/* TODO: show be bg gray */}
      {/* CTA section */}
      <section className="relative py-64">
        <div
          className="pointer-events-none absolute inset-0 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/cta-future-bg.png')" }}
        />

        <div className="relative z-10 mx-auto flex max-w-8xl items-center justify-between">
          <h2 className="header-2 max-w-md">
            Let’s build the <br /> future together
          </h2>

          <div className="max-w-[500px]">
            <p className="text-[24px] leading-[1.33] tracking-[0.6px]">
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
