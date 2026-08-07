import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'text'

interface BaseProps {
  variant?: Variant
  children: ReactNode
}

const base = 'inline-flex items-center justify-center gap-2 rounded-md font-mono text-sm transition-all duration-200 ease-out'
const variants: Record<Variant, string> = {
  primary: 'bg-accent text-background px-6 py-3 font-medium hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110 active:translate-y-0',
  secondary: 'border border-border-strong text-foreground px-6 py-3 hover:bg-accent hover:text-background hover:border-accent',
  text: 'text-accent px-0 py-0 underline-offset-4 hover:underline',
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>
export function Button({ variant = 'primary', className = '', children, ...rest }: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  )
}

type LinkButtonProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement>
export function LinkButton({ variant = 'primary', className = '', children, ...rest }: LinkButtonProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className} ${rest.href ? '' : 'pointer-events-none opacity-40'}`} {...rest}>
      {children}
    </a>
  )
}
