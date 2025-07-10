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
    <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-8">
      <div className="icon-bg">
        <Image src={icon} alt={title} width={52} height={52} />
      </div>
      <div className="text-center lg:text-left">
        <h3 className="header-4">{title}</h3>
        <p className="paragraph mt-3 !font-normal lg:text-[20px]">{description}</p>
      </div>
    </div>
  )
}
