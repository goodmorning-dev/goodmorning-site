'use client'

import { ReactNode } from 'react'
import Image from 'next/image'

export default function SocialIcon({
  icon,
  href,
}: {
  icon: ReactNode
  href: string
}) {
  return (
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
}
