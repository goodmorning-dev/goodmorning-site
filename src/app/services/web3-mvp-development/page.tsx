export const metadata = {
  title: 'Web3 MVP Development Services | goodmorning',
  description:
    'Go from idea to mainnet fast. goodmorning’s Web3 MVP development delivers killer UX, secure smart contracts, and real market validation-no fluff, just progress.',
    twitter: {
    card: 'summary_large_image',
    images: [`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/images/meta/service-mvp-development-meta-image.png`,],
  },
  openGraph: {
  title: 'Web3 MVP Development Services | goodmorning',
  description:
    'Go from idea to mainnet fast. goodmorning’s Web3 MVP development delivers killer UX, secure smart contracts, and real market validation-no fluff, just progress.',
    url: 'https://goodmorning.dev',
    siteName: 'goodmorning.dev',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/images/meta/service-mvp-development-meta-image.png`,
        width: 1200,
        height: 630,
        alt: 'goodmorning - mvp development',
      },
    ],
    type: 'website',
  },
}

import Web3MvpDevelopment from './Web3MvpDevelopment'

export default function Web3MvpDevelopmentPage() {
  return <Web3MvpDevelopment />
}
