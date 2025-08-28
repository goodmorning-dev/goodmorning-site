export const metadata = {
  title: 'Web3 Technical Co-Founder as a Service | goodmorning',
  description:
    'Get a Web3 technical co-founder - hands-on CTO, strategy and execution. goodmorning brings blockchain know-how, expertise & a founder’s mindset to your startup.',
  alternates: {
    canonical: '/services/web3-co-founder',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/meta/service-web3-cofounder-meta-image.png'],
  },
  openGraph: {
    title: 'Web3 Technical Co-Founder as a Service | goodmorning',
    description:
      'Get a Web3 technical co-founder - hands-on CTO, strategy and execution. goodmorning brings blockchain know-how, expertise & a founder’s mindset to your startup.',
    url: '/services/web3-co-founder',
    siteName: 'goodmorning.dev',
    images: [
      {
        url: '/images/meta/service-web3-cofounder-meta-image.png',
        width: 1200,
        height: 630,
        alt: 'goodmorning - web3 co-founder',
      },
    ],
    type: 'website',
  },
} 

import Web3CoFounder from './Web3CoFounder'

export default function Web3CoFounderPage() {
  return <Web3CoFounder />
}
