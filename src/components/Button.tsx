import { ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  outlined?: boolean
  className?: string
  background?: string
  onClick?: () => void
}

export default function Button({
  children,
  variant = 'primary',
  outlined = false,
  className,
  background = 'bg-black',
  onClick,
}: ButtonProps) {
  const isSecondary = variant === 'secondary'
  const borderColor = isSecondary ? 'border-secondary' : 'border-primary'
  const bgColor = isSecondary ? 'bg-secondary' : 'bg-primary'

  const hoverBgColor = isSecondary
    ? 'group-hover:bg-secondary'
    : 'group-hover:bg-primary'

  const glowColor = isSecondary
    ? 'drop-shadow-[0_0_25px_rgba(89,89,255,0.4)]'
    : 'drop-shadow-[0_0_25px_rgba(18,213,202,0.4)]'

  const clipPath =
    'polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 0 100%)'

  return (
    <button
      onClick={onClick}
      className={clsx(
        'group relative inline-block min-w-[214px] overflow-visible',
        `filter ${glowColor}`,
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
            'group-hover:opacity-0',
          )}
          style={{
            clipPath,
            WebkitClipPath: clipPath,
          }}
        />
      )}

      {/* Foreground button content */}
      <span
        className={clsx(
          'relative z-10 inline-flex w-full items-center justify-center px-4 py-3',
          'rounded-md text-base font-bold uppercase tracking-[2.3px] transition-all duration-300',
          outlined
            ? clsx(background, hoverBgColor)
            : `${bgColor} border border-solid text-black ${borderColor} group-hover:scale-105`,
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
