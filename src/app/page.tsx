import FeatureCard from '@/components/FeatureCard'
import features from '@/constants/features'
import Button from '@/components/Button'

export default function HomePage() {
  return (
    <div>
      {/* Feature section */}
      <section className="bg-gray py-20">
        <div className="mx-auto grid max-w-7xl gap-20 px-4 md:grid-cols-2">
          {features.map((f, idx) => (
            <FeatureCard key={idx} {...f} />
          ))}
        </div>
      </section>

      {/* Call to action section */}
      <section className="relative overflow-hidden bg-black py-64">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
          style={{ backgroundImage: "url('/images/astronaut.png')" }}
        />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-between md:flex-row">
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
