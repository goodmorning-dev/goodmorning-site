import positions from '@/constants/positions'
import { notFound } from 'next/navigation'
import FeatureCard from '@/components/home/FeatureCard'
import JobApplyForm, { ScrollButton } from './sections/JobApplyForm'
import features from '../constants/features'

interface JobDetailedSection {
  title: string
  content: { type: 'list'; value: string[] }
}
interface JobType {
  title: string
  location: string
  shortDescription: string
  detailed: JobDetailedSection[]
  link: string
}

function findJobBySlug(slug: string): JobType | undefined {
  for (const category of positions as any[]) {
    for (const job of category.jobs as JobType[]) {
      const jobSlug = job.link.split('/').pop()
      if (jobSlug === slug) return job
    }
  }
}

export default async function JobDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const job = findJobBySlug(slug)
  if (!job) return notFound()

  return (
    <main className="scroll-smooth">
      {/* Hero */}
      <section
        className="relative mx-auto py-16 lg:py-40"
        style={{
          backgroundImage: "url('/images/job-single-hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto flex w-full max-w-8xl flex-col items-start justify-between gap-12 px-5 lg:flex-row">
          <div className="max-w-2xl">
            <h1 className="header-1 mb-6 leading-[1.05]">{job.title}</h1>
            <p className="paragraph max-w-xl italic text-white/80 lg:text-[20px]">
              {job.location}
            </p>
          </div>
          <div className="max-w-xl self-start p-6">
            <p className="paragraph tracking-[0.6px] lg:text-[24px]">
              {job.shortDescription}
            </p>
            <ScrollButton />
          </div>
        </div>
      </section>

      {/* Detailed sections */}
      <section className="px-5 pb-24 pt-20 lg:px-0">
        <div className="mx-auto grid max-w-8xl gap-20">
          <div className="space-y-16">
            {job.detailed.map((block, idx) => (
              <div key={idx}>
                <h2 className="header-3 mb-6">{block.title}</h2>
                {block.content.type === 'list' && (
                  <ul className="list-disc space-y-3 pl-6 text-white/80 marker:text-primary lg:text-[18px]">
                    {block.content.value.map((item, i) => (
                      <li key={i} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature section */}
      <section className="bg-gray py-40">
        <div className="mx-auto mb-40 flex w-full max-w-8xl flex-col items-center justify-between px-5 lg:flex-row lg:px-0">
          <div>
            <h2 className="header-2 max-w-2xl text-center lg:text-left">
              <span className="gradient-underline">Join a team</span> that
              values <span className="text-primary">innovation</span>,{' '}
              <span className="text-primary">collaboration</span>, and work-life{' '}
              <span className="text-primary">balance</span>.
            </h2>
          </div>

          <div>
            <p className="paragraph max-w-[645px]">
              Turnover isn't our thing - most of our teammates have been a part
              of goodmorning for 7 years, and that's no accident. We've built a
              team where people feel valued, challenged, and excited to grow -
              both professionally and personally. At the end of the day, we're
              all here to build fulfilling lives and sharing the journey with
              each other has made this goal so much fun!
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-8xl">
          <div className="h-[2px] w-full bg-white/10" />
        </div>

        <div className="mx-auto mt-40 grid max-w-8xl gap-20 px-5 md:grid-cols-2 lg:px-0">
          {features.map((f, idx) => (
            <FeatureCard key={idx} {...f} />
          ))}
        </div>
      </section>

      <JobApplyForm jobTitle={job.title} />
    </main>
  )
}
