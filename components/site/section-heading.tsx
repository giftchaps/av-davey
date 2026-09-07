import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function SectionHeading({
  id,
  title,
  subtitle,
  link,
}: {
  id?: string
  title: string
  subtitle?: string
  link?: { label: string; href: string }
}) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
      <h2
        id={id}
        className="flex items-center gap-2 font-heading text-xl font-bold tracking-wide text-primary uppercase"
      >
        <span className="h-0.5 w-4 bg-accent" aria-hidden />
        {title}
        {subtitle && (
          <span className="hidden text-sm font-semibold tracking-widest text-muted-foreground sm:inline">
            {subtitle}
          </span>
        )}
      </h2>
      {link && (
        <Link
          href={link.href}
          className="flex items-center gap-1 text-xs font-semibold tracking-wider text-primary uppercase hover:text-accent"
        >
          {link.label}
          <ArrowRight className="size-3.5" aria-hidden />
        </Link>
      )}
    </div>
  )
}
