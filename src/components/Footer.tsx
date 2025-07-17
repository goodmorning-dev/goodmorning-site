import Link from 'next/link'
import Image from 'next/image'
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import footerItems from '@/constants/footerItems'
import SocialIcon from '@/components/SocialIcon'
import logo from '@/../public/logo.png'

export default function Footer() {
  return (
    <footer className="text-sm">
      <div className="bg-[url('/images/gradient-bg.png')] bg-cover bg-center pt-16">
        <div className="mx-auto flex max-w-8xl flex-col justify-between gap-8 px-5 pb-10 md:flex-row lg:px-0">
          <div className="max-w-2xl">
            <div className="mb-6">
              <Image
                src={logo}
                alt="GoodMorning Logo"
                width={80}
                height={50}
                priority
              />
            </div>
            <p className="mb-3 text-base">BUIDL what matters</p>
            <p className="mb-5 leading-relaxed opacity-60">
              goodmorning is an international Web3 development company
              specializing in building blockchain infrastructure. We have over
              10 years of experience in smart contract auditing, dapp prototype
              development, wallet development, and Web3 technical consulting.
            </p>

            <p className="mb-7">hello@goodmorning.dev</p>

            <div className="flex gap-3">
              <SocialIcon href="#" size={40} icon={<FaFacebookF size={14} />} />
              <SocialIcon href="#" size={40} icon={<FaXTwitter size={14} />} />
              <SocialIcon
                href="#"
                size={40}
                icon={<FaLinkedinIn size={14} />}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-28 text-base">
            {footerItems.map((category) => (
              <ul key={category.title} className="space-y-4">
                {category.items.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="transition-colors duration-200 hover:text-primary"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-8xl flex-col items-center justify-between py-7 md:flex-row">
        <span className="text-white/60">
          © {new Date().getFullYear()} goodmorning. All rights reserved.
        </span>
        <div className="mt-2 flex gap-6 md:mt-0">
          <Link
            href="/privacy-policy"
            className="text-white/60 transition-colors duration-200 hover:text-white"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-white/60 transition-colors duration-200 hover:text-white"
          >
            Terms of Services
          </Link>
          <Link
            href="#"
            className="text-white/60 transition-colors duration-200 hover:text-white"
          >
            Sitemap
          </Link>
        </div>
      </div>
    </footer>
  )
}
