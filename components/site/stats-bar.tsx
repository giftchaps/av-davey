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
    <section aria-label="Why choose A/V DAVEY" className="relative z-20 -mt-16 px-4 sm:px-6">
      <ul className="mx-auto grid max-w-6xl grid-cols-1 divide-y rounded-lg border bg-card shadow-lg sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-5 [&>li:nth-child(odd)]:sm:border-l-0 [&>li:nth-child(n+3)]:sm:border-t lg:[&>li:nth-child(n+3)]:border-t-0">
        {stats.map((stat) => {
          const Icon = icons[stat.icon]
          return (
            <li key={stat.value} className="flex items-center gap-4 px-5 py-5">
              <Icon className="size-10 shrink-0 text-primary" strokeWidth={1.6} aria-hidden />
              <p className="font-heading leading-tight uppercase">
                <span className="block text-lg font-bold text-primary">{stat.value}</span>
                <span className="block text-sm font-semibold tracking-wide text-primary/80">
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
