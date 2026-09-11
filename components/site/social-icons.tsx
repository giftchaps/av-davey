import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  viewBox: '0 0 24 24',
  fill: 'currentColor',
  'aria-hidden': true,
} as const

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1z" />
    </svg>
  )
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.9 8.5H3.6V21h3.3V8.5zM5.3 3a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8zM20.4 13.3c0-3.3-1.8-4.9-4.2-4.9-1.9 0-2.8 1.1-3.3 1.8V8.5H9.7V21H13v-6.6c0-1.7.3-3.3 2.4-3.3 2 0 2 1.9 2 3.4V21h3.3v-7.7z" />
    </svg>
  )
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm5.9-7.8a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zM21 8.3c-.1-1.5-.4-2.8-1.5-3.9S17.1 3 15.7 3C14.2 2.9 9.8 2.9 8.3 3 6.8 3 5.5 3.4 4.4 4.4S3 6.9 3 8.3C2.9 9.8 2.9 14.2 3 15.7c.1 1.5.4 2.8 1.5 3.9S6.9 21 8.3 21c1.5.1 5.9.1 7.4 0 1.5-.1 2.8-.4 3.9-1.5s1.4-2.4 1.5-3.9c.1-1.4.1-5.8-.1-7.3zm-2 9c-.3.8-.9 1.4-1.7 1.7-1.2.5-4 .4-5.3.4s-4.1.1-5.3-.4c-.8-.3-1.4-.9-1.7-1.7-.5-1.2-.4-4-.4-5.3s-.1-4.1.4-5.3c.3-.8.9-1.4 1.7-1.7 1.2-.5 4-.4 5.3-.4s4.1-.1 5.3.4c.8.3 1.4.9 1.7 1.7.5 1.2.4 4 .4 5.3s.1 4.1-.4 5.3z" />
    </svg>
  )
}

export function YouTubeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z" />
    </svg>
  )
}
