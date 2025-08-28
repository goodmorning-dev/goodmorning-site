'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { FaTelegramPlane } from 'react-icons/fa'
import { navItems } from '@/constants/navItems'
import SocialIcon from '@/components/SocialIcon'
import logo from '@/../public/logo.png'

export default function Header() {
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(
    'Services',
  )
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileOpen) return
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
  }, [isMobileOpen])

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

  useEffect(() => {
    if (isMobileOpen) {
      const matchedDropdown = navItems.find((item) =>
        item.children?.some((child) => child.href === pathname),
      )

      if (matchedDropdown) {
        setActiveDropdown(matchedDropdown.label)
      }
    }
  }, [isMobileOpen, pathname])

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

        {/* Desktop Navigation */}
        <nav className="relative hidden gap-14 lg:flex">
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
                      className="w-[300px] overflow-hidden bg-gray bg-[url('/images/gradient-bg.png')] bg-cover bg-right shadow-xl backdrop-blur-md"
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

        {/* Social Icons */}
        <div className="hidden items-center gap-2 lg:flex">
          <SocialIcon
            href="https://x.com/goodmorningdevs"
            label="Twitter"
            icon={<FaXTwitter size={20} />}
          />
          <SocialIcon
            href="https://www.linkedin.com/company/goodmorningdevs"
            label="LinkedIn"
            icon={<FaLinkedinIn size={20} />}
          />
          <SocialIcon
            href="https://t.me/goranstoyanov"
            label="Telegram"
            icon={<FaTelegramPlane size={20} />}
          />
          <SocialIcon
            href="https://www.facebook.com/goodmorningdevs"
            label="Facebook"
            icon={<FaFacebookF size={20} />}
          />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="z-50 lg:hidden"
          onClick={() => setIsMobileOpen((prev) => !prev)}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
        >
          <div className="relative h-6 w-6">
            {/* Top line */}
            <div
              className={clsx(
                'absolute h-0.5 w-6 bg-white transition-all duration-300 ease-in-out',
                isMobileOpen
                  ? 'top-3 rotate-45 transform'
                  : 'top-1 rotate-0 transform'
              )}
            />
            {/* Middle line */}
            <div
              className={clsx(
                'absolute top-3 h-0.5 w-6 bg-white transition-all duration-300 ease-in-out',
                isMobileOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
              )}
            />
            {/* Bottom line */}
            <div
              className={clsx(
                'absolute h-0.5 w-6 bg-white transition-all duration-300 ease-in-out',
                isMobileOpen
                  ? 'top-3 -rotate-45 transform'
                  : 'top-5 rotate-0 transform'
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={clsx(
          "fixed inset-0 top-[110px] z-40 flex h-[100dvh] flex-col justify-between overflow-y-auto bg-gray px-6 py-8 shadow-xl backdrop-blur-md transition-all duration-500 ease-out lg:hidden",
          isMobileOpen 
            ? "translate-x-0 opacity-100" 
            : "translate-x-full opacity-0 pointer-events-none"
        )}
        style={{
          height: 'calc(100dvh - 110px)',
          minHeight: 'calc(100vh - 110px)', // Fallback for older browsers
        }}
      >
        <div 
          className={clsx(
            "fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500",
            isMobileOpen ? "opacity-100" : "opacity-0"
          )}
        />
        
        {/* Menu content */}
        <div className="relative z-10 flex h-full flex-col justify-between">
          <div>
            {navItems.map(({ label, href, children }, index) =>
              children ? (
                <div 
                  key={label} 
                  className={clsx(
                    "mb-2 py-3 transition-all duration-500 ease-out",
                    isMobileOpen 
                      ? "translate-x-0 opacity-100" 
                      : "translate-x-8 opacity-0"
                  )}
                  style={{ 
                    transitionDelay: isMobileOpen ? `${index * 100}ms` : '0ms' 
                  }}
                >
                  <button
                    onClick={() =>
                      setActiveDropdown((prev) =>
                        prev === label ? null : label,
                      )
                    }
                    className="flex w-full items-center justify-between text-left text-sm font-semibold uppercase tracking-wide text-white/70 transition-colors duration-200 hover:text-white"
                  >
                    <span>{label}</span>
                    <svg
                      className={clsx(
                        'h-4 w-4 transform transition-all duration-300 ease-out',
                        activeDropdown === label ? 'rotate-180 text-primary' : 'rotate-0 text-white/70',
                      )}
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>

                  <div 
                    className={clsx(
                      "ml-2 mt-2 overflow-hidden transition-all duration-400 ease-out",
                      activeDropdown === label 
                        ? "max-h-96 opacity-100" 
                        : "max-h-0 opacity-0"
                    )}
                  >
                    <div className="flex flex-col gap-2 border-l border-white/10 pl-4">
                      {children.map((item, itemIndex) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => {
                            setIsMobileOpen(false)
                            setActiveDropdown(null)
                          }}
                          className={clsx(
                            'rounded-lg px-3 py-2 text-white transition-all duration-500 ease-out transform',
                            pathname === item.href
                              ? 'bg-primary font-medium text-black'
                              : 'hover:bg-white/10',
                            activeDropdown === label 
                              ? "translate-y-0 opacity-100" 
                              : "-translate-y-2 opacity-0"
                          )}
                          style={{ 
                            transitionDelay: activeDropdown === label ? `${150 + itemIndex * 100}ms` : '0ms' 
                          }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMobileOpen(false)}
                  className={clsx(
                    'block rounded-lg px-3 py-3 text-white transition-all duration-500 ease-out',
                    pathname === href
                      ? 'bg-primary font-medium text-black'
                      : 'hover:bg-white/10',
                    isMobileOpen 
                      ? "translate-x-0 opacity-100" 
                      : "translate-x-8 opacity-0"
                  )}
                  style={{ 
                    transitionDelay: isMobileOpen ? `${index * 100}ms` : '0ms' 
                  }}
                >
                  {label}
                </Link>
              ),
            )}
          </div>

          <div 
            className={clsx(
              "mt-auto flex gap-4 border-t border-white/10 pb-safe-bottom pt-6 transition-all duration-700 ease-out",
              "min-h-[80px] items-center",
              isMobileOpen 
                ? "translate-y-0 opacity-100" 
                : "translate-y-8 opacity-0"
            )}
            style={{ 
              transitionDelay: isMobileOpen ? '400ms' : '0ms',
              paddingBottom: 'max(12px, env(safe-area-inset-bottom))'
            }}
          >
            <SocialIcon
              href="https://x.com/goodmorningdevs"
              label="X"
              icon={<FaXTwitter size={20} />}
            />
            <SocialIcon
              href="https://www.linkedin.com/company/goodmorningdevs/"
              label="LinkedIn"
              icon={<FaLinkedinIn size={20} />}
            />
            <SocialIcon
              href="https://t.me/goranstoyanov"
              label="Telegram"
              icon={<FaTelegramPlane size={20} />}
            />
            <SocialIcon
              href="https://www.facebook.com/goodmorningdevs"
              label="Facebook"
              icon={<FaFacebookF size={20} />}
            />
          </div>
        </div>
      </div>
    </header>
  )
}
