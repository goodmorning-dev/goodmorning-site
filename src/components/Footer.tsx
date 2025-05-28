import Link from 'next/link'
import Image from 'next/image'
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import logo from '@/../public/logo.png'

export default function Footer() {
  return (
    <footer className="text-sm">
      <div className="bg-[url('/images/footer-bg.png')] bg-cover bg-center pt-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 pb-10 md:flex-row">
          <div className="max-w-xl">
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
              <button className="social-border">
                <FaFacebookF size={14} />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded border border-white/30 hover:border-primary">
                <FaLinkedinIn size={14} />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded border border-white/30 hover:border-primary">
                <FaXTwitter size={14} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-28 text-base">
            <ul className="space-y-4">
              <li>
                <Link href="#">Tech co-founder</Link>
              </li>
              <li>
                <Link href="#">Web3 consulting</Link>
              </li>
              <li>
                <Link href="#">MVP development</Link>
              </li>
              <li>
                <Link href="#">Staff augmentation</Link>
              </li>
              <li>
                <Link href="#">Web3 technical auditing</Link>
              </li>
              <li>
                <Link href="#">All services</Link>
              </li>
            </ul>
            <ul className="space-y-4">
              <li>
                <Link href="#">About us</Link>
              </li>
              <li>
                <Link href="#">Team</Link>
              </li>
              <li>
                <Link href="#">Case Studies</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Careers</Link>
              </li>
              <li>
                <Link href="#">Get in touch</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-s mx-auto flex max-w-7xl flex-col justify-between py-7 text-center opacity-60 md:flex-row md:text-left">
        <span>
          © {new Date().getFullYear()} goodmorning. All rights reserved.
        </span>
        <div className="mt-2 flex gap-6 md:mt-0">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Services</Link>
          <Link href="#">Sitemap</Link>
        </div>
      </div>
    </footer>
  )
}
