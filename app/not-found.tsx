import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { navigation } from '@/lib/site-data'

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-start gap-6 px-4 py-24 sm:px-6">
      <p className="flex items-center gap-2 text-sm font-semibold tracking-wide text-primary uppercase">
        <span className="h-0.5 w-5 bg-accent" aria-hidden />
        No signal
      </p>
      <h1 className="font-heading text-5xl leading-none font-extrabold text-primary uppercase">
        That page isn&apos;t on the input list.
      </h1>
      <p className="text-lg leading-relaxed text-muted-foreground">
        The link may be outdated. Try one of these instead — or call us and a human will point you
        the right way.
      </p>
      <ul className="flex flex-wrap gap-3">
        {navigation.primary.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {item.label}
              <ArrowRight className="size-3.5" aria-hidden />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
