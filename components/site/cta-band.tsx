import Link from 'next/link'
import { ArrowRight, Headphones, Mail, MapPin, Phone } from 'lucide-react'
import { contact } from '@/lib/site-data'

export function CtaBand() {
  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="relative scroll-mt-24 overflow-hidden bg-navy-deep text-primary-foreground"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[url('/images/circuit-band.png')] bg-cover bg-center opacity-60"
      />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:justify-between">
        <div className="flex items-center gap-4">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-full border-2 border-primary-foreground/70 bg-primary">
            <Headphones className="size-7" aria-hidden />
          </span>
          <div>
            <h2 id="cta-heading" className="font-heading text-2xl font-bold uppercase sm:text-3xl">
              Ready to Elevate Your Next Project?
            </h2>
            <p className="text-sm text-primary-foreground/85 sm:text-base">
              Let&apos;s create an AV experience that leaves a lasting impression.
            </p>
          </div>
        </div>

        <Link
          href={`mailto:${contact.email}?subject=Quote%20Request`}
          className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 font-heading text-lg font-bold tracking-wide text-accent-foreground uppercase shadow-md transition-colors hover:bg-accent/90"
        >
          Request a Quote
          <ArrowRight className="size-5" aria-hidden />
        </Link>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <li>
            <a href={contact.phoneHref} className="flex items-center gap-2 hover:underline">
              <Phone className="size-4" aria-hidden />
              {contact.phone}
            </a>
          </li>
          <li>
            <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:underline">
              <Mail className="size-4" aria-hidden />
              {contact.email}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="size-4" aria-hidden />
            {contact.location}
          </li>
        </ul>
      </div>
    </section>
  )
}
