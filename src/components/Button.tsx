import { ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  outlined?: boolean
  className?: string
  background?: string
  onClick?: () => void
  hoverColor?: string
  hoverTextColor?: string
}

export default function Button({
  children,
  variant = 'primary',
  outlined = false,
  className,
  background = 'bg-black',
  onClick,
  hoverColor,
  hoverTextColor,
}: ButtonProps) {
  const isSecondary = variant === 'secondary'
  const borderColor = isSecondary ? 'border-secondary' : 'border-primary'
  const bgColor = isSecondary ? 'bg-secondary' : 'bg-primary'

  const hoverBgColor = isSecondary
    ? 'group-hover:bg-secondary'
    : 'group-hover:bg-primary'

  const glowColor = isSecondary
    ? 'drop-shadow-[0_0_25px_rgba(89,89,255,0.4)]'
    : 'drop-shadow-[0_0_25px_rgba(18,213,202,0.4)] hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]'

  const clipPath =
    'polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 0 100%)'

  const hoverBgPrimary = hoverColor
    ? `group-hover:${hoverColor}`
    : 'group-hover:bg-white'

  const hoverTextPrimary = hoverTextColor
    ? `group-hover:${hoverTextColor}`
    : 'group-hover:text-black'

  return (
    <button
      onClick={onClick}
      className={clsx(
        'group relative inline-block min-w-[214px] overflow-visible',
        `transition-300 filter transition-all ${glowColor}`,
        className,
      )}
      style={{ background: 'transparent' }}
    >
      {/* Outline background layer */}
      {outlined && (
        <span
          className={clsx(
            'absolute inset-0 z-0 rounded-md transition-all duration-300',
            bgColor,
          )}
          style={{
            clipPath,
            WebkitClipPath: clipPath,
          }}
        />
      )}

      <span
        className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-md"
        style={{
          clipPath,
          WebkitClipPath: clipPath,
        }}
      >
        <span
          className={clsx(
            'absolute left-[-100%] top-1/2 w-[120%] transform opacity-0 blur-sm transition-all duration-700 ease-in-out group-hover:left-[100%] group-hover:opacity-80',
            isSecondary
              ? 'bg-gradient-to-r from-transparent via-white to-transparent'
              : 'bg-gradient-to-r from-transparent via-black to-transparent',
          )}
          style={{
            height: '6px',
            transform: 'translateY(-50%) rotate(20deg)',
          }}
        />
      </span>

      {/* Foreground button content */}
      <span
        className={clsx(
          'relative z-10 inline-flex w-full items-center justify-center px-4 py-3',
          'rounded-md text-base font-bold uppercase tracking-[2.3px] transition-all duration-300',
          outlined
            ? clsx(background, hoverBgColor)
            : `${bgColor} text-black ${borderColor} ${hoverBgPrimary} ${hoverTextPrimary}`,
        )}
        style={{
          clipPath,
          WebkitClipPath: clipPath,
          ...(outlined && {
            width: 'calc(100% - 2px)',
            margin: '1px',
          }),
        }}
      >
        {children}
      </span>
    </button>
  )
}
