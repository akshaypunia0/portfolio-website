import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
    download?: string | boolean
  }

type ButtonProps = ButtonAsButton | ButtonAsLink

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-blue-600 text-white hover:bg-blue-500 border border-blue-500/40 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30',
  secondary:
    'bg-zinc-800/60 text-zinc-100 hover:bg-zinc-700/80 border border-zinc-700/80 hover:border-zinc-600 backdrop-blur-sm',
  ghost: 'bg-transparent text-zinc-300 hover:text-white hover:bg-zinc-800/50 border border-transparent',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3 text-base',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 ${variants[variant]} ${sizes[size]} ${className}`

  if ('href' in props && props.href) {
    const { href, download, ...linkProps } = props
    const isExternal =
      !download &&
      (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('#'))

    return (
      <a
        href={href}
        className={classes}
        download={download}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...linkProps}
      />
    )
  }

  return <button className={classes} {...(props as ButtonAsButton)} />
}
