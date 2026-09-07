import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-[linear-gradient(180deg,var(--sky)_0%,var(--sky-light)_70%,var(--background)_100%)]"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 pt-10 pb-24 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-6 lg:pt-8 lg:pb-28">
        {/* Copy */}
        <div className="lg:col-span-5">
          <p className="flex items-center gap-2 text-sm font-semibold tracking-wide text-primary uppercase">
            <span className="h-0.5 w-5 bg-accent" aria-hidden />
            Connecticut&apos;s Trusted AV Partner
          </p>
          <h1
            id="hero-heading"
            className="mt-3 font-heading text-5xl leading-[0.95] font-extrabold tracking-tight text-balance uppercase sm:text-6xl lg:text-[64px]"
          >
            <span className="block text-primary">Audio Visual Solutions</span>
            <span className="block text-accent">That Just Work.</span>
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-foreground">
            Professional AV installation, live event production and technical
            support. Quality equipment. Personal service. Guaranteed results.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 font-heading text-lg font-bold tracking-wide text-accent-foreground uppercase shadow-md transition-colors hover:bg-accent/90"
            >
              Request a Quote
              <ArrowRight className="size-5" aria-hidden />
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md border-2 border-primary bg-background/60 px-6 py-3.5 font-heading text-lg font-bold tracking-wide text-primary uppercase transition-colors hover:bg-background"
            >
              <span className="flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Play className="size-3 fill-current" aria-hidden />
              </span>
              Explore Our Work
            </Link>
          </div>
        </div>

        {/* Badge */}
        <div className="flex justify-center lg:col-span-2 lg:justify-center">
          <Image
            src="/images/avators-badge.png"
            alt="A/V-ATORS badge: First to show, last to go. Honor those who serve."
            width={300}
            height={300}
            priority
            className="w-56 mix-blend-multiply drop-shadow-lg sm:w-64 lg:w-full lg:max-w-[300px]"
          />
        </div>

        {/* Caricature + bio card */}
        <div className="relative flex min-h-[380px] items-end justify-center lg:col-span-5 lg:min-h-[420px] lg:justify-end">
          <div
            className="relative z-10 w-full max-w-sm self-start bg-primary/90 px-7 py-6 text-primary-foreground shadow-xl backdrop-blur-sm lg:mt-4 lg:ml-auto lg:max-w-[320px]"
            style={{
              clipPath: 'polygon(6% 0, 100% 0, 100% 100%, 0 100%, 0 12%)',
            }}
          >
            <h2 className="font-heading text-3xl font-bold">Davey Katz</h2>
            <p className="font-semibold text-[oklch(0.72_0.19_25)]">
              CEO / Head Cheerleader
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              Founded A/V DAVEY in 1989 with one goal — treat every client like
              family and every project like it&apos;s our own.
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              That passion and commitment to quality still drive our team every
              day.
            </p>
            <p
              aria-hidden
              className="mt-4 text-right text-3xl italic"
              style={{ fontFamily: 'cursive' }}
            >
              Davey
            </p>
          </div>

          <Image
            src="/images/davey-caricature.png"
            alt="Caricature illustration of Davey Katz, CEO of A/V DAVEY, smiling in a striped shirt"
            width={560}
            height={560}
            priority
            className="pointer-events-none absolute bottom-0 left-1/2 z-20 w-[300px] -translate-x-1/2 sm:w-[340px] lg:left-0 lg:w-[400px] lg:-translate-x-[15%] xl:w-[440px]"
            style={{
              maskImage:
                'radial-gradient(ellipse 60% 75% at 50% 45%, black 60%, transparent 100%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 60% 75% at 50% 45%, black 60%, transparent 100%)',
            }}
          />
        </div>
      </div>
    </section>
  )
}
