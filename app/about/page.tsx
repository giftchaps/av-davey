import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, HandHeart, ShieldCheck, Timer } from 'lucide-react'
import { CtaBand } from '@/components/site/cta-band'
import { PageHero } from '@/components/site/page-hero'
import { SectionHeading } from '@/components/site/section-heading'
import { ClientsSection } from '@/components/site/clients-section'

export const metadata: Metadata = {
  title: 'About A/V DAVEY',
  description:
    'Family-owned audio visual company in Bridgeport, CT since 1989. Meet the A/V-ATORS, read our history, and see why clients from Fortune 500s to houses of worship keep calling.',
}

const values = [
  {
    icon: Timer,
    title: 'First to show, last to go',
    text: 'The A/V-ATORS motto is on our badge because it is how we work. We arrive before you need us and leave after the room is clear.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality equipment',
    text: 'Only best-in-class product goes on our trucks. If it is a quality product we will happily recommend it — even when it is not the most expensive option.',
  },
  {
    icon: HandHeart,
    title: 'Personal service',
    text: 'You talk to people who know your rooms. Small by design, backed by a vetted network of specialists when the job calls for it.',
  },
  {
    icon: Award,
    title: 'Guaranteed results',
    text: 'We research every system before we install it — which is why we usually do not see customers again until it is time to upgrade.',
  },
]

const links = [
  {
    href: '/about/history',
    title: 'Our History',
    text: 'From freelancing in Manhattan hotels to a $10,000 loan, one hotel room and 35+ years of A/V.',
    image: '/images/history-1989.png',
  },
  {
    href: '/about/team',
    title: 'The Crew',
    text: 'Meet Davey, Felix, our freelance network — and Foster, the resident cat.',
    image: '/images/team-network.png',
    contain: true,
  },
  {
    href: '/about/wall-of-fame',
    title: 'Wall of Fame',
    text: 'Presidents, broadcasters, authors and performers whose events we have supported.',
    image: '/images/project-gala.png',
  },
]

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About A/V DAVEY"
        title="Connecticut's trusted AV partner since 1989"
        description="A/V DAVEY is a family-owned audio visual company headquartered in Bridgeport. We design and install systems, produce live events, shoot and stream video, service what breaks and sell the gear — for corporations, schools, hospitals, hotels, houses of worship and homeowners across the Tri-State."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
        image="/images/history-today.png"
        imageAlt="A/V DAVEY equipment workshop in Bridgeport"
      />

      <section aria-labelledby="values" className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <SectionHeading id="values" title="What we stand for" subtitle="Quality equipment. Personal service. Guaranteed results." />
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <li key={v.title} className="flex flex-col gap-3 rounded-md border bg-card p-6 shadow-sm">
              <span className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <v.icon className="size-5" aria-hidden />
              </span>
              <h3 className="font-heading text-xl leading-tight font-bold text-primary uppercase">{v.title}</h3>
              <p className="text-sm leading-relaxed text-foreground/85">{v.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="davey" className="bg-[linear-gradient(180deg,var(--sky-light)_0%,var(--background)_100%)]">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-12">
          <div className="flex justify-center lg:col-span-4">
            <Image
              src="/images/davey-caricature.png"
              alt="Caricature of Davey Katz"
              width={420}
              height={420}
              className="w-64 drop-shadow-xl lg:w-80"
            />
          </div>
          <div className="lg:col-span-8">
            <SectionHeading id="davey" title="A word from Davey" />
            <blockquote className="mt-4 text-xl leading-relaxed text-foreground/90 sm:text-2xl">
              &ldquo;I started A/V DAVEY in a single hotel room with a ten-thousand-dollar loan and some
              leftover gear. Thirty-five years later, the equipment has changed a hundred times — the
              job hasn&apos;t. Show up early, listen carefully, do it right, and be the last one out the
              door. Every client gets treated like family and every project like it&apos;s our own.&rdquo;
            </blockquote>
            <p className="mt-4 font-heading text-lg font-bold text-primary">
              Davey Katz
              <span className="block text-sm font-semibold text-accent">CEO / Head Cheerleader</span>
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="more" className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <SectionHeading id="more" title="Get to know us" />
        <ul className="mt-6 grid gap-5 md:grid-cols-3">
          {links.map((l) => (
            <li key={l.href} className="group overflow-hidden rounded-md border bg-card shadow-sm transition-shadow hover:shadow-md">
              <Link href={l.href} className="flex h-full flex-col">
                <div className={`relative aspect-[16/10] ${l.contain ? 'bg-secondary' : ''}`}>
                  <Image
                    src={l.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className={l.contain ? 'object-contain p-4' : 'object-cover transition-transform duration-500 group-hover:scale-105'}
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-2xl font-bold text-primary uppercase">{l.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/85">{l.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold tracking-wider text-accent uppercase">
                    Read more
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t bg-muted/60">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <ClientsSection />
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
