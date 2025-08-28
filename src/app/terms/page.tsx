import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'

export const metadata = {
  title: 'Terms of Service | goodmorning.dev',
  description:
    'Review goodmorning.dev’s Terms of Service to understand the rules and conditions for using our website and services.',
  alternates: {
    canonical: '/terms',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/meta/home-meta-image.png'],
  },
  openGraph: {
    title: 'Terms of Service | goodmorning.dev',
    description:
      'Review goodmorning.dev’s Terms of Service to understand the rules and conditions for using our website and services.',
    url: '/terms',
    siteName: 'goodmorning.dev',
    images: [
      {
        url: '/images/meta/home-meta-image.png',
        width: 1200,
        height: 630,
        alt: 'goodmorning - terms of service',
      },
    ],
    type: 'website',
  },
}

export default function TermsPage() {
  const filePath = path.join(process.cwd(), 'src/app/terms/terms.md')
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
          <h1 className="header-1 mb-8">Terms of Service</h1>
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
