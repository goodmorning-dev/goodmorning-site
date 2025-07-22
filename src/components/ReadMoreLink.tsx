'use client'

import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'
import { clsx } from 'clsx'

interface ReadMoreLinkProps {
  href: string
  label?: string
  className?: string
  nofollow?: boolean
}

export default function ReadMoreLink({
  href,
  label = 'READ MORE',
  className,
  nofollow = false,
}: ReadMoreLinkProps) {
  const sharedClasses = clsx(
    'group inline-flex items-center font-bold tracking-[2.3px] text-primary transition-colors duration-300 hover:text-white',
    className,
  )

  return nofollow ? (
    <a href={href} rel="nofollow" className={sharedClasses} target="_blank">
      {label}
      <FaArrowRightLong className="ml-4 transition-transform duration-300 group-hover:translate-x-2" />
    </a>
  ) : (
    <Link href={href} className={sharedClasses}>
      {label}
      <FaArrowRightLong className="ml-4 transition-transform duration-300 group-hover:translate-x-2" />
    </Link>
  )
}
