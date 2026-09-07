import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  size = 'md',
}: {
  className?: string
  size?: 'md' | 'sm'
}) {
  return (
    <Link
      href="/"
      aria-label="A/V DAVEY home"
      className={cn('inline-block shrink-0', className)}
    >
      <span
        className={cn(
          'relative inline-flex items-center justify-center bg-primary font-heading font-800 italic uppercase tracking-tight text-primary-foreground shadow-md ring-2 ring-accent',
          size === 'md' ? 'h-12 px-5 text-3xl sm:h-14 sm:px-6 sm:text-4xl' : 'h-10 px-4 text-2xl',
        )}
        style={{
          clipPath:
            'polygon(0% 12%, 25% 4%, 50% 10%, 75% 0%, 100% 6%, 100% 90%, 75% 100%, 50% 92%, 25% 100%, 0% 94%)',
          transform: 'skewY(-3deg)',
        }}
      >
        <span aria-hidden className="absolute inset-[3px] border border-primary-foreground/70" style={{ clipPath: 'inherit' }} />
        <span className="relative font-extrabold">
          AV<span className="text-primary-foreground/90">/</span>DAVEY
        </span>
      </span>
    </Link>
  )
}
