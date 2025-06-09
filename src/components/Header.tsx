'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { useState, ReactNode } from 'react'
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { navItems } from '@/constants/navItems'
import logo from '@/../public/logo.png'

export default function Header() {
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  const SocialIcon = ({ icon, href }: { icon: ReactNode; href: string }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon-wrapper"
    >
      <Image
        src="/masks/bg.svg"
        alt=""
        width={50}
        height={50}
        className="social-icon-svg"
        draggable={false}
      />
      <div className="social-icon-content">{icon}</div>
    </a>
  )

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-[url('/images/gradient-bg.png')] bg-cover bg-center backdrop-blur">
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
              <div
                key={label}
                className="relative"
                onMouseEnter={() => setOpenMenu(label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button className="nav-link flex items-center gap-2">
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
                {openMenu === label && (
                  <div className="absolute left-0 top-full z-50 w-64 rounded-lg border border-white/10 bg-[#1f1f1f] shadow-lg">
                    {children.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-white transition-colors hover:bg-teal-700/30"
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

        {/* TODO: Fix social media icons (border)*/}
        <div className="flex items-center gap-2 text-white">
          <SocialIcon href="#" icon={<FaFacebookF />} />
          <SocialIcon href="#" icon={<FaLinkedinIn />} />
          <SocialIcon href="#" icon={<FaXTwitter />} />
        </div>
      </div>
    </header>
  )
}
