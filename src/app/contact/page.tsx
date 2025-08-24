export const metadata = {
  title: 'Contact goodmorning | Web3 Dev Studio',
  description:
    'Have a Web3 idea or product to build? Contact goodmorning - your partner for blockchain development, MVPs, dApp prototypes, DeFAI, co-founder support and more.',
    twitter: {
    card: 'summary_large_image',
    images: [`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/images/meta/contact-meta-image.png`,],
  },
  openGraph: {
  title: 'Contact goodmorning | Web3 Dev Studio',
  description:
    'Have a Web3 idea or product to build? Contact goodmorning - your partner for blockchain development, MVPs, dApp prototypes, DeFAI, co-founder support and more.',
    url: 'https://goodmorning.dev',
    siteName: 'goodmorning.dev',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/images/meta/contact-meta-image.png`,
        width: 1200,
        height: 630,
        alt: 'goodmorning - contact us',
      },
    ],
    type: 'website',
  },
}

import Contact from './Contact'

export default function ContactPage() {
  return <Contact />
}
