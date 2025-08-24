import '@/styles/globals.scss'
import '@/styles/typography.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

export const metadata = {
  title: 'goodmorning | The Web3 Development Studio',
  description:
    'Launch, scale, and secure your blockchain project with goodmorning - the Web3 development studio trusted by top teams and recognized by the Ethereum Foundation.',
  twitter: {
    card: 'summary_large_image',
    images: [`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/images/meta/home-meta-image.png`,],
  },
  openGraph: {
    title: 'goodmorning | The Web3 Development Studio',
    description:
      'Launch, scale, and secure your blockchain project with goodmorning - the Web3 development studio trusted by top teams and recognized by the Ethereum Foundation.',
    url: 'https://goodmorning.dev',
    siteName: 'goodmorning.dev',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/images/meta/home-meta-image.png`,
        width: 1200,
        height: 630,
        alt: 'goodmorning - home',
      },
    ],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid={process.env.COOKIEBOT}
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <Header />
        <main className="min-h-screen pt-[110px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
