'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'
import web3Cto from './constants/web3Cto'
import { ideaToProductSteps } from './constants/ideaToProductSteps'
import { faqData } from './constants/faq'

import partnerImg from '@/../public/images/partner.png'
// import testimonialImg from '@/../public/images/service-details-testimonial.png'

interface IdeaToProductItem {
  step: string
  title: string
  description: string
  image: string
}

export default function ServicesDetailsPage() {
  const router = useRouter()
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const renderItem = (
    item: IdeaToProductItem,
    isRight: boolean,
    index: number,
  ) => (
    <div
      key={index}
      className={clsx(
        'flex flex-col items-start lg:w-[46%]',
        isRight && 'mt-16 items-end text-right lg:mt-24',
        index === 1 && 'lg:pr-[100px]',
        index === 2 && 'lg:pl-[100px]',
      )}
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
          {item.step}
        </h3>
        <h4 className="header-4 mt-4">{item.title}</h4>
        <p className="mt-4 text-lg leading-8 tracking-[0.6px]">
          {item.description}
        </p>
      </div>
      <div className="mt-6 w-full max-w-[500px]">
        <Image
          src={item.image}
          alt={`${item.step}`}
          width={500}
          height={300}
          className="w-full rounded-xl object-cover"
        />
      </div>
    </div>
  )

  const renderFAQAnswer = (answer: string, index: number) => {
    // Check if this is the specific FAQ item that needs the link
    if (index === 5 && answer.includes('Web3 MVP development services')) {
      return (
        <span>
          That's exactly where our{' '}
          <Link
            href="/services/web3-mvp-development"
            className="text-primary underline transition-colors duration-200 hover:text-secondary"
          >
            Web3 MVP development services
          </Link>{' '}
          come in. If you're not ready for long-term technical leadership, we
          can help you build and launch an MVP first — and revisit your hiring
          needs after traction.
        </span>
      )
    }
    return answer
  }

  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative mx-auto py-32 lg:py-52"
        style={{
          backgroundImage: "url('/images/services-details-hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto flex w-full max-w-8xl flex-col items-start justify-between gap-12 px-5 lg:flex-row lg:px-0">
          <div>
            <h1 className="header-1 max-w-3xl">Web3 technical co-founder</h1>
            <p className="paragraph mt-8 max-w-lg lg:text-[24px]">
              Transform your vision into reality with hands-on tech leadership
              and execution.
            </p>
          </div>
        </div>
      </section>

      {/* Your Vision Section */}
      <section className="relative mx-auto bg-white py-16 text-black lg:py-36">
        <div className="mx-auto flex w-full max-w-8xl flex-col items-start items-center justify-between gap-5 px-5 lg:flex-row lg:px-0">
          <div>
            <h1 className="header-2 max-w-[615px] !leading-[1.3] lg:text-[56px]">
              <span className="text-primary">Web3 co-founder</span> as a
              service: Your vision, our{' '}
              <span className="gradient-underline">tech expertise</span>
            </h1>
          </div>
          <div className="max-w-[640px]">
            <p className="paragraph">
              Every successful product needs a solid technical backbone - but
              not every founder needs to be a tech expert. That's where we come
              in.
            </p>
            <p className="paragraph mt-8">
              Think of us as your hands-on Web3 technical co-founder: part CTO,
              part product strategist, part problem-solver. Whether you're
              building your first MVP or navigating complex Web3 infrastructure,
              we offer the leadership, execution, and technical firepower to
              turn your idea into a real-world product - without you needing to
              write a single line of code.
            </p>
          </div>
        </div>
      </section>

      {/* Web3 CTO service */}
      <section className="py-16 lg:py-32">
        <div className="relative z-20 mx-auto max-w-8xl px-5 lg:px-0">
          <h2 className="header-2 mb-7 text-center tracking-[1.2px]">
            <span className="gradient-underline">Who is</span> the
            <br className="block md:hidden" />{' '}
            <span className="text-primary">Web3 co-founder</span>
            <br className="block md:hidden" />
            <br className="hidden md:block" /> as a service for?
          </h2>
          <p className="paragraph mx-auto max-w-[52rem] text-center">
            Whether you're building your first product or scaling your next
            venture, having a Web3 technical co-founder can be a game-changer.
            This service is designed for founders, teams, and investors who need
            expert tech leadership without the overhead of hiring full-time.
          </p>

          <div className="mt-20 flex flex-wrap justify-center gap-10">
            {web3Cto.map(({ icon, title, description }, index) => (
              <div
                key={index}
                className="min-h-[430px] w-full max-w-[430px] items-center rounded-2xl bg-gray px-6 py-10 text-center"
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
                    src={icon}
                    alt="Web3 CTO Icon"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="flex h-full max-h-[260px] flex-col">
                  <h3 className="header-4 mx-auto mb-4 max-w-[350px]">
                    {title}
                  </h3>
                  <p className="text-xl leading-[1.5] tracking-[0.6px]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button variant="primary" onClick={() => router.push('/contact')}>
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Partner with us section */}
      <section className="relative bg-white px-5 py-16 text-black lg:px-0 lg:py-64">
        <div
          className="pointer-events-none absolute inset-0 bg-contain bg-center bg-no-repeat"
        />

        <div className="relative z-10 mx-auto flex max-w-8xl flex-col items-center justify-between gap-10 lg:flex-row lg:gap-0">
          <div className="max-w-2xl">
            <h2 className="header-2">
              <span className="gradient-underline">Why partner</span> with{' '}
              <span className="text-primary">goodmorning</span>?
            </h2>
            <p className="paragraph mt-8 lg:text-[20px]">
              You need more than just code - you need a partner who gets the big
              picture. We bring 15+ years of experience building products across
              fintech, SaaS, and Web3 - and we've done it with small teams,
              global clients, and complex tech stacks.
            </p>
            <ul className="ml-2 mt-10 space-y-4 lg:space-y-8">
              <li className="flex items-start gap-4 lg:gap-6">
                <div className="mt-1 text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="h-6 w-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="paragraph lg:text-[24px]">
                  Experts in launching & scaling tech ventures
                </p>
              </li>

              <li className="flex items-start gap-4 lg:gap-6">
                <div className="mt-1 text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="h-6 w-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="paragraph lg:text-[24px]">
                  Proven leadership in complex product builds
                </p>
              </li>

              <li className="flex items-start gap-4 lg:gap-6">
                <div className="mt-1 text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="h-6 w-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="paragraph lg:text-[24px]">
                  Track record of hiring and leading world-class devs
                </p>
              </li>
            </ul>
            <Button
              className="mt-10 lg:mt-20"
              variant="primary"
              onClick={() => router.push('/contact')}
              hoverColor="bg-secondary"
              hoverTextColor="text-white"
            >
              Get in touch
            </Button>
          </div>

          <div className="text-center lg:text-left">
            <Image
              src={partnerImg}
              alt="Knowledge Background"
              className="mb-6 w-full rounded-lg"
              width={610}
              height={660}
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative z-10 bg-black px-5 pb-40 pt-36 text-white">
        <div className="mb-24 text-center">
          <h2 className="header-2">
            <span className="gradient-underline">How we help</span> you go from
            <br />
            <span className="text-primary">idea to product</span> (and beyond)
          </h2>
          <p className="paragraph mx-auto mt-8 max-w-[870px] !font-normal text-white/80">
            Our specialty is making things happen - from concept to scale. With
            our diverse skill set we provide the strategy and execution to
            build, launch and grow your product.
          </p>
        </div>

        {/* Timeline items */}
        <div
          className="mx-auto flex max-w-8xl flex-wrap justify-center gap-20 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/spiral-bg.png')" }}
        >
          {ideaToProductSteps.map((item, index) => {
            const isRight = index % 2 !== 0
            return renderItem(item, isRight, index)
          })}
        </div>
      </section>

      {/* Testimonial section
      <section className="relative bg-white px-5 py-16 text-black lg:px-0 lg:py-64">
        <div className="relative z-10 mx-auto flex max-w-8xl flex-col items-center justify-between gap-10 lg:flex-row lg:gap-24">
          <div className="max-w-[730px]">
            <div className="header-4 border-l-4 border-secondary bg-[#d8d8d833] px-10 py-8 !font-medium italic !leading-[1.6] lg:text-[32px]">
              “Goodmorning is the ultimate web3 development studio. Our work
              with them has been seamless and we've been mightily impressed by
              their knowledge, expertise and deep understanding of all things
              blockchain.”
            </div>

            <div className="mt-8 flex items-center justify-between gap-2 text-left">
              <div>
                <p className="paragraph !font-semibold lg:text-[25px]">
                  Ivo Georgiev
                </p>
                <p className="paragraph mt-2 text-secondary lg:text-[25px]">
                  CEO, Ambire Wallet
                </p>
              </div>
              <div className="mt-4 w-[100px] lg:w-[150px]">
                <Image
                  src="/logos/ambire-colored.png"
                  alt="Ambire Logo"
                  width={150}
                  height={70}
                />
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <Image
              src={testimonialImg}
              alt="Testimonial Person"
              className="rounded-xl"
              width={520}
              height={535}
            />
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="bg-black px-5 py-16 pt-0 lg:px-0 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <h2 className="header-2 mb-16 text-center text-[48px] lg:text-[64px]">
            FAQ
          </h2>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-lightGray transition-all duration-300 ease-in-out"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="header-4 pr-4 text-[18px] md:text-[20px] lg:text-[22px]">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <svg
                        className="h-6 w-6 text-primary transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-6 w-6 text-primary transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden border-t border-textGray transition-all duration-300 ease-in-out ${
                    openFAQ === index
                      ? 'max-h-96 pt-4 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="paragraph text-[16px] leading-relaxed text-white/80 md:text-[18px]">
                      {renderFAQAnswer(item.answer, index)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="relative bg-gray px-5 py-16 lg:px-0 lg:py-64">
        <div
          className="pointer-events-none absolute inset-0 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/cta-future-bg-gray.png')" }}
        />

        <div className="relative z-10 mx-auto flex max-w-8xl flex-col items-center justify-between gap-10 lg:flex-row lg:gap-0">
          <h2 className="header-2 max-w-xl text-center lg:text-left">
            Ready to build what’s next?
          </h2>

          <div className="max-w-[500px] text-center lg:text-left">
            <p className="paragraph leading-[1.33] tracking-[0.6px] lg:text-[24px]">
              If you’re looking for a Web3-savvy tech partner who can think like
              a founder and build like an engineer, you’re in the right place.
            </p>
            <Button
              className="mt-9"
              variant="primary"
              onClick={() => router.push('/contact')}
            >
              Let's talk
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
