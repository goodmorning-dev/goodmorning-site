'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { useEffect, useRef, useState, ReactNode } from 'react'
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { navItems } from '@/constants/navItems'
import SocialIcon from '@/components/SocialIcon'
import logo from '@/../public/logo.png'

export default function Header() {
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [showHeader, setShowHeader] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY

      if (currentY > lastScrollY.current && currentY > 100) {
        setShowHeader(false)
      } else {
        setShowHeader(true)
      }

      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={clsx(
        'fixed left-0 right-0 top-0 z-50 transform bg-[url("/images/gradient-bg.png")] bg-cover bg-center backdrop-blur transition-transform duration-500 ease-in-out',
        showHeader ? 'translate-y-0' : '-translate-y-full',
      )}
    >
      <div className="mx-auto flex h-[110px] max-w-8xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-3xl text-[36px] font-bold tracking-wide text-primary"
        >
          <Image
            src={logo}
            alt="GoodMorning Logo"
            width={80}
            height={50}
            priority
          />
        </Link>

        <nav className="relative flex gap-14">
          {navItems.map(({ label, href, children }) =>
            children ? (
              <div key={label} className="group relative">
                <button
                  onMouseEnter={() => setOpenMenu(label)}
                  onMouseLeave={() => setOpenMenu(null)}
                  className="nav-link flex items-center gap-2"
                >
                  {label}
                  <svg
                    className="h-2 w-2 fill-current text-white"
                    viewBox="0 0 10 6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>

                <div
                  className="absolute left-0 top-full z-50 pt-[42.5px]"
                  onMouseEnter={() => setOpenMenu(label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  {openMenu === label && (
                    <div
                      className="w-[300px] overflow-hidden bg-gray shadow-xl backdrop-blur-md"
                      style={{
                        clipPath:
                          'polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)',
                        WebkitClipPath:
                          'polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)',
                      }}
                    >
                      {children.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={clsx(
                            'block px-7 py-4 text-sm text-white transition-colors duration-200',
                            pathname === item.href
                              ? 'bg-primary text-black'
                              : 'hover:bg-primary hover:text-black',
                          )}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <Link
                key={href}
                href={href}
                className={clsx(
                  'nav-link',
                  pathname === href && 'text-primary',
                )}
              >
                {label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <SocialIcon href="#" icon={<FaFacebookF size={20} />} />
          <SocialIcon href="#" icon={<FaLinkedinIn size={20} />} />
          <SocialIcon href="#" icon={<FaXTwitter size={20} />} />
        </div>
      </div>
    </header>
  )
}
