export const metadata = {
  title: 'Meet goodmorning | Your Web3 Development Partner',
  description:
    'From Web2 pioneers to Web3 leaders - meet goodmorning. 15+ years in tech, Ethereum Foundation recognized, redefining blockchain with cutting-edge innovations.',
  alternates: { canonical: '/about-us' },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/meta/about-us-meta-image.png'],
  },
  openGraph: {
    title: 'Meet goodmorning | Your Web3 Development Partner',
    description:
      'From Web2 pioneers to Web3 leaders - meet goodmorning. 15+ years in tech, Ethereum Foundation recognized, redefining blockchain with cutting-edge innovations.',
    url: '/about-us',
    siteName: 'goodmorning.dev',
    images: [
      {
        url: '/images/meta/about-us-meta-image.png',
        width: 1200,
        height: 630,
        alt: 'goodmorning - about us',
      },
    ],
    type: 'website',
  },
}

import AboutUs from './AboutUs'

export default function AboutUsPage() {
  return <AboutUs />
}
