import Link from 'next/link'
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="bg-black text-white text-sm pt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 pb-10">
        <div className="max-w-2xl">
          <div className="text-3xl font-bold text-primary mb-6">gm</div>
          <p className="text-base mb-3">BUIDL what matters</p>
          <p className="mb-5 leading-relaxed opacity-60">
            goodmorning is an international Web3 development company specializing in building blockchain infrastructure.
            We have over 10 years of experience in smart contract auditing, dapp prototype development, wallet development,
            and Web3 technical consulting.
          </p>

          <p className="mb-7">hello@goodmorning.dev</p>

          <div className="flex gap-3">
            <button className="w-10 h-10 border border-white/30 rounded flex items-center justify-center hover:border-primary">
              <FaFacebookF size={14} />
            </button>
            <button className="w-10 h-10 border border-white/30 rounded flex items-center justify-center hover:border-primary">
              <FaLinkedinIn size={14} />
            </button>
            <button className="w-10 h-10 border border-white/30 rounded flex items-center justify-center hover:border-primary">
              <FaXTwitter size={14} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-24 text-base">
          <ul className="space-y-6">
            <li><Link href="#">Tech co-founder</Link></li>
            <li><Link href="#">Web3 consulting</Link></li>
            <li><Link href="#">MVP development</Link></li>
            <li><Link href="#">Staff augmentation</Link></li>
            <li><Link href="#">Web3 technical auditing</Link></li>
            <li><Link href="#">All services</Link></li>
          </ul>
          <ul className="space-y-6">
            <li><Link href="#">About us</Link></li>
            <li><Link href="#">Team</Link></li>
            <li><Link href="#">Case Studies</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Get in touch</Link></li>
          </ul>
        </div>
      </div>

      <div className="text-s text-center md:text-left max-w-7xl mx-auto py-7 flex flex-col md:flex-row justify-between opacity-60">
        <span>© {new Date().getFullYear()} goodmorning. All rights reserved.</span>
        <div className="flex gap-6 mt-2 md:mt-0">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Services</Link>
          <Link href="#">Sitemap</Link>
        </div>
      </div>
    </footer>
  )
}
