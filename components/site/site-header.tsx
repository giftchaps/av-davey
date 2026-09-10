'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'
import { navigation } from '@/lib/site-data'
import { cn } from '@/lib/utils'
import { Logo } from './logo'

type NavItem = (typeof navigation.primary)[number]

function isActive(pathname: string, item: NavItem) {
  if (item.href === '/') return pathname === '/'
  return pathname === item.href || pathname.startsWith(`${item.href}/`)
}

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)

  useEffect(() => {
    setOpen(false)
    setExpanded(null)
  }, [pathname])

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navigation.primary.map((item) => {
              const active = isActive(pathname, item)
              const hasChildren = 'children' in item && item.children
              return (
                <li key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'flex items-center gap-1 border-b-2 py-1 text-[17px] font-medium transition-colors hover:text-accent',
                      active
                        ? 'border-accent text-primary'
                        : 'border-transparent text-foreground',
                    )}
                  >
                    {item.label}
                    {hasChildren && (
                      <ChevronDown
                        className="size-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
                        aria-hidden
                      />
                    )}
                  </Link>

                  {hasChildren && (
                    <div className="invisible absolute top-full left-1/2 z-50 -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <ul className="w-[340px] rounded-md border bg-popover p-2 text-popover-foreground shadow-xl">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={cn(
                                'block rounded-sm px-3 py-2.5 transition-colors hover:bg-secondary',
                                pathname === child.href && 'bg-secondary',
                              )}
                            >
                              <span className="block font-semibold text-primary">
                                {child.label}
                              </span>
                              <span className="block text-sm leading-snug text-muted-foreground">
                                {child.description}
                              </span>
                            </Link>
                          </li>
                        ))}
                        <li className="mt-1 border-t pt-1">
                          <Link
                            href={item.href}
                            className="flex items-center justify-between rounded-sm px-3 py-2 text-sm font-semibold text-accent hover:bg-secondary"
                          >
                            View all {item.label.toLowerCase()}
                            <ArrowRight className="size-4" aria-hidden />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={navigation.quote.href}
            className="hidden items-center gap-2 rounded-md bg-accent px-5 py-3 font-semibold text-accent-foreground shadow transition-colors hover:bg-accent/90 sm:inline-flex"
          >
            {navigation.quote.label}
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
          className="max-h-[calc(100vh-80px)] overflow-y-auto border-t bg-background lg:hidden"
        >
          <ul className="flex flex-col px-4 py-2">
            {navigation.primary.map((item) => {
              const active = isActive(pathname, item)
              const hasChildren = 'children' in item && item.children
              const isExpanded = expanded === item.label
              return (
                <li key={item.label} className="border-b">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className={cn(
                        'block flex-1 py-3 text-lg font-medium',
                        active ? 'text-accent' : 'text-foreground',
                      )}
                    >
                      {item.label}
                    </Link>
                    {hasChildren && (
                      <button
                        type="button"
                        onClick={() =>
                          setExpanded(isExpanded ? null : item.label)
                        }
                        aria-expanded={isExpanded}
                        className="flex size-10 items-center justify-center rounded-md text-primary"
                      >
                        <ChevronDown
                          className={cn(
                            'size-5 transition-transform',
                            isExpanded && 'rotate-180',
                          )}
                        />
                        <span className="sr-only">
                          Toggle {item.label} submenu
                        </span>
                      </button>
                    )}
                  </div>
                  {hasChildren && isExpanded && (
                    <ul className="flex flex-col gap-1 pb-3 pl-4">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block py-1.5 text-base text-foreground/90 hover:text-accent"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
            <li className="py-3">
              <Link
                href={navigation.quote.href}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 font-semibold text-accent-foreground"
              >
                {navigation.quote.label}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
