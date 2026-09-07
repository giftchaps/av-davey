import { clients } from '@/lib/site-data'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'

const wordmarkStyles: Record<string, string> = {
  ynhh: 'font-sans text-[15px] leading-none font-medium text-[oklch(0.35_0.1_250)]',
  stopshop: 'font-heading text-xl font-bold italic text-[oklch(0.45_0.2_20)]',
  pitney: 'font-sans text-base font-bold tracking-tight text-[oklch(0.25_0.02_260)]',
  ethanallen: 'font-heading text-2xl font-semibold tracking-wide text-primary',
}

export function ClientsSection() {
  return (
    <section aria-labelledby="clients-heading">
      <SectionHeading id="clients-heading" title="Some of Our Clients" />
      <ul className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4 xl:grid-cols-2">
        {clients.map((client) => (
          <li
            key={client.name}
            className="flex min-h-16 items-center justify-center rounded-md bg-muted/60 px-3 py-3 text-center"
          >
            {client.type === 'svg' ? (
              // Brand marks served by theSVG.org — trademarks belong to their owners.
              <img
                src={`https://thesvg.org/icons/${client.slug}/default.svg`}
                alt={client.name}
                width={90}
                height={36}
                loading="lazy"
                className="h-8 w-auto max-w-[90px] object-contain"
              />
            ) : (
              <span className={cn(wordmarkStyles[client.style])}>
                {client.name}
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
