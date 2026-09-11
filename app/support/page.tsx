import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Headphones, LifeBuoy, Phone, Wrench } from 'lucide-react'
import { contact, supportFaqs } from '@/lib/site-data'
import { PageHero } from '@/components/site/page-hero'
import { InquiryForm } from '@/components/site/inquiry-form'

export const metadata: Metadata = {
  title: 'Support & Service Requests',
  description:
    'Submit an AV service request to A/V DAVEY. Troubleshooting help, repairs, preventative maintenance and service agreements across Connecticut.',
}

const paths = [
  {
    icon: Phone,
    title: 'Urgent: system down',
    text: `Call ${contact.phone}. During business hours you reach a technician directly; after hours, leave a message and we call back.`,
    action: { label: 'Call now', href: contact.phoneHref },
  },
  {
    icon: Wrench,
    title: 'Repair or maintenance',
    text: 'Use the form below. Include the room, the symptoms and when it started. Many issues are fixed remotely at no charge.',
    action: { label: 'Go to the form', href: '#service-request' },
  },
  {
    icon: LifeBuoy,
    title: 'Service agreement',
    text: 'Priority response, discounted labor and scheduled preventative visits for multi-room facilities.',
    action: { label: 'Ask about agreements', href: '/quote?service=service-support' },
  },
]

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="Before, during and after the job."
        description="Whether we installed your system or someone else did, we will get it working — at actual-time labor rates with no minimums."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Support' }]}
        image="/images/service-support.png"
        imageAlt="A/V DAVEY technician servicing an equipment rack"
      />

      <section aria-labelledby="paths-heading" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <h2 id="paths-heading" className="sr-only">
          How to get help
        </h2>
        <ul className="grid gap-4 md:grid-cols-3">
          {paths.map((p) => (
            <li
              key={p.title}
              className="flex flex-col gap-3 rounded-md border border-border bg-card p-6 shadow-sm"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <p.icon className="size-5" aria-hidden />
              </span>
              <h3 className="font-heading text-lg font-bold text-primary">{p.title}</h3>
              <p className="grow text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              <Link
                href={p.action.href}
                className="inline-flex items-center gap-1.5 text-sm font-bold tracking-wide text-accent uppercase hover:underline"
              >
                {p.action.label}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="service-request"
        aria-labelledby="request-heading"
        className="scroll-mt-24 bg-muted"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:py-16">
          <div className="lg:col-span-7">
            <p className="flex items-center gap-2 text-sm font-semibold tracking-wide text-primary uppercase">
              <span className="h-0.5 w-5 bg-accent" aria-hidden />
              Service request
            </p>
            <h2 id="request-heading" className="mt-2 font-heading text-3xl font-extrabold text-primary uppercase">
              Tell us what it&apos;s doing
            </h2>
            <p className="mt-2 mb-6 text-muted-foreground">
              The more specific the better: what you see, what you hear, and what you expected.
            </p>
            <InquiryForm kind="service" />
          </div>
          <aside className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <Headphones className="size-6 text-accent" aria-hidden />
              <h2 className="font-heading text-2xl font-bold text-primary">Quick fixes to try first</h2>
            </div>
            <div className="mt-4 flex flex-col gap-3">
              {supportFaqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-md border border-border bg-card open:shadow-sm"
                >
                  <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start justify-between gap-4">
                      {f.q}
                      <span
                        aria-hidden
                        className="mt-1 shrink-0 text-accent transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
