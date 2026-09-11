import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative bg-[linear-gradient(180deg,var(--sky)_0%,var(--sky-light)_70%,var(--background)_100%)]"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 pt-10 pb-24 sm:px-6 lg:grid-cols-12 lg:items-end lg:gap-6 lg:pt-10 lg:pb-0">
        {/* Copy */}
        <div className="lg:col-span-6 lg:self-center lg:pb-20">
          <p className="flex items-center gap-2 text-sm font-semibold tracking-wide text-primary uppercase">
            <span className="h-0.5 w-5 bg-accent" aria-hidden />
            Connecticut&apos;s Trusted AV Partner
          </p>
          <h1
            id="hero-heading"
            className="mt-3 font-heading text-5xl leading-[0.95] font-extrabold tracking-tight text-balance uppercase sm:text-6xl xl:text-[68px]"
          >
            <span className="block text-primary">Audio Visual Solutions</span>
            <span className="block text-accent">That Just Work.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground">
            Professional AV installation, live event production and technical
            support. Quality equipment. Personal service. Guaranteed results.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 font-heading text-lg font-bold tracking-wide text-accent-foreground uppercase shadow-md transition-colors hover:bg-accent/90"
            >
              Request a Quote
              <ArrowRight className="size-5" aria-hidden />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-primary bg-background/60 px-6 py-3.5 font-heading text-lg font-bold tracking-wide text-primary uppercase transition-colors hover:bg-background"
            >
              <span className="flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Play className="size-3 fill-current" aria-hidden />
              </span>
              Explore Our Work
            </Link>
          </div>
        </div>

        {/* Caricature */}
        <div className="relative flex min-w-0 items-end justify-center lg:col-span-6 lg:justify-end lg:pr-4">
          <Image
            src="/images/davey-caricature.png"
            alt="Cartoon illustration of Davey Katz in an A/V DAVEY cap and polo giving a thumbs up while leaning on a branded road case"
            width={1150}
            height={1089}
            priority
            className="pointer-events-none relative z-30 w-full max-w-[340px] drop-shadow-xl sm:max-w-[420px] lg:mb-2 lg:max-w-[400px] xl:max-w-[470px]"
          />
        </div>
      </div>
    </section>
  )
}
