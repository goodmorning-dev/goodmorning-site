import FeatureCard from '@/components/FeatureCard'
import features from '@/constants/features'

export default function HomePage() {
  return (
    // Feature section
    <section className="bg-gray py-20">
      <div className="mx-auto grid max-w-7xl gap-20 px-4 md:grid-cols-2">
        {features.map((f, idx) => (
          <FeatureCard key={idx} {...f} />
        ))}
      </div>
    </section>
  )
}
