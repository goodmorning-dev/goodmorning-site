import '@/styles/globals.scss'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'GoodMorning',
  description: 'Web3 development studio',
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
