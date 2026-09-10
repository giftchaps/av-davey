import type { Metadata } from 'next'
import { Star } from 'lucide-react'
import { CtaBand } from '@/components/site/cta-band'
import { PageHero } from '@/components/site/page-hero'
import { wallOfFame } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Wall of Fame',
  description:
    'Notable people A/V DAVEY has worked with over 35 years: presidents, senators, broadcasters, authors, actors and musicians.',
}

const order = ['Government', 'Film & TV', 'Media', 'Sports', 'Music', 'Authors', 'Speakers']

export default function WallOfFamePage() {
  const groups = order
    .map((category) => ({
      category,
      people: wallOfFame.filter((p) => p.category === category),
    }))
    .filter((g) => g.people.length > 0)

  return (
    <main>
      <PageHero
        eyebrow="Showcasing notable people we've worked with"
        title="Wall of Fame"
        description="Presidents and first ladies. Hall-of-fame athletes and the broadcasters who call their games. Actors, authors and musicians. Over 35 years the A/V-ATORS have put a microphone in front of some remarkable people — and made sure every word was heard."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Wall of Fame' },
        ]}
      >
        <p className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-4 py-1.5 text-sm">
          <Star className="size-4 fill-accent text-accent" aria-hidden />
          {wallOfFame.length} notable names and counting
        </p>
      </PageHero>

      <section aria-label="Wall of Fame by category" className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-12">
          {groups.map((g) => (
            <div key={g.category}>
              <h2 className="flex items-center gap-3 font-heading text-2xl font-bold tracking-wide text-primary uppercase">
                <span className="h-0.5 w-6 bg-accent" aria-hidden />
                {g.category}
                <span className="text-base font-semibold text-muted-foreground">({g.people.length})</span>
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {g.people.map((p) => (
                  <li
                    key={p.name}
                    className="flex items-center gap-3 rounded-md border bg-card px-4 py-3 shadow-sm"
                  >
                    <span
                      aria-hidden
                      className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-base font-bold text-primary-foreground"
                    >
                      {p.name
                        .replace(/^(Mayor|Ambassador)\s/, '')
                        .split(/\s|&/)
                        .filter(Boolean)
                        .slice(0, 2)
                        .map((w) => w[0])
                        .join('')}
                    </span>
                    <span className="font-semibold text-foreground">{p.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
