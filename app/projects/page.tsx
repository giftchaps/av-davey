import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { CtaBand } from '@/components/site/cta-band'
import { PageHero } from '@/components/site/page-hero'
import { ProjectFilters } from '@/components/site/project-filters'
import { SectionHeading } from '@/components/site/section-heading'
import { getService, projectCategories, projects } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Projects & Portfolio',
  description:
    'Recent AV installations and event productions by A/V DAVEY across Connecticut: boardrooms, lecture halls, ballrooms, sanctuaries, home theaters and live events.',
}

type SearchParams = Promise<{ category?: string }>

export default async function ProjectsPage({ searchParams }: { searchParams: SearchParams }) {
  const { category } = await searchParams
  const active = projectCategories.find((c) => c === category)
  const list = active ? projects.filter((p) => p.category === active) : projects

  return (
    <main>
      <PageHero
        eyebrow="Our work"
        title="Projects that just work"
        description="A selection of recent installations and productions. Every one started the same way — a conversation about what the room needed to do — and ended with a client who did not have to think about the technology again."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Projects' }]}
        image="/images/project-live-event.png"
        imageAlt="Live event production with LED wall and stage lighting"
      />

      <section aria-labelledby="portfolio" className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="portfolio"
            title={active ? `${active} projects` : 'All projects'}
            subtitle={`${list.length} ${list.length === 1 ? 'project' : 'projects'}`}
          />
          <ProjectFilters active={active} />
        </div>

        {list.length === 0 ? (
          <p className="mt-10 rounded-md border bg-secondary p-8 text-center text-secondary-foreground">
            No projects in this category yet.{' '}
            <Link href="/projects" className="font-semibold text-accent underline">
              View all projects
            </Link>
          </p>
        ) : (
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => {
              const service = getService(p.service)
              return (
                <li key={p.slug} className="group flex flex-col overflow-hidden rounded-md border bg-card shadow-sm transition-shadow hover:shadow-md">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={`${p.title} in ${p.location}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 rounded-sm bg-navy-deep/90 px-2 py-1 text-xs font-bold tracking-wider text-primary-foreground uppercase">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-heading text-2xl leading-tight font-bold text-primary">{p.title}</h3>
                    <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="size-3.5" aria-hidden />
                      {p.location}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/85">{p.summary}</p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {p.scope.map((s) => (
                        <li key={s} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                          {s}
                        </li>
                      ))}
                    </ul>
                    {service && (
                      <Link
                        href={`/services/${service.slug}`}
                        className="mt-4 inline-flex items-center gap-1 text-xs font-bold tracking-wider text-accent uppercase hover:underline"
                      >
                        {service.title}
                        <ArrowRight className="size-3.5" aria-hidden />
                      </Link>
                    )}
                  </div>
                </li>
              )
            })}
          </ul>
        )}
      </section>

      <section className="border-t bg-muted/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-12 text-center sm:px-6">
          <h2 className="font-heading text-3xl font-bold text-primary uppercase">See the latest from the crew</h2>
          <p className="max-w-xl text-foreground/85">
            We post fresh photos from installs and shows as they happen. Follow along, or ask us for
            references in your industry.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://www.facebook.com/avdavey"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Follow on Facebook
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md border-2 border-primary px-5 py-2.5 font-semibold text-primary hover:bg-secondary"
            >
              Ask for references
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
