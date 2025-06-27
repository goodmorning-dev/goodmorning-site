import Image from 'next/image'
import Button from '@/components/Button'

export default function ContactPage() {
  return (
    <>
      {/* Contact Hero */}
      <section
        className="relative bg-black py-48"
        style={{
          backgroundImage: "url('/images/contact-planet.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left center',
          backgroundSize: 'contain',
        }}
      >
        <div className="mx-auto flex max-w-8xl justify-end pr-24">
          <div className="max-w-[560px]">
            <h1 className="header-1 mb-8">GM, frens</h1>
            <p className="mb-24 max-w-[510px] text-[24px] leading-relaxed">
              <strong>Let us bring your vision to life.</strong> <br />
              Different time zones can’t scare us off. When you need us, we show
              up. Because real partnerships don’t run on a 9-to-5 schedule.
            </p>

            <div className="space-y-16 text-white">
              <div className="flex items-start gap-5">
                <Image
                  src="/icons/email.png"
                  alt="Email Icon"
                  width={56}
                  height={56}
                />
                <div>
                  <p className="mb-5 text-[26px] font-semibold">
                    Reach us any time
                  </p>
                  <a
                    href="mailto:hello@goodmorning.dev"
                    className="text-2xl text-primary hover:underline"
                  >
                    hello@goodmorning.dev
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
                  <p className="mb-5 text-[26px] font-semibold">
                    Find us on Telegram and let’s chat
                  </p>
                  <a
                    href="tel:+359888010203"
                    className="text-2xl text-primary hover:underline"
                  >
                    +(359) 888 010 203
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
                  <p className="mb-5 text-[26px] font-semibold">
                    Or fill out the form below
                  </p>
                  <p className="text-2xl">
                    And we’ll get back to you as soon as we can
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form TODO*/}
    </>
  )
}
