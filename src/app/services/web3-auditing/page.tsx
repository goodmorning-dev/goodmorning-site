export const metadata = {
  title: 'Web3 Technical Auditing Services | goodmorning',
  description:
    'Protect your project and investors with goodmorning’s Web3 technical auditing services. From smart contract audits to technical due diligence, trusted by top teams.',
  alternates: {
    canonical: '/services/web3-auditing',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/meta/service-technical-auditing-meta-image.png'],
  },
  openGraph: {
    title: 'Web3 Technical Auditing Services | goodmorning',
    description:
      'Protect your project and investors with goodmorning’s Web3 technical auditing services. From smart contract audits to technical due diligence, trusted by top teams.',
    url: '/services/web3-auditing',
    siteName: 'goodmorning.dev',
    images: [
      {
        url: '/images/meta/service-technical-auditing-meta-image.png',
        width: 1200,
        height: 630,
        alt: 'goodmorning - web3 auditing',
      },
    ],
    type: 'website',
  },
}

import Web3Auditing from './Web3Auditing'

export default function Web3AuditingPage() {
  return <Web3Auditing />
}
