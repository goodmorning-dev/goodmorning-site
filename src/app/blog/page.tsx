export const metadata = {
  title: "goodmorning's Web3 Development Blog",
  description:
    'No fluff - just real stories, deep insights, and experiments from the Web3 trenches. The goodmorning blog shares lessons from blockchain’s front lines.',
  alternates: {
    canonical: '/blog',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/meta/blog-meta-image.png'],
  },
  openGraph: {
    title: "goodmorning's Web3 Development Blog",
    description:
      'No fluff - just real stories, deep insights, and experiments from the Web3 trenches. The goodmorning blog shares lessons from blockchain’s front lines.',
    url: '/blog',
    siteName: 'goodmorning.dev',
    images: [
      {
        url: '/images/meta/blog-meta-image.png',
        width: 1200,
        height: 630,
        alt: 'goodmorning - blog',
      },
    ],
    type: 'website',
  },
}

// import Blog from './Blog'
import { notFound } from 'next/navigation'

export default function BlogPage() {
  // return <Blog />
  notFound()
}
