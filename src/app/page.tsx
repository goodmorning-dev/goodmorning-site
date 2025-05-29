import FeatureCard from '@/components/FeatureCard'
import features from '@/constants/features'
import Button from '@/components/Button'
import LogoScroller from '@/components/LogoScroller'
import services from '@/constants/services'

export default function HomePage() {
  return (
    <div>
      {/* Feature section */}
      <section className="bg-gray py-20">
        <div className="max-w-8xl mx-auto grid gap-20 px-4 md:grid-cols-2">
          {features.map((f, idx) => (
            <FeatureCard key={idx} {...f} />
          ))}
        </div>
      </section>

      {/* Services section */}
      <section className="bg-black py-36 text-white">
        <div className="max-w-8xl mx-auto flex flex-col items-center justify-between gap-24 px-4 md:flex-row">
          <div className="min-w-[34.5rem] space-y-7">
            <h1 className="relative text-[3.125rem] font-black leading-[1.2] tracking-[1.2px]">
              <span className="relative z-10 inline-block">
                <span className="before:absolute before:inset-x-0 before:bottom-[-12px] before:z-[-1] before:h-[22px] before:bg-gradient-to-l before:from-transparent before:to-secondary">
                  Unlock your potential
                </span>
              </span>{' '}
              with <span className="text-primary">goodmorning</span> –
              <br />a Web3 development firm
            </h1>

            <p className="text-2xl">
              Web3 is full of opportunities – let’s make sure you seize them
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
                  <h4
                    className={`text-3xl font-normal font-semibold text-primary`}
                  >
                    {card.title}{' '}
                    <span className="text-white">{card.subtitle}</span>
                  </h4>
                  <p className="text-xl leading-[30px] tracking-[0.5px]">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted companies section */}
      <section className="relative overflow-hidden bg-black py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/galaxy-bg.png')" }}
        />
        <div className="max-w-8xl mx-auto flex items-center gap-20">
          <div className="z-10 max-w-sm">
            <h3 className="text-[28px] leading-10 tracking-[0.5px]">
              <span className="font-bold text-white">Trusted by</span>{' '}
              industry-leading companies worldwide
            </h3>
          </div>
          <LogoScroller />
        </div>
      </section>

      {/* Call to action section */}
      <section className="relative overflow-hidden bg-black py-64">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
          style={{ backgroundImage: "url('/images/astronaut.png')" }}
        />
        <div className="max-w-8xl relative z-10 mx-auto flex flex-col justify-between md:flex-row">
          <div className="text-5xl font-bold leading-tight tracking-[1.2px]">
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
    </div>
  )
}
