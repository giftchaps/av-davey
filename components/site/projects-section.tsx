import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/site-data'
import { ScrollRow } from './scroll-row'
import { SectionHeading } from './section-heading'

export function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-24">
      <SectionHeading
        id="projects-heading"
        title="Featured Projects"
        link={{ label: 'View all projects', href: '/projects' }}
      />
      <div className="mt-4">
        <ScrollRow label="projects">
          <ul className="grid grid-flow-col auto-cols-[75%] gap-3 sm:auto-cols-[45%] xl:grid-flow-row xl:grid-cols-2 xl:auto-cols-auto">
            {projects
              .filter((p) => p.featured)
              .map((project) => (
                <li
                  key={project.slug}
                  className="relative aspect-[16/10] snap-start overflow-hidden rounded-md shadow-sm"
                >
                  <Link
                    href={`/projects?category=${encodeURIComponent(project.category)}`}
                    className="group block h-full"
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} in ${project.location}`}
                      fill
                      sizes="(min-width: 1280px) 20vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-navy-deep/90 px-3 py-2 text-primary-foreground">
                      <h3 className="font-heading text-base font-bold">{project.title}</h3>
                      <p className="text-xs text-primary-foreground/80">{project.location}</p>
                    </div>
                  </Link>
                </li>
              ))}
          </ul>
        </ScrollRow>
      </div>
    </section>
  )
}
