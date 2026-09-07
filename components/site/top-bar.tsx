import { Mail, MapPin, Phone } from 'lucide-react'
import { contact } from '@/lib/site-data'

export function TopBar() {
  return (
    <div className="bg-navy-deep text-primary-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-sm sm:px-6">
        <p className="flex items-center gap-1.5">
          <MapPin className="size-4" aria-hidden />
          {contact.location}
        </p>
        <p className="hidden text-center md:block">
          Connecticut&apos;s Trusted AV Partner Since 1989
        </p>
        <div className="flex items-center gap-5">
          <a
            href={contact.phoneHref}
            className="flex items-center gap-1.5 hover:underline"
          >
            <Phone className="size-4" aria-hidden />
            {contact.phone}
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="hidden items-center gap-1.5 hover:underline sm:flex"
          >
            <Mail className="size-4" aria-hidden />
            {contact.email}
          </a>
        </div>
      </div>
    </div>
  )
}
