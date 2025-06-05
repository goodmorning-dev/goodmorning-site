import Image, { type StaticImageData } from 'next/image'

interface FeatureCardProps {
  icon: StaticImageData
  title: string
  description: string
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="flex items-start gap-8">
      <div className="icon-bg">
        <Image src={icon} alt={title} width={52} height={52} />
      </div>
      <div>
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className="mt-3 text-[1.25rem]">{description}</p>
      </div>
    </div>
  )
}
