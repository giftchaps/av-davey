import type { Metadata } from 'next'
import Link from 'next/link'
import { ClipboardList, Phone, Ruler, ShieldCheck, Timer } from 'lucide-react'
import { contact, getService } from '@/lib/site-data'
import { PageHero } from '@/components/site/page-hero'
import { InquiryForm } from '@/components/site/inquiry-form'

export const metadata: Metadata = {
  title: 'Request a Quote',
  description:
    'Request a quote from A/V DAVEY for AV installation, event production, video, service or equipment. Clear proposals, honest pricing, one business day response.',
}

const expectations = [
  {
    icon: Timer,
    title: 'One business day',
    text: 'You hear back from a person — usually with a couple of clarifying questions.',
  },
  {
    icon: Ruler,
    title: 'A real site visit',
    text: 'For installs and events we come see the room. Quotes from photos alone lead to surprises.',
  },
  {
    icon: ClipboardList,
    title: 'A proposal you can read',
    text: 'Plain-English scope, product options at different price points and line-item pricing.',
  },
  {
    icon: ShieldCheck,
    title: 'No pressure',
    text: 'If the right answer is a smaller project or a repair instead of a replacement, we will say so.',
  },
]

export default async function QuotePage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>
}) {
  const { service } = await searchParams
  const preselected = service && getService(service) ? service : undefined

  return (
    <>
      <PageHero
        eyebrow="Request a quote"
        title="Tell us about the project."
        description="A few details now save a lot of back-and-forth later. Not sure what you need? That is fine — describe the problem and we will recommend the fix."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Request a Quote' }]}
      >
        <a
          href={contact.phoneHref}
          className="inline-flex items-center gap-2 rounded-md border-2 border-primary-foreground/60 px-5 py-2.5 font-heading text-base font-bold tracking-wide uppercase transition-colors hover:bg-primary-foreground hover:text-primary"
        >
          <Phone className="size-4" aria-hidden />
          Or call {contact.phone}
        </a>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <InquiryForm kind="quote" defaultService={preselected} />
          </div>
          <aside className="lg:col-span-4">
            <h2 className="font-heading text-xl font-bold text-primary">What to expect</h2>
            <ul className="mt-4 flex flex-col gap-4">
              {expectations.map((e) => (
                <li key={e.title} className="flex gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <e.icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-bold text-foreground">{e.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{e.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-md bg-muted p-5">
              <h3 className="font-heading text-base font-bold text-primary">
                Helpful things to include
              </h3>
              <ul className="mt-2 list-disc pl-5 text-sm leading-relaxed text-muted-foreground">
                <li>Room dimensions or a floor plan</li>
                <li>Photos of the space and existing equipment</li>
                <li>How many people use the room and for what</li>
                <li>Platforms you rely on (Teams, Zoom, etc.)</li>
                <li>Deadlines or event dates</li>
              </ul>
              <p className="mt-3 text-sm text-muted-foreground">
                Email attachments to{' '}
                <a href={`mailto:${contact.email}`} className="font-semibold text-accent hover:underline">
                  {contact.email}
                </a>{' '}
                with your reference number.
              </p>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Need a repair rather than a quote?{' '}
              <Link href="/support" className="font-semibold text-accent hover:underline">
                Submit a service request
              </Link>
              .
            </p>
          </aside>
        </div>
      </section>
    </>
  )
}
