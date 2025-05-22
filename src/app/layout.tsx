import '@/styles/globals.scss'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'GoodMorning',
  description: 'Web3 development studio'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Header />
        <main className="min-h-screen px-4 md:px-8 py-6 pt-[110px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}