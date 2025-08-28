import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'

export const metadata = {
  title: 'Cookie Policy | goodmorning.dev',
  description:
    'Read goodmorning.dev’s Cookie Policy to learn how we use cookies and similar technologies to enhance your browsing experience.',
  alternates: {
    canonical: '/cookie-policy',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/meta/home-meta-image.png'],
  },
  openGraph: {
    title: 'Cookie Policy | goodmorning.dev',
    description:
      'Read goodmorning.dev’s Cookie Policy to learn how we use cookies and similar technologies to enhance your browsing experience.',
    url: '/cookie-policy',
    siteName: 'goodmorning.dev',
    images: [
      {
        url: '/images/meta/home-meta-image.png',
        width: 1200,
        height: 630,
        alt: 'goodmorning - cookie policy',
      },
    ],
    type: 'website',
  },
}


export default function CookiePolicyPage() {
  const filePath = path.join(
    process.cwd(),
    'src/app/cookie-policy/cookie-policy.md',
  )
  const content = fs.readFileSync(filePath, 'utf8')

  return (
    <main>
      {/* Hero section */}
      <section
        className="relative pb-64 pt-24 lg:pt-48"
        style={{
          backgroundImage: "url('/images/team-hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto max-w-8xl text-center lg:text-left">
          <h1 className="header-1 mb-8">Cookie Policy</h1>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black" />
      </section>

      {/* Markdown content */}
      <section className="prose prose-invert mx-auto max-w-8xl px-4 pb-16">
        <ReactMarkdown>{content}</ReactMarkdown>
      </section>
    </main>
  )
}
