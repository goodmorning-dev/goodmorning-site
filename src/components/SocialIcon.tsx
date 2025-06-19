'use client'

import { ReactNode } from 'react'

interface SocialIconProps {
  icon: ReactNode
  href: string
  size?: number
}

export default function SocialIcon({ icon, href, size = 50 }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-[5px]"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 50 50"
        className="h-full w-full rounded-[5px]"
        style={{ overflow: 'visible' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="borderGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.25)" />
          </linearGradient>
          <clipPath id="customClip">
            <path
              d="
                M 0,5
                A 5 5 0 0 1 5 0
                H 40
                L 50 10
                V 45
                A 5 5 0 0 1 45 50
                H 5
                A 5 5 0 0 1 0 45
                Z
              "
            />
          </clipPath>
        </defs>

        <g clipPath="url(#customClip)">
          <path
            d="
              M 0,5
              A 5 5 0 0 1 5 0
              H 40
              L 50 10
              V 45
              A 5 5 0 0 1 45 50
              H 5
              A 5 5 0 0 1 0 45
              Z
            "
            fill="none"
            stroke="url(#borderGradient)"
            strokeWidth="3"
          />
        </g>
      </svg>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-white transition-colors duration-300 group-hover:text-primary">
        {icon}
      </div>
    </a>
  )
}
