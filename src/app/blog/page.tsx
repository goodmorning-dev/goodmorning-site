'use client'

import { useState } from 'react'
import blog from './constants/blog'
import categories from './constants/categories'
import ReadMoreLink from '@/components/ReadMoreLink'
import Button from '@/components/Button'
import Input from '@/components/Input'
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
    <section className="bg-black px-5 py-16 text-white lg:px-0 lg:py-40">
      <div className="mx-auto grid max-w-8xl grid-cols-1 gap-12 lg:grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <div className="flex flex-col gap-10">
          {/* Categories */}
          <div className="bg-darkGray rounded-2xl p-6">
            <h3 className="mb-6 text-xl font-bold">Blog Categories</h3>
            <ul className="flex flex-col gap-3">
              {categories.map((cat, idx) => (
                <li
                  key={idx}
                  className={`cursor-pointer rounded-md px-3 py-2 text-sm font-semibold transition ${
                    idx === 0
                      ? 'bg-secondary text-black'
                      : 'text-white hover:bg-secondary/40'
                  }`}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="bg-darkGray rounded-2xl p-6">
            <h3 className="mb-3 text-xl font-bold">Subscribe to newsletter</h3>
            <p className="mb-5 text-sm text-white/80">
              Subscribe to receive the latest blog posts to your inbox every
              week.
            </p>
            <form onSubmit={handleSubmit}>
              <Input
                label="Email address"
                name="email"
                type="email"
                required
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button className="mt-4 w-full" variant="secondary">
                Subscribe
              </Button>
            </form>
            <p className="mt-3 text-[11px] text-white/50">
              By subscribing you agree to our{' '}
              <a href="#" className="underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>

        {/* Blog Content */}
        <div className="flex flex-col gap-20">
          {/* Featured Post */}
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <div className="relative h-[400px] w-full">
              <Image
                src={firstPost.image}
                alt={firstPost.title}
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="bg-lightGray p-7 text-white">
              <div className="mb-5 flex items-center gap-6">
                <span className="group relative inline-block h-[32px] min-w-[85px]">
                  <span
                    className="absolute inset-0 z-0 rounded-sm bg-secondary"
                    style={{
                      clipPath:
                        'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
                    }}
                  />
                  <span
                    className="relative z-10 inline-block rounded-sm bg-lightGray px-3 py-[6.5px] text-center text-xs uppercase tracking-[2.3px]"
                    style={{
                      clipPath:
                        'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
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

          {/* Grid of remaining posts */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {remainingPosts.map((post, idx) => (
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
                        }}
                      />
                      <span
                        className="relative z-10 inline-block rounded-sm bg-lightGray px-3 py-[6.5px] text-center text-xs uppercase tracking-[2.3px]"
                        style={{
                          clipPath:
                            'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
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

          {/* View All Button */}
          <div className="mt-10 text-center">
            <Button
              variant="secondary"
              outlined
              background="bg-gray"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              View All
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
