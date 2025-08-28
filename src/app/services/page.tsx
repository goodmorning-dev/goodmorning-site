export const metadata = {
  title: 'Web3 Development Services That Scale | goodmorning',
  description:
    'Build smarter, scale faster with goodmorning’s Web3 development services. From idea to mainnet, get secure code, real expertise, and relentless focus on results',
  alternates: {
    canonical: '/services',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/meta/services-meta-image.png'],
  },
  openGraph: {
    title: 'Web3 Development Services That Scale | goodmorning',
    description:
      'Build smarter, scale faster with goodmorning’s Web3 development services. From idea to mainnet, get secure code, real expertise, and relentless focus on results',
    url: '/services',
    siteName: 'goodmorning.dev',
    images: [
      {
        url: '/images/meta/services-meta-image.png',
        width: 1200,
        height: 630,
        alt: 'goodmorning - services',
      },
    ],
    type: 'website',
  },
}

import Services from './Services'

export default function ServicesPage() {
  return <Services />
}
