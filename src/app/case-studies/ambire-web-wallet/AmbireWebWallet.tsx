'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Button from '@/components/Button'
import web3Cto from './constants/web3Cto'
import result from './constants/result'

export default function AmbireWebWallet() {
  const router = useRouter()

  return (
    <main>
      <section className="relative bg-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="/images/ambire-web-wallet/hero-bg.png"
            alt=""
            fill
            priority
            className="object-center"
          />
        </div>

        {/* Hero */}
        <section className="relative z-10 px-5 py-16 text-black lg:px-0 lg:py-36">
          <div className="relative z-10 mx-auto flex max-w-8xl flex-col items-center justify-between gap-10 lg:flex-row lg:gap-0">
            <div className="max-w-2xl">
              <h2 className="header-1 lg:text-[60px]">
                No more DeFi nightmares: How Ambire and goodmorning raised the
                bar for Web3 UX
              </h2>
            </div>

            <div className="text-center lg:text-left">
              <Image
                src="/images/ambire-web-wallet/hero.png"
                alt="Knowledge Background"
                className="mb-6 w-full rounded-lg"
                width={625}
                height={380}
              />
            </div>
          </div>
        </section>

        {/* TLDR */}
        <section className="relative z-10 mx-auto py-16 text-black lg:py-36">
          <div className="mx-auto flex w-full max-w-8xl flex-col items-start items-center justify-between gap-5 px-5 lg:flex-row lg:px-0">
            <div className="max-w-[640px]">
              <h1 className="header-2 !leading-[1.3] lg:text-[56px]">
                <span className="gradient-underline">TL;DR</span>
              </h1>
              <p className="paragraph mt-8 text-justify opacity-70 lg:text-[20px]">
                When Ambire launched their MVP (the very first thing under the
                Ambire brand), they teamed up with us to transform their
                proof-of-concept DeFi wallet into a robust, user-friendly Web3
                product. Our role? Audit, stabilize, and scale the Ambire Web
                Wallet - shipping new features, crushing bugs, and making DeFi
                actually usable for humans. The result? $35M+ in assets,
                110,000+ accounts, a wallet that set the standard for user
                experience in Web3 and a partnership that’s still going strong -
                4 years later.
              </p>
            </div>
            <div className="w-full max-w-[40%]">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                <div>
                  <h3 className="header-4 lg:text-[26px]">Client/Product</h3>
                  <p className="paragraph mt-3 !font-light opacity-70">
                    Ambire/Web Wallet
                  </p>

                  <h3 className="header-4 mt-8 lg:text-[26px]">
                    Project Duration
                  </h3>
                  <ul className="paragraph mt-3 space-y-6 !font-light opacity-70">
                    <li>
                      Late 2021 – Late 2024
                      <span className="block">- Active development</span>
                    </li>
                    <li>
                      Late 2024 – Today
                      <span className="block">- Support mode</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="header-4 lg:text-[26px]">Product link</h3>
                  <a
                    href="https://www.ambire.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="paragraph mt-2 block !font-light underline-offset-2 opacity-70 hover:underline"
                  >
                    https://www.ambire.com/
                  </a>

                  <h3 className="header-4 mt-8 lg:text-[26px]">
                    Provided services
                  </h3>
                  <ul className="paragraph mt-3 space-y-6 !font-light opacity-70">
                    <li>Technical auditing</li>
                    <li>Team augmentation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* About */}
      <section className="px-5 py-16 lg:px-0 lg:py-36">
        <div className="mx-auto flex max-w-8xl flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-0">
          <div className="flex max-w-[640px] flex-col items-center justify-center space-y-12 lg:items-start lg:justify-start">
            <h2 className="header-2 text-center lg:text-left">
              <span className="gradient-underline">About the</span> product
            </h2>
            <p className="paragraph font-regular text-center lg:text-justify lg:!text-[20px]">
              Ambire Web Wallet is the first DeFi wallet to genuinely combine
              power with ease of use. Built on Ambire v1 smart accounts, it
              brings smart account-only features like transaction batching,
              flexible fee payments, and seamless key management - without the
              usual Web3 headaches. Users can register with just an email and
              password (no seed phrase nightmares), enjoying a non-custodial
              wallet that feels as simple as Web2, but with uncompromising
              security.
            </p>
          </div>
          <div className="ml-0 flex flex-1 justify-end">
            <div className="max-w-[600px]">
              <Image
                src="/images/ambire-web-wallet/about.png"
                alt="Ambire logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="px-5 pb-16 lg:px-0 lg:pb-36">
        <div className="mx-auto flex max-w-8xl flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-0">
          <div className="ml-0 flex flex-1 justify-start">
            <div className="max-w-[600px]">
              <Image
                src="/images/ambire-web-wallet/challenge.png"
                alt="Ambire logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
          <div className="flex max-w-[640px] flex-col items-center justify-center space-y-8 lg:items-start lg:justify-end">
            <h2 className="header-2 text-center lg:text-left">
              The <span className="gradient-underline">challenge</span>
            </h2>
            <p className="paragraph font-regular !mt-12 text-center lg:text-justify lg:!text-[20px]">
              When Ivo Georgiev (Founder & CEO), Dimo Stoyanov (Co-founder),
              Emil Stojnovsky (Product Lead), and Ivan Manchev (Head of
              Marketing) from Ambire reached out, they’d just shipped their MVP.
              Ambire’s team are legendary builders - hackers who can ship a PoC
              overnight. But they didn’t have the bandwidth (or the appetite) to
              refactor, scale, and polish the product into a robust, user-facing
              app.
            </p>
            <p className="paragraph font-regular text-center lg:text-justify lg:!text-[20px]">
              Their backend and smart contracts were rock solid, but the
              frontend? It needed some love:
            </p>
            <p className="paragraph font-regular text-center lg:text-justify lg:!text-[20px]">
              That’s where we jumped in - to stabilize, clean up, and ship new
              features without slowing down their innovation engine.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="relative bg-white px-5 py-16 text-black lg:px-0 lg:py-36">
        <div className="relative z-10 mx-auto flex max-w-8xl flex-col items-center justify-between gap-10 lg:flex-row lg:gap-24">
          <div className="max-w-[730px]">
            <div className="max-w-[700px] header-4 border-l-4 border-secondary bg-[#d8d8d833] px-10 py-8 !font-medium italic !leading-[1.6] opacity-80 lg:text-[32px]">
              “Ambire are hackers who can build anythingm but sometimes you need
              someone to make it all work for real users.”
            </div>

            <div className="mt-16 flex items-center justify-between gap-2 text-left">
              <div>
                <p className="paragraph !font-semibold lg:text-[25px]">
                  Jordan Enev
                </p>
                <p className="paragraph mt-2 text-secondary lg:text-[25px]">
                  Javascript Lead in the project
                </p>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <Image
              src="/images/ambire-web-wallet/dancho.png"
              alt="Testimonial Person"
              className="rounded-xl"
              width={520}
              height={535}
            />
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="relative z-10 mx-auto py-16 lg:py-36">
        <div className="mx-auto flex w-full max-w-8xl flex-col items-start justify-between gap-5 px-5 lg:flex-row lg:px-0">
          <div className="max-w-[640px]">
            <h1 className="header-2 !leading-[1.3] lg:text-[56px]">
              Our <span className="gradient-underline">approach</span>
            </h1>
          </div>
          <div className="w-full lg:max-w-[640px]">
            <p className="paragraph text-justify lg:text-[20px]">
              We don’t fake expertise. We told Ambire straight up: we’re
              confident in our full-stack chops, but we’re new to Web3. They
              didn’t blink. Instead, they handed us docs, gave us early access,
              and walked us through the smart account model. We studied, tested,
              and got our hands dirty before writing a single line of code.
            </p>
            <p className="paragraph mt-12 text-justify lg:text-[20px]">
              Our crew kicked things off with a technical audit, flagged
              architectural pain points, and prioritized improvements. Every six
              months, we’d sit down for big-picture roadmap sessions with
              Ambire, and in between, we kept things tight with weekly syncs and
              monthly on-site jams. We didn’t just take orders - we challenged
              ideas, discussed priorities, and shipped features hand-in-hand
              with their core team. That’s how our team augmentation service
              works.
            </p>
          </div>
        </div>
        <Image
          src="/images/ambire-web-wallet/approach.png"
          alt="Team Approach"
          width={1400}
          height={935}
          className="mx-auto my-32 w-full max-w-8xl rounded-xl"
          priority
        />
        <div className="mx-auto flex w-full max-w-8xl flex-col items-start justify-between gap-5 px-5 lg:flex-row lg:px-0">
          <div className="max-w-[640px]">
            <h1 className="header-2 !leading-[1.3] lg:text-[56px]">
              The <span className="gradient-underline">solution</span>
              <br />
              (Let's get technical)
            </h1>
          </div>
          <div className="w-full lg:max-w-[640px]">
            <p className="paragraph text-justify lg:text-[20px]">
              Working alongside Ambire’s team (and our crew: Jordan Enev,
              Gergana Mihaylova, Petromir Petrov, Simeon Petkov, Kaloyan Kosev,
              Borislav Itskov, and Cvetan Mihaylov), we rebuilt the web wallet’s
              architecture and the UI for the security layer management;
              designed the onboarding dashboard, transaction management, and
              portfolio views. We integrated EVM chains, enabled token swaps,
              and built a dApp catalog - so users never need to leave the wallet
              to use DeFi apps like AAVE, Yearn, or Uniswap.
            </p>
          </div>
        </div>
      </section>

      {/* Web3 CTO service */}
      <section className="py-16 lg:py-32">
        <div className="relative z-20 mx-auto max-w-8xl px-5 lg:px-0">
          <h2 className="header-2 mb-7 text-center tracking-[1.2px]">
            Here's what makes Ambire
            <br />
            <span className="gradient-underline">unique in Web3</span>
          </h2>
          <div className="mt-20 flex flex-wrap justify-center gap-10">
            {web3Cto.map(({ icon, title, description }, index) => (
              <div
                key={index}
                className="min-h-[420px] w-full max-w-[430px] items-center rounded-2xl bg-gray px-6 py-10 text-center"
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
          <h2 className="header-2 mb-7 mt-32 text-center lg:text-[40px]">
            We also tackled plenty of challenges
          </h2>
          <p className="paragraph mx-auto max-w-[800px] text-center lg:text-[20px]">
            we built a Swap module on top of Uniswap (adding support for more
            chains), wrestled with unreliable RPC providers, and handled flaky
            third-party APIs.
          </p>
        </div>
      </section>

      {/* Final Result */}
      <section
        className="relative py-16 lg:py-32"
        style={{
          backgroundImage: 'url(/images/ambire-web-wallet/result-bg.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-20 mx-auto max-w-8xl px-5 lg:px-0">
          <h2 className="header-2 mb-7 text-center tracking-[1.2px]">
            The <span className="gradient-underline">final result</span>
          </h2>
          <p className="paragraph mx-auto max-w-[800px] text-center lg:text-[20px]">
            We didn’t just stabilize the product - we helped Ambire grow.
          </p>
          <div className="mt-20 flex flex-wrap justify-center gap-10">
            {result.map(({ icon, title }, index) => (
              <div
                key={index}
                className="flex min-h-[330px] w-full max-w-[430px] flex-col items-center justify-center px-6 py-10 text-center"
                style={{
                  backgroundImage: 'url(/images/ambire-web-wallet/mask.png)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  overflow: 'hidden',
                }}
              >
                <div className="mb-5 flex items-center justify-center">
                  <Image
                    src={icon}
                    alt="Web3 CTO Icon"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="mt-5">
                  <h3 className="header-4 mx-auto max-w-[350px]">{title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action section */}
      <section className="relative overflow-hidden bg-gray py-44">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "url('/images/ambire-web-wallet/action-bg.png')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'right center',
            width: '100%',
            height: '100%',
          }}
        />
        <div className="lg:items-left relative z-10 mx-auto flex max-w-8xl flex-col items-center justify-between gap-5 px-5 text-center md:flex-row lg:gap-0 lg:px-0 lg:text-left">
          <div className="header-2 tracking-[1.2px]">
            <>
              Ready to build a Web3 <br />
              product that actually works <br /> (and delights users)?
            </>
            <br />
            <Button className="mt-5" onClick={() => router.push('/contact')}>
              Contact us
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
