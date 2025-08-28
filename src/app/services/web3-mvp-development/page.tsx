export const metadata = {
  title: 'Web3 MVP Development Services | goodmorning',
  description:
    'Go from idea to mainnet fast. goodmorning’s Web3 MVP development delivers killer UX, secure smart contracts, and real market validation—no fluff, just progress.',
  alternates: {
    canonical: '/services/web3-mvp-development',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/meta/service-mvp-development-meta-image.png'],
  },
  openGraph: {
    title: 'Web3 MVP Development Services | goodmorning',
    description:
      'Go from idea to mainnet fast. goodmorning’s Web3 MVP development delivers killer UX, secure smart contracts, and real market validation—no fluff, just progress.',
    url: '/services/web3-mvp-development',
    siteName: 'goodmorning.dev',
    images: [
      {
        url: '/images/meta/service-mvp-development-meta-image.png',
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
