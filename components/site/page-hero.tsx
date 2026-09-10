import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

type Crumb = { label: string; href?: string }

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string
  title: string
  description?: string
  crumbs: Crumb[]
  image?: string
  imageAlt?: string
  children?: React.ReactNode
}) {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-primary-foreground">
      <div
        aria-hidden
        className="absolute inset-0 bg-[url('/images/circuit-band.png')] bg-cover bg-center opacity-40"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(90deg,var(--navy-deep)_0%,var(--navy-deep)_45%,transparent_100%)]"
      />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:items-center lg:py-16">
        <div className={image ? 'lg:col-span-7' : 'lg:col-span-9'}>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-primary-foreground/70">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-1">
                  {i > 0 && <ChevronRight className="size-3.5" aria-hidden />}
                  {c.href ? (
                    <Link href={c.href} className="hover:text-primary-foreground hover:underline">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-primary-foreground">
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <p className="mt-5 flex items-center gap-2 text-sm font-semibold tracking-wide uppercase">
            <span className="h-0.5 w-5 bg-accent" aria-hidden />
            {eyebrow}
          </p>
          <h1 className="mt-3 font-heading text-4xl leading-none font-extrabold tracking-tight text-balance uppercase sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/85">
              {description}
            </p>
          )}
          {children && <div className="mt-7">{children}</div>}
        </div>
        {image && (
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-md border-2 border-primary-foreground/20 shadow-2xl">
              <Image
                src={image}
                alt={imageAlt ?? ''}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
