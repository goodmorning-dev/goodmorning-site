import Image from 'next/image'
import Button from '@/components/Button'
import FeatureCard from '@/components/home/FeatureCard'
import LogoScroller from '@/components/home/LogoScroller'
import TeamSection from '@/components/home/Team'
import Blog from '@/components/home/Blog'
import TestimonialsSlider from '@/components/home/TestimonialsSlider'
import features from '@/constants/features'
import services from '@/constants/services'
import techKnowledge from '@/constants/techKnowledge'
import knowledgeBg from '@/../public/images/knowledge-bg.png'

export default function HomePage() {
  return (
    <div>
      {/* Hero section */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="/images/stars.png"
            alt="Stars background"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 z-10 mt-60 flex items-center">
          <Image
            src="/images/sun.png"
            alt="Sunrise over Earth"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <div className="relative z-20">
          <div className="flex flex-col items-center pt-[150px] text-center">
            <h1 className="header-1">
              <span className="text-primary">Web3 development</span> studio
              <br />
              operating <span className="gradient-underline">globally</span>
            </h1>
            <p className="font-regular mt-12 max-w-4xl text-2xl tracking-wide">
              As a Web3 development studio, at goodmorning we craft tailored
              blockchain services to help startups and industry leaders navigate
              the ever-evolving Web3 space. Whether you're launching something
              new or scaling an existing project, we bring the expertise to make
              it happen.
            </p>
            <Button className="mt-8" variant="primary">
              Contact Us
            </Button>
          </div>

          <div className="mx-auto mt-[480px] flex max-w-8xl pb-[150px]">
            <div className="max-w-xl space-y-7">
              <h2 className="header-2">
                A <span className="text-primary">Web3 development</span> company
                built on real{' '}
              </h2>
              <span className="gradient-underline header-2">synergy</span>
              <p className="text-xl leading-8 tracking-[0.6px]">
                With over a decade of experience in blockchain technology,
                goodmorning is dedicated to empowering innovative companies. Our
                strong team, with more than 80% tenure, is committed to
                delivering exceptional Web3 solutions tailored to your needs.
              </p>
              <Button className="mt-2" outlined variant="secondary">
                About Us
              </Button>
            </div>
            <div className="ml-10 flex flex-1 justify-center">
              <div className="max-w-[620px]">
                <Image
                  src="/images/hero.png"
                  alt="Hero image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature section */}
      <section className="bg-gray py-20">
        <div className="mx-auto grid max-w-8xl gap-20 px-4 md:grid-cols-2">
          {features.map((f, idx) => (
            <FeatureCard key={idx} {...f} />
          ))}
        </div>
      </section>

      {/* Services section */}
      <section className="py-36">
        <div className="mx-auto flex max-w-8xl flex-col items-center justify-between gap-24 px-4 md:flex-row">
          <div className="min-w-[34.5rem] space-y-7">
            <h1 className="header-2 relative leading-[1.2]">
              <span className="relative z-10 inline-block">
                <span className="gradient-underline">
                  Unlock your potential
                </span>
              </span>{' '}
              with <span className="text-primary">goodmorning</span> –
              <br />a Web3 development firm
            </h1>

            <p className="paragraph">
              Web3 is full of opportunities – let's make sure you seize them
              with services tailored to your vision.
            </p>
            <Button variant="secondary" outlined>
              Explore all services
            </Button>
          </div>

          <div className="flex flex-col gap-9">
            {services.map((card, idx) => (
              <div
                key={idx}
                className="flex bg-gray"
                style={{
                  clipPath:
                    'polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%)',
                  WebkitClipPath:
                    'polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={card.image}
                  alt="Service"
                  className="h-[240px] rounded-md object-cover"
                />
                <div className="flex flex-col justify-center space-y-3 px-[25px] py-[30px]">
                  <h4 className={`header-4 text-primary`}>
                    {card.title}{' '}
                    <span className="text-white">{card.subtitle}</span>
                  </h4>
                  <p className="text-xl leading-[30px]">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted companies section */}
      <section className="relative overflow-hidden py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/galaxy-bg.png')" }}
        />
        <div className="mx-auto flex max-w-8xl items-center gap-20">
          <div className="z-10 max-w-sm">
            <h3 className="text-[28px] leading-10 tracking-[0.5px]">
              <span className="font-bold">Trusted by</span>{' '}
              industry-leading companies worldwide
            </h3>
          </div>
          <LogoScroller />
        </div>
      </section>

      {/* Testimonials section */}
      <section className="relative mx-auto max-w-8xl pt-32">
        <div>
          <h2 className="header-2 mb-7 text-center leading-[1.2]">
            Our Web3 <span className="gradient-underline">client's</span>
            <br />
            <span className="text-primary">success stories</span>
          </h2>
          <p className="paragraph text-center">
            We bring real results to help you make a real impact
          </p>
        </div>
        <TestimonialsSlider />
      </section>

      {/* Blue sunset background between sections */}
      <div className="relative z-20 h-[360px]">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
          <Image
            src="/images/blue-sunset.png"
            alt="Blue sunset glow"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>

      {/* Tech knowledge section */}
      <section className="pb-32">
        <div className="relative z-20 mx-auto max-w-8xl">
          <h2 className="header-2 mb-7 text-center tracking-[1.2px]">
            <span className="gradient-underline">Empowering</span> your Web3
            journey <br />
            with our <span className="text-primary">tech knowledge</span>
          </h2>
          <p className="paragraph mx-auto max-w-[52rem] text-center">
            Well-established, cutting-edge or experimental technology, we have
            our hands on it. Building on top of Ethereum and all major EVM
            chains, we handle a rich set of tools and magic to bring your
            project to life.
          </p>
          <div className="mt-20 grid grid-cols-3 gap-10">
            {techKnowledge.map(({ icon, title, description }, index) => (
              <div
                key={index}
                className="items-center rounded-2xl px-7 py-10 text-center"
                style={{
                  backgroundImage: `url(${knowledgeBg.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="mb-10 flex items-center justify-center">
                  <Image
                    src={icon}
                    alt="Knowledge Icon"
                    width={60}
                    height={60}
                  />
                </div>
                <h3 className="header-4 mx-auto mb-4 max-w-xs">{title}</h3>
                <p className="text-xl leading-[1.5] tracking-[0.6px]">
                  {description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button variant="primary">Get in touch</Button>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="bg-gray py-36">
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

      {/* Call to action section */}
      <section className="relative overflow-hidden py-64">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
          style={{ backgroundImage: "url('/images/astronaut.png')" }}
        />
        <div className="relative z-10 mx-auto flex max-w-8xl flex-col justify-between md:flex-row">
          <div className="header-2 tracking-[1.2px]">
            Ready to transform <br />
            your vision?
          </div>
          <div className="max-w-lg space-y-6">
            <p className="text-2xl tracking-[0.7px]">
              Connect with us today to explore how we can elevate your Web3
              project on new heights.
            </p>
            <Button>Contact us</Button>
          </div>
        </div>
      </section>

      {/* Insights section */}
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
    </div>
  )
}
