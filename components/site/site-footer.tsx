import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { contact, footerColumns } from '@/lib/site-data'
import { Logo } from './logo'

const socials = [
  { name: 'Facebook', slug: 'facebook', href: 'https://facebook.com' },
  { name: 'LinkedIn', slug: 'linkedin', href: 'https://linkedin.com' },
  { name: 'Instagram', slug: 'instagram', href: 'https://instagram.com' },
  { name: 'YouTube', slug: 'youtube', href: 'https://youtube.com' },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-12">
        <div className="flex flex-col gap-5 lg:col-span-4 lg:border-r lg:border-primary-foreground/20 lg:pr-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Logo size="sm" />
            <p className="text-sm leading-relaxed text-primary-foreground/85">
              Professional AV solutions, live event production and technical
              support throughout Connecticut and beyond.
            </p>
          </div>
          <ul className="flex items-center gap-4">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex size-8 items-center justify-center rounded-md hover:bg-primary-foreground/10"
                >
                  {/* Social marks served by theSVG.org */}
                  <img
                    src={`https://thesvg.org/icons/${s.slug}/mono.svg`}
                    alt=""
                    width={20}
                    height={20}
                    loading="lazy"
                    className="size-5 invert"
                  />
                  <span className="sr-only">{s.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Quick links" className="lg:col-span-2">
          <h3 className="font-heading text-sm font-bold tracking-wider uppercase">Quick Links</h3>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-primary-foreground/85">
            {footerColumns.quickLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-primary-foreground hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services" className="lg:col-span-2">
          <h3 className="font-heading text-sm font-bold tracking-wider uppercase">Services</h3>
          <ul className="mt-3 flex flex-col gap-1.5 text-sm text-primary-foreground/85">
            {footerColumns.services.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-primary-foreground hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-2">
          <h3 className="font-heading text-sm font-bold tracking-wider uppercase">Areas We Serve</h3>
          <ul className="mt-3 flex flex-col gap-1.5 text-sm text-primary-foreground/85">
            {footerColumns.areas.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>

        <address className="not-italic lg:col-span-2">
          <h3 className="font-heading text-sm font-bold tracking-wider uppercase">Contact Us</h3>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-primary-foreground/85">
            <li>
              <a href={contact.phoneHref} className="flex items-center gap-2 hover:underline">
                <Phone className="size-4" aria-hidden />
                {contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:underline">
                <Mail className="size-4" aria-hidden />
                {contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
              <span>
                {contact.location}
                <br />
                Service Area
              </span>
            </li>
          </ul>
        </address>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-3 text-xs text-primary-foreground/70 sm:px-6">
          <p>© {new Date().getFullYear()} A/V DAVEY, INC. All Rights Reserved.</p>
          <Link href="#" className="hover:underline">
            Terms
          </Link>
          <Link href="#" className="hover:underline">
            Site Map
          </Link>
        </div>
      </div>
    </footer>
  )
}
