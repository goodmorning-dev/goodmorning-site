import '@/styles/globals.scss'

export const metadata = {
  title: 'GoodMorning',
  description: 'Web3 development studio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
