import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Check } from 'lucide-react'
import { CtaBand } from '@/components/site/cta-band'
import { PageHero } from '@/components/site/page-hero'
import { SectionHeading } from '@/components/site/section-heading'
import { ServiceIcon } from '@/components/site/service-icon'
import { getService, projects, services } from '@/lib/site-data'

type Params = Promise<{ slug: string }>

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const service = getService((await params).slug)
  if (!service) return {}
  return {
    title: `${service.title} in Connecticut`,
    description: `${service.description} ${service.tagline} A/V DAVEY, Bridgeport, CT.`,
  }
}

export default async function ServiceDetailPage({ params }: { params: Params }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const related = projects.filter((p) => p.service === slug).slice(0, 3)
  const others = services.filter((s) => s.slug !== slug)

  return (
    <main>
      <PageHero
        eyebrow={service.tagline}
        title={service.title}
        description={service.description}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.title },
        ]}
        image={service.image}
        imageAlt={`${service.title} by A/V DAVEY`}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href={`/quote?service=${service.slug}`}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-heading text-lg font-bold tracking-wide text-accent-foreground uppercase shadow-md transition-colors hover:bg-accent/90"
          >
            Request a Quote
            <ArrowRight className="size-5" aria-hidden />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md border-2 border-primary-foreground/70 px-6 py-3 font-heading text-lg font-bold tracking-wide uppercase transition-colors hover:bg-primary-foreground hover:text-primary"
          >
            Talk to Davey
          </Link>
        </div>
      </PageHero>

      {/* Overview */}
      <section aria-labelledby="overview" className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHeading id="overview" title="Overview" />
          <div className="mt-4 flex flex-col gap-4 text-lg leading-relaxed text-foreground/90">
            {service.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <aside className="lg:col-span-5">
          <div className="rounded-md border bg-secondary p-6">
            <h3 className="font-heading text-lg font-bold tracking-wide text-primary uppercase">
              Ideal for
            </h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {service.useCases.map((u) => (
                <li key={u} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                  {u}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      {/* Capabilities */}
      <section aria-labelledby="capabilities" className="bg-muted/60">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <SectionHeading id="capabilities" title="What's included" subtitle="Capabilities" />
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.capabilities.map((c) => (
              <li key={c.title} className="flex flex-col gap-2 rounded-md border bg-card p-5 shadow-sm">
                <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <ServiceIcon name={service.icon} className="size-4" />
                </span>
                <h3 className="font-heading text-lg leading-tight font-bold text-primary">
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section aria-labelledby="process" className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <SectionHeading id="process" title="How it works" subtitle="Our process" />
        <ol className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step, i) => (
            <li key={step.title} className="relative flex flex-col gap-2 border-t-4 border-primary pt-4">
              <span className="font-heading text-4xl font-extrabold text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-heading text-xl font-bold text-primary uppercase">{step.title}</h3>
              <p className="text-sm leading-relaxed text-foreground/85">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section aria-labelledby="related" className="bg-muted/60">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
            <SectionHeading
              id="related"
              title="Recent work"
              link={{ label: 'All projects', href: '/projects' }}
            />
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <li key={p.slug} className="overflow-hidden rounded-md border bg-card shadow-sm">
                  <div
                    className="aspect-[16/10] bg-cover bg-center"
                    style={{ backgroundImage: `url(${p.image})` }}
                    role="img"
                    aria-label={`${p.title}, ${p.location}`}
                  />
                  <div className="p-4">
                    <p className="text-xs font-semibold tracking-wider text-accent uppercase">{p.category}</p>
                    <h3 className="mt-1 font-heading text-xl font-bold text-primary">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.location}</p>
                    <p className="mt-2 text-sm leading-relaxed">{p.summary}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section aria-labelledby="faq" className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <SectionHeading id="faq" title="Common questions" />
        <dl className="mt-6 grid gap-6 md:grid-cols-3">
          {service.faqs.map((f) => (
            <div key={f.q} className="rounded-md border p-5">
              <dt className="font-heading text-lg font-bold text-primary">{f.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-foreground/85">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Other services */}
      <section aria-labelledby="other" className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <h2 id="other" className="font-heading text-sm font-bold tracking-wider text-muted-foreground uppercase">
            Other services
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {others.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-secondary"
                >
                  <ServiceIcon name={s.icon} className="size-4" />
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
