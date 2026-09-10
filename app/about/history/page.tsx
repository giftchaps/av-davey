import type { Metadata } from 'next'
import Image from 'next/image'
import { CtaBand } from '@/components/site/cta-band'
import { PageHero } from '@/components/site/page-hero'
import { SectionHeading } from '@/components/site/section-heading'
import { historyMilestones } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Our History',
  description:
    'The story of A/V DAVEY: from freelance AV work in New York City hotels to founding the company in a Bridgeport hotel room in May 1989, to becoming a leading Connecticut systems integrator.',
}

export default function HistoryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Since May 1989"
        title="How a nickname became a company"
        description="Davey Katz never intended to be a boss. A hotel needed a name on an invoice, the staff already called him “AVDAVEY,” and a sales director refused to let him pick anything else."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'History' },
        ]}
        image="/images/history-1989.png"
        imageAlt="A late-1980s hotel meeting room with projector and screen"
      />

      <section aria-labelledby="timeline" className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <SectionHeading id="timeline" title="Timeline" subtitle="Thirty-five years and counting" />
        <ol className="relative mt-8 flex flex-col gap-10 border-l-2 border-primary/20 pl-8 sm:pl-12">
          {historyMilestones.map((m) => (
            <li key={m.title} className="relative">
              <span
                aria-hidden
                className="absolute top-1.5 -left-[41px] size-4 rounded-full border-4 border-background bg-accent ring-2 ring-primary/20 sm:-left-[57px]"
              />
              <p className="font-heading text-sm font-bold tracking-wider text-accent uppercase">
                {m.year}
              </p>
              <h3 className="mt-1 font-heading text-2xl font-bold text-primary">{m.title}</h3>
              <p className="mt-2 max-w-3xl leading-relaxed text-foreground/85">{m.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="today" className="bg-muted/60">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md shadow-md">
            <Image
              src="/images/history-today.png"
              alt="A/V DAVEY equipment workshop today"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading id="today" title="A/V DAVEY today" />
            <div className="mt-4 flex flex-col gap-4 leading-relaxed text-foreground/90">
              <p>
                Times change, markets change, and so has A/V DAVEY. The annual mega-stagings for
                Sikorsky, Stop &amp; Shop and Subway faded with budget cuts, technology and
                acquisitions — and systems integration stepped in to become the strongest part of the
                business.
              </p>
              <p>
                More than 75% of our effort now goes into selling and installing AV systems for
                commercial and residential clients: sound, lighting, video control, screens,
                projectors, monitors, video conferencing, collaborative systems and sound masking on
                the commercial side; home theater, distributed audio, smart home and networking at
                home.
              </p>
              <p>
                Safe to say we have seen virtually every type of corporate or institutional install in
                35-plus years. What has not changed is the phone number, the address on Clifton Place
                and the promise on the badge: first to show, last to go.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
