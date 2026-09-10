import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { CtaBand } from '@/components/site/cta-band'
import { PageHero } from '@/components/site/page-hero'
import { SectionHeading } from '@/components/site/section-heading'
import { team } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'The Crew',
  description:
    'Meet the A/V-ATORS: Davey Katz, Felix Rosales, our vetted network of freelance specialists and Foster, the resident cat.',
}

const network = [
  'Sound engineers (A1/A2)',
  'Camera operators & directors',
  'Lighting designers',
  'Video editors & motion graphics',
  'Stage managers',
  'Riggers & stagehands',
]

export default function TeamPage() {
  return (
    <main>
      <PageHero
        eyebrow="Meet the A/V-ATORS"
        title="The Crew"
        description="Small by design. A tight core team that knows your rooms by name, backed by a roster of specialists we have worked with for years."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'The Crew' },
        ]}
      />

      <section aria-labelledby="core" className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <SectionHeading id="core" title="Core team" />
        <ul className="mt-8 flex flex-col gap-12">
          {team.map((member, i) => (
            <li
              key={member.name}
              className="grid items-center gap-8 lg:grid-cols-12"
            >
              <div className={`flex justify-center lg:col-span-4 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex aspect-square w-full max-w-sm items-end justify-center overflow-hidden rounded-md bg-[linear-gradient(180deg,var(--sky)_0%,var(--sky-light)_100%)] p-4 shadow-md">
                  <Image
                    src={member.image}
                    alt={`Caricature of ${member.name}`}
                    width={400}
                    height={400}
                    className="max-h-full w-auto drop-shadow-xl"
                  />
                </div>
              </div>
              <div className={`lg:col-span-8 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="font-heading text-4xl font-extrabold text-primary uppercase">{member.name}</h3>
                <p className="font-semibold text-accent">{member.role}</p>
                <div className="mt-4 flex flex-col gap-3 leading-relaxed text-foreground/90">
                  {member.bio.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                <p className="mt-4 flex items-start gap-2 rounded-md border bg-secondary px-4 py-3 text-sm text-secondary-foreground">
                  <Sparkles className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                  <span>
                    <span className="font-semibold">Something people may not know: </span>
                    {member.fact}
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="network" className="bg-muted/60">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Image
              src="/images/team-network.png"
              alt="Illustration of A/V DAVEY freelance crew members"
              width={640}
              height={480}
              className="w-full drop-shadow-lg"
            />
          </div>
          <div className="lg:col-span-7">
            <SectionHeading id="network" title="Freelancers & vendors" />
            <p className="mt-4 leading-relaxed text-foreground/90">
              While our core team keeps the wheels turning, an AV company is only as strong as its
              wider network. We work with a roster of vetted specialists and maintain strong
              relationships with manufacturers and vendors.
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {network.map((n) => (
                <li key={n} className="rounded-md border bg-card px-3 py-2 text-sm font-medium">
                  {n}
                </li>
              ))}
            </ul>
            <p className="mt-5 rounded-md bg-primary px-5 py-4 text-primary-foreground">
              <span className="font-heading text-lg font-bold uppercase">The client advantage: </span>
              you get the agility and personal attention of a tight-knit AV partner, backed by the
              specialized talent that our partners deliver.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6">
        <h2 className="font-heading text-3xl font-bold text-primary uppercase">Want to join the crew?</h2>
        <p className="mx-auto mt-2 max-w-xl text-foreground/85">
          We are always glad to meet experienced technicians and operators in the Connecticut area.
        </p>
        <Link
          href="/contact?topic=careers"
          className="mt-5 inline-flex items-center gap-2 rounded-md border-2 border-primary px-6 py-3 font-heading text-lg font-bold tracking-wide text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Introduce yourself
          <ArrowRight className="size-5" aria-hidden />
        </Link>
      </section>

      <CtaBand />
    </main>
  )
}
