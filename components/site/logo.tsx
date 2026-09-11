import Image from 'next/image'
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
      <Image
        src="/images/logo.png"
        alt="A/V DAVEY"
        width={716}
        height={291}
        priority={size === 'md'}
        className={cn(
          'h-auto w-auto',
          size === 'md' ? 'h-14 sm:h-[68px]' : 'h-11',
        )}
      />
    </Link>
  )
}
