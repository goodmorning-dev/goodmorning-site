export const metadata = {
  title: 'Web3 Technical Consulting Services | goodmorning',
  description:
    'Unlock growth with goodmorning’s Web3 technical consulting services - industry-recognized expertise, sharp strategies, and real results for blockchain projects.',
  alternates: {
    canonical: '/services/web3-consulting',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/meta/service-web3-consultancy-meta-image.png'],
  },
  openGraph: {
    title: 'Web3 Technical Consulting Services | goodmorning',
    description:
      'Unlock growth with goodmorning’s Web3 technical consulting services - industry-recognized expertise, sharp strategies, and real results for blockchain projects.',
    url: '/services/web3-consulting',
    siteName: 'goodmorning.dev',
    images: [
      {
        url: '/images/meta/service-web3-consultancy-meta-image.png',
        width: 1200,
        height: 630,
        alt: 'goodmorning - web3 consulting',
      },
    ],
    type: 'website',
  },
}


import Web3Consulting from './Web3Consulting'

export default function Web3ConsultingPage() {
  return <Web3Consulting />
}
