'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ScrollRow({
  children,
  className,
  label,
}: {
  children: React.ReactNode
  className?: string
  label: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  const scroll = (direction: 1 | -1) => {
    const el = ref.current
    if (!el) return
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => scroll(-1)}
        aria-label={`Previous ${label}`}
        className="hidden size-9 shrink-0 items-center justify-center rounded-full border bg-card text-primary shadow-sm hover:bg-secondary sm:flex"
      >
        <ChevronLeft className="size-5" aria-hidden />
      </button>
      <div
        ref={ref}
        className={cn(
          'flex-1 snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          className,
        )}
      >
        {children}
      </div>
      <button
        type="button"
        onClick={() => scroll(1)}
        aria-label={`Next ${label}`}
        className="hidden size-9 shrink-0 items-center justify-center rounded-full border bg-card text-primary shadow-sm hover:bg-secondary sm:flex"
      >
        <ChevronRight className="size-5" aria-hidden />
      </button>
    </div>
  )
}
