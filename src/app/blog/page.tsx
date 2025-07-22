'use client'

import { useState } from 'react'
import blog from './constants/blog'
import categories from './constants/categories'
import ReadMoreLink from '@/components/ReadMoreLink'
import Categories from './components/Categories'
import Newsletter from './components/Newsletter'
import Image from 'next/image'

export default function BlogPage() {
  const firstPost = blog[0]
  const remainingPosts = blog.slice(1)
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong')

      setSuccess(true)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative mx-auto py-32 lg:py-52"
        style={{
          backgroundImage: "url('/images/blog-hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto flex w-full max-w-8xl flex-col items-start justify-between gap-12 px-5 lg:flex-row lg:px-0">
          <div>
            <h1 className="header-1 max-w-2xl">Follow our Web3 journey</h1>
          </div>

          <div className="max-w-xl">
            <p className="paragraph max-w-lg text-justify lg:text-[24px]">
              Get the inside scoop on Web3 - game-changing tech,
              behind-the-scenes action, and a front-seat experience of our
              wildest success stories. From big ideas to exciting experiments,
              we share what's hot, what's next, and how we make things happen.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-16 lg:px-0 lg:py-40">
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-12 lg:grid-cols-[370px_1fr]">
          {/* Sidebar */}
          <div
            className="flex flex-col gap-10"
            style={{
              clipPath:
                'polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%)',
              WebkitClipPath:
                'polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%)',
            }}
          >
            {/* Categories - only desktop */}
            <div className="hidden lg:block">
              <Categories categories={categories} />
            </div>

            {/* Newsletter - only desktop */}
            <div className="hidden lg:block">
              <Newsletter
                email={email}
                setEmail={setEmail}
                isLoading={isLoading}
                success={success}
                error={error}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>

          {/* Blog Content */}
          <div className="flex flex-col gap-20">
            {/* Categories - mobile toggle */}
            <div className="block lg:hidden">
              <Categories categories={categories} />
            </div>

            {/* Featured Post */}
            <div
              className="overflow-hidden rounded-3xl shadow-lg"
              style={{
                clipPath:
                  'polygon(0 0, calc(100% - 60px) 0, 100% 60px, 100% 100%, 0 100%)',
                WebkitClipPath:
                  'polygon(0 0, calc(100% - 60px) 0, 100% 60px, 100% 100%, 0 100%)',
              }}
            >
              <div className="relative h-[400px] w-full">
                <Image
                  src={firstPost.image}
                  alt={firstPost.title}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="bg-gray p-7 text-white">
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
                      className="relative z-10 inline-block rounded-sm bg-gray px-3 py-[6.5px] text-center text-xs uppercase tracking-[2.3px]"
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
                      {firstPost.tag}
                    </span>
                  </span>

                  <span className="font-bold tracking-[1.4px]">
                    {firstPost.readTime}
                  </span>
                </div>

                <h3 className="header-3 mb-3">{firstPost.title}</h3>
                <p className="paragraph mb-5 lg:text-[20px] lg:tracking-[0.6px]">
                  {firstPost.excerpt}
                </p>

                <ReadMoreLink href={firstPost.link} label="READ MORE" />
              </div>
            </div>

            {/* Blog */}
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
              {remainingPosts.map((post, idx) => (
                <div
                  key={idx}
                  className="flex h-full flex-col overflow-hidden rounded-3xl bg-gray text-white shadow-lg transition hover:shadow-xl"
                  style={{
                    clipPath:
                      'polygon(0 0, calc(100% - 60px) 0, 100% 60px, 100% 100%, 0 100%)',
                    WebkitClipPath:
                      'polygon(0 0, calc(100% - 60px) 0, 100% 60px, 100% 100%, 0 100%)',
                  }}
                >
                  <div className="relative h-[250px] w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="rounded-t-3xl object-cover object-center"
                    />
                  </div>

                  <div className="flex flex-col justify-between bg-gray p-7 leading-tight tracking-wider">
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
                          className="relative z-10 inline-block rounded-sm bg-gray px-3 py-[6.5px] text-center text-xs uppercase tracking-[2.3px]"
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

            {/* Newsletter - mobile */}
            <div className="block lg:hidden">
              <Newsletter
                email={email}
                setEmail={setEmail}
                isLoading={isLoading}
                success={success}
                error={error}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
