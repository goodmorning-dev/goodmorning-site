import { useRouter } from 'next/navigation'
import blog from '@/constants/blog'
import Button from '@/components/Button'
import Image from 'next/image'
import ReadMoreLink from '@/components/ReadMoreLink'

export default function BlogCards() {
  const router = useRouter()

  return (
    <div>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {blog.map((post, idx) => (
          <div
            key={idx}
            className="flex h-full flex-col overflow-hidden rounded-3xl bg-gray text-white shadow-lg transition hover:shadow-xl"
          >
            <div className="relative h-[250px] w-full overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="rounded-t-3xl object-cover object-center"
              />
            </div>

            <div className="flex flex-col justify-between bg-lightGray p-7 leading-tight tracking-wider">
              <div className="mb-5 flex items-center gap-6">
                <span className="group relative inline-block h-[32px] min-w-[85px]">
                  <span
                    className="absolute inset-0 z-0 rounded-sm bg-secondary"
                    style={{
                      clipPath:
                        'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
                      WebkitClipPath:
                        'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
                    }}
                  />
                  <span
                    className="relative z-10 inline-block rounded-sm bg-lightGray px-3 py-[6.5px] text-center text-xs uppercase tracking-[2.3px]"
                    style={{
                      clipPath:
                        'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
                      WebkitClipPath:
                        'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
                      width: 'calc(100% - 2px)',
                      left: '1px',
                      right: '1px',
                      bottom: '1px',
                    }}
                  >
                    {post.tag}
                  </span>
                </span>

                <span className="font-bold tracking-[1.4px]">
                  {post.readTime}
                </span>
              </div>

              <div>
                <h3 className="header-4 mb-3">{post.title}</h3>
                <p className="paragraph lg:text-[20px] lg:tracking-[0.6px]">
                  {post.excerpt}
                </p>
              </div>

              <ReadMoreLink
                className="mt-5"
                href={post.link}
                label="READ MORE"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <Button
          variant="secondary"
          outlined
          background="bg-gray"
          onClick={() => router.push('/blog')}
        >
          View All
        </Button>
      </div>
    </div>
  )
}
