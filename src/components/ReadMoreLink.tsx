'use client'

import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'
import { clsx } from 'clsx'

interface ReadMoreLinkProps {
  href: string
  label?: string
  className?: string
}

export default function ReadMoreLink({
  href,
  label = 'READ MORE',
  className,
}: ReadMoreLinkProps) {
  return (
    <Link
      href={href}
      className={clsx(
        'group inline-flex items-center font-bold tracking-[2.3px] text-primary transition-colors duration-300 hover:text-white',
        className,
      )}
    >
      {label}
      <FaArrowRightLong className="ml-4 transition-transform duration-300 group-hover:translate-x-2" />
    </Link>
  )
}
