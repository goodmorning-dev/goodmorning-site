'use client'

import Button from '@/components/Button'

export default function ServicesPage() {
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
