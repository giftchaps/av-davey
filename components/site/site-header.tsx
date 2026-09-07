'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'
import { navLinks } from '@/lib/site-data'
import { cn } from '@/lib/utils'
import { Logo } from './logo'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  aria-current={link.active ? 'page' : undefined}
                  className={cn(
                    'flex items-center gap-1 border-b-2 pb-1 text-[17px] font-medium transition-colors hover:text-accent',
                    link.active
                      ? 'border-accent text-primary'
                      : 'border-transparent text-foreground',
                  )}
                >
                  {link.label}
                  {link.hasMenu && (
                    <ChevronDown className="size-4" aria-hidden />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden items-center gap-2 rounded-md bg-accent px-5 py-3 font-semibold text-accent-foreground shadow transition-colors hover:bg-accent/90 sm:inline-flex"
          >
            Request a Quote
            <ArrowRight className="size-4" aria-hidden />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex size-10 items-center justify-center rounded-md text-primary hover:bg-secondary lg:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t bg-background lg:hidden"
        >
          <ul className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block border-b py-3 text-lg font-medium',
                    link.active ? 'text-accent' : 'text-foreground',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="py-3">
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 font-semibold text-accent-foreground"
              >
                Request a Quote
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
