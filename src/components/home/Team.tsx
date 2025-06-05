import Image from 'next/image'
import team from '@/constants/team'
import Button from '@/components/Button'

interface TeamSectionProps {
  short?: boolean
}

export default function TeamSection({ short = false }: TeamSectionProps) {
  const visibleTeam = short ? team.slice(0, 8) : team

  return (
    <div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {visibleTeam.map((member, index) => (
          <div
            key={index}
            className="group relative h-[460px] cursor-pointer overflow-hidden rounded-[25px] transition-all duration-300"
          >
            <div className="transition-inset absolute inset-[7px] z-0 rounded-[15px] bg-secondary duration-100 group-hover:inset-0" />

            {/* TODO: fix all images to look okay with all aspect ratio + the effect of the bottom of the image */}
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
            />

            <div className="absolute bottom-4 z-10 w-[100%] py-4 text-center tracking-wider">
              <h4 className="mb-3 text-center text-[30px] font-semibold">
                {member.name}
              </h4>
              <p className="text-2xl text-primary">{member.role}</p>
            </div>

            {/* TODO: bubbles? */}
            <div className="absolute inset-0 z-40 flex items-center justify-center bg-secondary text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="px-6 text-[24px] leading-[34px] tracking-[0.7px]">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {short && (
        <div className="mt-16 text-center">
          <Button variant="secondary" outlined background="bg-gray">
            Meet Everyone
          </Button>
        </div>
      )}
    </div>
  )
}
