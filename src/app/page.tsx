import type { Metadata } from 'next'
import HomePage from './home/HomePage'

const base = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
const url = `${base}/`
const image = `${base}/images/meta/home-meta-image.png`

export const metadata: Metadata = {
  title: 'goodmorning | The Web3 Development Studio',
  description:
    'Launch, scale, and secure your blockchain project with goodmorning - the Web3 development studio trusted by top teams and recognized by the Ethereum Foundation.',
  alternates: { canonical: url },
  twitter: {
    card: 'summary_large_image',
    images: [image],
  },
  openGraph: {
    title: 'goodmorning | The Web3 Development Studio',
    description:
      'Launch, scale, and secure your blockchain project with goodmorning - the Web3 development studio trusted by top teams and recognized by the Ethereum Foundation.',
    url,
    siteName: 'goodmorning.dev',
    images: [{ url: image, width: 1200, height: 630, alt: 'goodmorning - home' }],
    type: 'website',
  },
}

export default function Page() {
  return <HomePage />
}
