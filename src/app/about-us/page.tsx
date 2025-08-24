export const metadata = {
  title: 'Meet goodmorning | Your Web3 Development Partner',
  description:
    'From Web2 pioneers to Web3 leaders - meet goodmorning. 15+ years in tech, Ethereum Foundation recognized, redefining blockchain with cutting-edge innovations.',
    twitter: {
    card: 'summary_large_image',
    images: [`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/images/meta/about-us-meta-image.png`,],
  },
  openGraph: {
    title: 'Meet goodmorning | Your Web3 Development Partner',
    description:
      'From Web2 pioneers to Web3 leaders - meet goodmorning. 15+ years in tech, Ethereum Foundation recognized, redefining blockchain with cutting-edge innovations.',
    url: 'https://goodmorning.dev',
    siteName: 'goodmorning.dev',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/images/meta/about-us-meta-image.png`,
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
