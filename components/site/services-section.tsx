import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Monitor,
  ShoppingCart,
  Star,
  Video,
  Wrench,
} from 'lucide-react'
import { services } from '@/lib/site-data'
import { SectionHeading } from './section-heading'

const icons = {
  monitor: Monitor,
  star: Star,
  wrench: Wrench,
  video: Video,
  cart: ShoppingCart,
}

export function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-heading" className="scroll-mt-24">
      <SectionHeading
        id="services-heading"
        title="Our Services"
        subtitle="Full-service audio visual solutions"
        link={{ label: 'All services', href: '/services' }}
      />
      <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
        {services.map((service) => {
          const Icon = icons[service.icon]
          return (
            <li
              key={service.title}
              className="flex flex-col overflow-hidden rounded-md border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 14vw, (min-width: 640px) 30vw, 45vw"
                  className="object-cover"
                />
                <span className="absolute -bottom-4 left-3 flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 ring-card">
                  <Icon className="size-4" aria-hidden />
                </span>
              </div>
              <div className="flex flex-1 flex-col px-3 pt-7 pb-3">
                <h3 className="font-heading text-base leading-tight font-bold text-primary uppercase">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold tracking-wider text-accent uppercase hover:underline"
                >
                  Learn more
                  <ArrowRight className="size-3" aria-hidden />
                  <span className="sr-only"> about {service.title}</span>
                </Link>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
