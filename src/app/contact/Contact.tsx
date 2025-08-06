'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import Input from '@/components/Input'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = () => {
    setIsSubmitting(true)
  }

  return (
    <>
      {/* Contact Hero */}
      <section
        className="relative bg-black py-16 lg:py-48"
        style={{
          backgroundImage: "url('/images/contact-planet.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left top',
          backgroundSize: 'contain',
        }}
      >
        <div className="mx-auto flex max-w-8xl justify-end px-5 text-center lg:!pl-0 lg:!pr-24 lg:text-left">
          <div className="max-w-[560px]">
            <h1 className="header-1 mb-8">GM, frens</h1>
            <p className="paragraph mb-24 max-w-[510px] !leading-relaxed lg:text-[24px]">
              <strong>Let us bring your vision to life.</strong> <br />
              Different time zones can’t scare us off. When you need us, we show
              up. Because real partnerships don’t run on a 9-to-5 schedule.
            </p>

            <div className="space-y-16 text-left">
              <div className="flex items-start gap-5">
                <Image
                  src="/icons/email.png"
                  alt="Email Icon"
                  width={56}
                  height={56}
                />
                <div>
                  <p className="header-4 mb-5 lg:text-[26px]">
                    Reach us anytime
                  </p>
                  <a
                    href="mailto:gm@goodmorning.dev"
                    className="paragraph text-primary hover:underline lg:text-[24px]"
                  >
                    gm@goodmorning.dev
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <Image
                  src="/icons/telegram.png"
                  alt="Telegram Icon"
                  width={56}
                  height={56}
                />
                <div>
                  <p className="header-4 mb-5 lg:text-[26px]">
                    Find us on{' '}
                    <a
                      href="https://t.me/goranstoyanov"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary transition hover:underline"
                    >
                      Telegram
                    </a>{' '}
                    and let’s chat
                  </p>

                  <a
                    href="tel:+359876261055"
                    className="paragraph text-primary hover:underline lg:text-[24px]"
                  >
                    +(359) 876 261 055
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <Image
                  src="/icons/form.png"
                  alt="Form Icon"
                  width={56}
                  height={56}
                />
                <div>
                  <p className="header-4 mb-5 lg:text-[26px]">
                    Or fill out the form below
                  </p>
                  <p className="paragraph lg:text-[24px]">
                    And we’ll get back to you as soon as we can
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray px-5 py-16 lg:px-0 lg:py-40">
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <h2 className="header-2 mx-auto max-w-md text-[56px]">
            <span className="gradient-underline">Looking</span> for your next{' '}
            <span className="text-primary">big move?</span>
          </h2>
          <p className="mt-8 text-xl font-semibold">
            It&apos;s only a few clicks away.
          </p>
          <p className="paragraph mx-auto mt-8 max-w-[730px] lg:text-[20px]">
            Whether you&apos;re in need of a technical co-founder, an entire
            team to join forces with, or someone with the know-how to build an
            MVP from scratch, we&apos;re all ears. Drop us a message and
            let&apos;s build together. We promise we read everything.
          </p>
        </div>

        <form
          action="https://formsend.xyz/submit-form/gm@goodmorning.dev"
          method="post"
          onSubmit={handleSubmit}
          className="mx-auto max-w-4xl space-y-12"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <Input name="name" label="Your name" required />
            <Input name="company" label="Company Name / Website URL" />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Input name="email" label="Email" type="email" required />
            <Input name="phone" label="Phone number" type="tel" required />
          </div>

          <Input
            name="iam"
            label="I am..."
            type="select"
            required
            options={[
              { label: 'A founder', value: 'founder' },
              { label: 'An investor', value: 'investor' },
              { label: 'Looking for a team', value: 'team' },
            ]}
          />

          <Input
            name="message"
            label="Tell us briefly about your enquiry"
            type="textarea"
            required
          />

          <div className="flex flex-col justify-between lg:flex-row">
            <div className="flex items-center gap-2 text-xl lg:gap-6">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                required
                className="h-[25px] w-[25px] appearance-none rounded-md border border-white/40 transition duration-150 checked:border-primary checked:bg-primary focus:outline-none lg:h-[35px] lg:w-[35px]"
              />
              <label htmlFor="terms" className="paragraph lg:text-[20px]">
                I Accept the{' '}
                <a href="/terms" className="text-primary hover:underline">
                  Terms
                </a>
              </label>
            </div>

            <div className="mt-10 text-center lg:mt-0 lg:text-right">
              <Button>{isSubmitting ? 'Submitting...' : 'Submit'}</Button>
            </div>
          </div>
        </form>
      </section>
    </>
  )
}
