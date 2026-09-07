export const contact = {
  phone: '203.227.7202',
  phoneHref: 'tel:+12032277202',
  email: 'info@avdavey.com',
  location: 'Bridgeport, CT',
}

export const navLinks = [
  { label: 'Home', href: '/', active: true },
  { label: 'Services', href: '#services', hasMenu: true },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about', hasMenu: true },
  { label: 'Support', href: '#support' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  {
    icon: 'calendar',
    value: '40+',
    label: 'Years of combined experience',
  },
  { icon: 'users', value: 'Thousands', label: 'of successful installations' },
  {
    icon: 'building',
    value: 'Commercial & Residential',
    label: 'system integration',
  },
  {
    icon: 'headphones',
    value: 'Service & Support',
    label: 'before, during & after the job',
  },
  {
    icon: 'pin',
    value: 'Based in Bridgeport,',
    label: 'serving Connecticut & the greater Tri-State',
  },
] as const

export const services = [
  {
    icon: 'monitor',
    title: 'Installation & Integration',
    description:
      'Custom audio, video, control and collaboration solutions designed around your space.',
    image: '/images/service-installation.png',
    href: '#services',
  },
  {
    icon: 'star',
    title: 'Event Production & Staging',
    description:
      'Full-service AV production for corporate events, live shows, conferences and more.',
    image: '/images/service-events.png',
    href: '#services',
  },
  {
    icon: 'wrench',
    title: 'Service & Support',
    description:
      'Responsive support and preventative maintenance to keep your systems running flawlessly.',
    image: '/images/service-support.png',
    href: '#services',
  },
  {
    icon: 'video',
    title: 'Video Production & Streaming',
    description:
      'Deliver your message with high-quality video and live streaming.',
    image: '/images/service-video.png',
    href: '#services',
  },
  {
    icon: 'cart',
    title: 'Equipment Sales',
    description: 'Professional-grade AV equipment from the brands you trust.',
    image: '/images/service-equipment.png',
    href: '#services',
  },
] as const

export const clients = [
  { name: 'Yale New Haven Health', type: 'text' as const, style: 'ynhh' },
  { name: 'Yale', type: 'svg' as const, slug: 'yale' },
  { name: 'Pepsi', type: 'svg' as const, slug: 'pepsi' },
  { name: 'Subway', type: 'svg' as const, slug: 'subway' },
  { name: 'Unilever', type: 'svg' as const, slug: 'unilever' },
  { name: 'Bayer', type: 'svg' as const, slug: 'bayer' },
  { name: 'Stop & Shop', type: 'text' as const, style: 'stopshop' },
  { name: 'Pitney Bowes', type: 'text' as const, style: 'pitney' },
  { name: 'Ethan Allen', type: 'text' as const, style: 'ethanallen' },
]

export const projects = [
  {
    title: 'Corporate Boardroom',
    location: 'Bridgeport, CT',
    image: '/images/project-boardroom.png',
  },
  {
    title: 'University Lecture Hall',
    location: 'Connecticut',
    image: '/images/project-lecture-hall.png',
  },
  {
    title: 'Live Event Production',
    location: 'Bridgeport, CT',
    image: '/images/project-live-event.png',
  },
  {
    title: 'Hotel Ballroom Upgrade',
    location: 'Danbury, CT',
    image: '/images/project-ballroom.png',
  },
]

export const testimonials = [
  {
    quote:
      'A/V DAVEY did an outstanding job on our conference room upgrade. Professional, responsive and the results exceeded our expectations.',
    name: 'Ethan Allen',
    role: 'Ethan Allen Hotel',
  },
  {
    quote:
      'Their team is amazing to work with. From planning to execution, everything was seamless. We trust A/V DAVEY with all our events.',
    name: 'Mariska Hargitay',
    role: 'Actor',
  },
  {
    quote:
      'Davey and his crew are the best in the business. Reliable, creative and always go the extra mile to make it perfect.',
    name: 'Jim Nantz',
    role: 'Broadcaster',
  },
]

export const footerColumns = {
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Support', href: '#support' },
    { label: 'Contact', href: '#contact' },
  ],
  services: services.map((s) => ({ label: s.title, href: s.href })),
  areas: [
    'Based in Bridgeport, CT',
    'Serving Connecticut and the Greater Tri-State Region',
    '(NY, NJ, Pennsylvania and beyond)',
  ],
}
