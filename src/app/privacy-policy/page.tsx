import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const metadata = {
  title: 'Privacy Policy | goodmorning.dev',
  description:
    'Read goodmorning.dev’s Privacy Policy to understand how we collect, use, and protect your personal data while using our services.',
  alternates: {
    canonical: '/privacy-policy',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/meta/home-meta-image.png'],
  },
  openGraph: {
    title: 'Privacy Policy | goodmorning.dev',
    description:
      'Read goodmorning.dev’s Privacy Policy to understand how we collect, use, and protect your personal data while using our services.',
    url: '/privacy-policy',
    siteName: 'goodmorning.dev',
    images: [
      {
        url: '/images/meta/home-meta-image.png',
        width: 1200,
        height: 630,
        alt: 'goodmorning - privacy policy',
      },
    ],
    type: 'website',
  },
}

export default function PrivacyPolicyPage() {
  const filePath = path.join(
    process.cwd(),
    'src/app/privacy-policy/privacy-policy.md',
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
          <h1 className="header-1 mb-8">Privacy Policy</h1>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black" />
      </section>

      {/* Markdown content */}
      <section className="prose prose-invert mx-auto max-w-8xl px-4 pb-16">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </section>
    </main>
  )
}
