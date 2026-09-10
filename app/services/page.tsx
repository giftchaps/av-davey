import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { CtaBand } from '@/components/site/cta-band'
import { PageHero } from '@/components/site/page-hero'
import { SectionHeading } from '@/components/site/section-heading'
import { ServiceIcon } from '@/components/site/service-icon'
import { services } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Audio Visual Services',
  description:
    'AV installation and systems integration, event production and staging, service and repairs, video production and streaming, and equipment sales from A/V DAVEY in Bridgeport, CT.',
}

const promises = [
  'One point of contact from first call to final walkthrough',
  'Best-in-class product — never the most expensive by default',
  'Actual-time labor rates with no minimums',
  'A crew that shows up first and leaves last',
]

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Full-service audio visual"
        title="Five-star services, one crew"
        description="From a single display to a campus-wide rollout, from a boardroom huddle to a 600-guest gala — A/V DAVEY designs, installs, produces, services and sells the technology that makes your message land."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      >
        <ul className="grid gap-2 sm:grid-cols-2">
          {promises.map((p) => (
            <li key={p} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
              {p}
            </li>
          ))}
        </ul>
      </PageHero>

      <section aria-labelledby="services-list" className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <SectionHeading id="services-list" title="What we do" subtitle="Choose a service to learn more" />
        <ul className="mt-8 flex flex-col gap-10">
          {services.map((service, i) => (
            <li
              key={service.slug}
              className="grid items-center gap-6 lg:grid-cols-12 lg:gap-10"
            >
              <div className={i % 2 === 1 ? 'lg:col-span-5 lg:order-2' : 'lg:col-span-5'}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-md shadow-md">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 ring-background">
                    <ServiceIcon name={service.icon} className="size-5" />
                  </span>
                </div>
              </div>
              <div className={i % 2 === 1 ? 'lg:col-span-7 lg:order-1' : 'lg:col-span-7'}>
                <p className="text-sm font-semibold tracking-wide text-accent uppercase">
                  {service.tagline}
                </p>
                <h3 className="mt-1 font-heading text-3xl font-bold text-primary uppercase sm:text-4xl">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-2xl leading-relaxed text-foreground/85">
                  {service.intro[0]}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {service.capabilities.slice(0, 5).map((c) => (
                    <li
                      key={c.title}
                      className="rounded-full border bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground"
                    >
                      {c.title}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-5 inline-flex items-center gap-2 rounded-md border-2 border-primary px-5 py-2.5 font-heading text-base font-bold tracking-wide text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Explore {service.navLabel}
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </main>
  )
}
