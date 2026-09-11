import {
  Building2,
  CalendarDays,
  Headphones,
  MapPin,
  Users,
} from 'lucide-react'
import { stats } from '@/lib/site-data'

const icons = {
  calendar: CalendarDays,
  users: Users,
  building: Building2,
  headphones: Headphones,
  pin: MapPin,
}

export function StatsBar() {
  return (
    <section aria-label="Why choose A/V DAVEY" className="relative z-20 -mt-8 px-4 sm:px-6">
      <ul className="mx-auto grid max-w-6xl grid-cols-1 divide-y rounded-lg border bg-card shadow-lg sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-5 [&>li:nth-child(odd)]:sm:border-l-0 [&>li:nth-child(n+3)]:sm:border-t lg:[&>li:nth-child(n+3)]:border-t-0">
        {stats.map((stat) => {
          const Icon = icons[stat.icon]
          return (
            <li key={stat.value} className="flex items-start gap-3 px-4 py-5 lg:px-4 xl:px-5">
              <Icon className="mt-0.5 size-8 shrink-0 text-primary" strokeWidth={1.6} aria-hidden />
              <p className="min-w-0 font-heading leading-tight uppercase">
                <span className="block text-base font-bold text-pretty text-primary xl:text-lg">
                  {stat.value}
                </span>
                <span className="mt-1 block text-xs font-semibold tracking-wide text-pretty text-primary/80 xl:text-sm">
                  {stat.label}
                </span>
              </p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
