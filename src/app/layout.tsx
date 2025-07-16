import '@/styles/globals.scss'
import '@/styles/typography.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'GoodMorning',
  description: 'Web3 development studio',
  robots: 'noindex, nofollow'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen pt-[110px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
