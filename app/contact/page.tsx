import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Mail, MapPin, Phone, Wrench } from 'lucide-react'
import { contact } from '@/lib/site-data'
import { PageHero } from '@/components/site/page-hero'
import { InquiryForm } from '@/components/site/inquiry-form'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Call, email or visit A/V DAVEY in Bridgeport, Connecticut. We answer the phone and reply within one business day.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="We still answer the phone."
        description="Questions, quotes, service or just a second opinion — reach the crew directly. No call centers, no ticket queues."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-heading text-2xl font-bold text-primary">Send us a message</h2>
            <p className="mt-2 mb-6 text-muted-foreground">
              Looking for a project estimate?{' '}
              <Link href="/quote" className="font-semibold text-accent hover:underline">
                Use the quote form
              </Link>{' '}
              so we can ask the right questions. Something broken?{' '}
              <Link href="/support" className="font-semibold text-accent hover:underline">
                Submit a service request
              </Link>
              .
            </p>
            <InquiryForm kind="contact" />
          </div>

          <aside className="flex flex-col gap-6 lg:col-span-5">
            <div className="rounded-md bg-primary p-6 text-primary-foreground shadow-md">
              <h2 className="font-heading text-xl font-bold">Direct lines</h2>
              <ul className="mt-4 flex flex-col gap-4">
                <li>
                  <a href={contact.phoneHref} className="group flex items-start gap-3">
                    <Phone className="mt-0.5 size-5 shrink-0" aria-hidden />
                    <span>
                      <span className="block text-lg font-bold group-hover:underline">
                        {contact.phone}
                      </span>
                      <span className="text-sm text-primary-foreground/75">
                        Office, sales and service
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${contact.email}`} className="group flex items-start gap-3">
                    <Mail className="mt-0.5 size-5 shrink-0" aria-hidden />
                    <span>
                      <span className="block text-lg font-bold group-hover:underline">
                        {contact.email}
                      </span>
                      <span className="text-sm text-primary-foreground/75">
                        Goes straight to Davey
                      </span>
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0" aria-hidden />
                  <address className="not-italic">
                    <span className="block text-lg font-bold">A/V DAVEY, Inc.</span>
                    <span className="text-sm text-primary-foreground/75">
                      {contact.address.street}
                      <br />
                      {contact.address.city}, {contact.address.state} {contact.address.zip}
                    </span>
                  </address>
                </li>
              </ul>
            </div>

            <div className="rounded-md border border-border bg-card p-6 shadow-sm">
              <h2 className="flex items-center gap-2 font-heading text-xl font-bold text-primary">
                <Clock className="size-5" aria-hidden />
                Hours
              </h2>
              <dl className="mt-4 flex flex-col gap-2 text-sm">
                {contact.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-4 border-b border-border pb-2 last:border-0">
                    <dt className="font-semibold text-foreground">{h.days}</dt>
                    <dd className="text-muted-foreground">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="overflow-hidden rounded-md border border-border bg-card shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/service-area-map.png"
                  alt="Map of Connecticut and the Tri-State region with Bridgeport marked"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h2 className="font-heading text-lg font-bold text-primary">Where we work</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Home base is Bridgeport. Installation and service across Connecticut and the
                  Tri-State; event production anywhere on the East Coast.
                </p>
              </div>
            </div>

            <Link
              href="/support"
              className="flex items-center gap-3 rounded-md border-2 border-accent/30 bg-accent/5 p-4 text-sm font-semibold text-accent transition-colors hover:bg-accent/10"
            >
              <Wrench className="size-5" aria-hidden />
              System down? Submit an urgent service request.
            </Link>
          </aside>
        </div>
      </section>
    </>
  )
}
