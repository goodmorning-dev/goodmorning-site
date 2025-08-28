export const metadata = {
  title: 'The goodmorning Team & Founders | The Builders of Web3',
  description:
    'Meet the goodmorning crew: EIP-5792 co-authors and Web3 experts building EIP-7702 wallets with passion and a habit for bold, scalable blockchain projects.',
  alternates: { canonical: '/team' },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/meta/team-meta-image.png'],
  },
  openGraph: {
    title: 'The goodmorning Team & Founders | The Builders of Web3',
    description:
      'Meet the goodmorning crew: EIP-5792 co-authors and Web3 experts building EIP-7702 wallets with passion and a habit for bold, scalable blockchain projects.',
    url: '/team',
    siteName: 'goodmorning.dev',
    images: [
      {
        url: '/images/meta/team-meta-image.png',
        width: 1200,
        height: 630,
        alt: 'goodmorning - team',
      },
    ],
    type: 'website',
  },
}

import Team from './Team'

export default function TeamPage() {
  return <Team />
}
