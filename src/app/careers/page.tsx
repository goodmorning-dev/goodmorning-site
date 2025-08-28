export const metadata = {
  title: 'Careers at goodmorning | Web3 Dev Jobs',
  description:
    'Ready to build bold blockchain products? Join goodmorning’s award-winning Web3 team for real impact, growth, and hackathon street cred - no corporate nonsense.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || 'https://goodmorning.dev',
  ),
  alternates: { canonical: '/careers' },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/meta/careers-meta-image.png'],
  },
  openGraph: {
    title: 'Careers at goodmorning | Web3 Dev Jobs',
    description:
      'Ready to build bold blockchain products? Join goodmorning’s award-winning Web3 team for real impact, growth, and hackathon street cred - no corporate nonsense.',
    url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://goodmorning.dev'}/careers`,
    siteName: 'goodmorning.dev',
    images: [
      {
        url: '/images/meta/careers-meta-image.png',
        width: 1200,
        height: 630,
        alt: 'goodmorning - careers',
      },
    ],
    type: 'website',
  },
}

import Careers from './Careers'

export default function CareersPage() {
  return <Careers />
}
