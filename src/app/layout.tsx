import '@/styles/globals.scss'
import '@/styles/typography.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

export const metadata = {
  title: 'goodmorning | The Web3 Development Studio',
  description:
    'Launch, scale, and secure your blockchain project with goodmorning - the Web3 development studio trusted by top teams and recognized by the Ethereum Foundation.',
  robots: 'noindex, nofollow',
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
