'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { useState } from 'react'
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { navItems } from '@/constants/navItems'

export default function Header() {
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-[110px] px-6">
        <Link href="/" className="text-3xl font-bold text-primary text-[36px] tracking-wide">
          gm
        </Link>

        <nav className="flex gap-14 relative">
          {navItems.map(({ label, href, children }) =>
            children ? (
              <div
                key={label}
                className="relative"
                onMouseEnter={() => setOpenMenu(label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button className="nav-link">{label}</button>
                {openMenu === label && (
                  <div className="absolute top-full left-0 w-64 bg-[#1f1f1f] rounded-lg border border-white/10 shadow-lg z-50">
                    {children.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 hover:bg-teal-700/30 transition-colors text-white text-sm"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={href}
                href={href}
                className={clsx('nav-link', pathname === href && 'text-primary')}
              >
                {label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2 text-white">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebookF />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedinIn />
          </a>
          <a href="#" className="social-icon">
            <FaXTwitter />
          </a>
        </div>
      </div>
    </header>
  )
}
