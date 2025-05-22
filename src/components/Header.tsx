import Link from 'next/link'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Team', href: '/team' },
  { name: 'About', href: '/about-us' },
  { name: 'Careers', href: '/careers' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' }
]

export default function Header() {
  return (
    <header className="py-4 border-b">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <div className="font-bold text-xl">GoodMorning</div>
        <nav className="space-x-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:underline">
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
