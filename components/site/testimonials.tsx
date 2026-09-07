import { Quote, Star } from 'lucide-react'
import { testimonials } from '@/lib/site-data'
import { ScrollRow } from './scroll-row'

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="mx-auto max-w-7xl px-4 py-10 sm:px-6"
    >
      <h2
        id="testimonials-heading"
        className="text-center font-heading text-2xl font-bold tracking-wide text-primary uppercase"
      >
        What Our Clients Say
      </h2>
      <div className="mt-5">
        <ScrollRow label="testimonials">
          <ul className="grid grid-flow-col auto-cols-[88%] gap-4 sm:auto-cols-[60%] lg:grid-flow-row lg:grid-cols-3 lg:auto-cols-auto">
            {testimonials.map((t) => (
              <li
                key={t.name}
                className="flex snap-start gap-3 rounded-md border bg-card px-5 py-4 shadow-sm"
              >
                <Quote
                  className="size-7 shrink-0 scale-x-[-1] fill-muted text-muted"
                  aria-hidden
                />
                <figure className="flex flex-col gap-3">
                  <blockquote className="text-sm leading-relaxed italic text-foreground">
                    {t.quote}
                  </blockquote>
                  <figcaption className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span
                      className="flex gap-0.5 text-accent"
                      role="img"
                      aria-label="5 out of 5 stars"
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="size-3.5 fill-current" aria-hidden />
                      ))}
                    </span>
                    <span className="text-sm">
                      <span className="font-semibold">– {t.name}</span>
                      <span className="block text-xs text-muted-foreground">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </ScrollRow>
      </div>
    </section>
  )
}
