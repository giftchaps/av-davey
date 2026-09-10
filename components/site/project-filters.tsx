import Link from 'next/link'
import { projectCategories } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function ProjectFilters({ active }: { active?: string }) {
  const all = ['All', ...projectCategories]
  return (
    <nav aria-label="Filter projects by category">
      <ul className="flex flex-wrap gap-2">
        {all.map((c) => {
          const isActive = c === 'All' ? !active : active === c
          const href = c === 'All' ? '/projects' : `/projects?category=${encodeURIComponent(c)}`
          return (
            <li key={c}>
              <Link
                href={href}
                scroll={false}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'inline-flex rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors',
                  isActive
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-card text-primary hover:border-primary hover:bg-secondary',
                )}
              >
                {c}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
