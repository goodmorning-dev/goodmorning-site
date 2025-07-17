import { useRouter } from 'next/navigation'
import Image from 'next/image'
import team from '@/constants/team'
import Button from '@/components/Button'
import BubblesBackground from '@/components/BubblesBackground'

interface TeamSectionProps {
  short?: boolean
}

export default function TeamSection({ short = false }: TeamSectionProps) {
  const router = useRouter()
  const visibleTeam = short ? team.slice(0, 8) : team

  return (
    <div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {visibleTeam.map((member, index) => (
          <div
            key={index}
            className="group relative h-[460px] cursor-pointer overflow-hidden rounded-[25px] transition-all duration-300"
          >
            <div className="transition-inset absolute inset-[7px] z-0 rounded-[15px] bg-secondary duration-100" />

            <div className="absolute inset-0 z-0 before:absolute before:inset-0 before:z-10 before:rounded-[25px] before:bg-[linear-gradient(to_top,rgba(30,30,30,0.6),transparent)]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="group-hover:clip-normal object-cover transition-[clip-path] duration-500 ease-in-out"
                style={{
                  clipPath:
                    'polygon(0 0, calc(100% - 60px) 0, 100% 60px, 100% 100%, 0 100%)',
                  WebkitClipPath:
                    'polygon(0 0, calc(100% - 60px) 0, 100% 60px, 100% 100%, 0 100%)',
                }}
              />
            </div>

            <div className="absolute bottom-4 z-10 w-[100%] py-4 text-center tracking-wider transition-opacity duration-300 group-hover:opacity-0">
              <h4 className="mb-3 text-center text-[30px] font-semibold">
                {member.name}
              </h4>
              <p className="text-2xl text-primary">{member.position}</p>
            </div>

            <div className="absolute inset-0 z-40 flex items-center justify-center bg-secondary text-center opacity-0 transition-opacity duration-300 group-hover:opacity-80">
              <p className="px-6 text-[24px] leading-[34px] tracking-[0.7px]">
                {member.hoverText}
              </p>
              <BubblesBackground />
            </div>
          </div>
        ))}
      </div>

      {short && (
        <div className="mt-16 text-center">
          <Button
            variant="secondary"
            outlined
            background="bg-gray"
            onClick={() => router.push('/team')}
          >
            Meet Everyone
          </Button>
        </div>
      )}
    </div>
  )
}
