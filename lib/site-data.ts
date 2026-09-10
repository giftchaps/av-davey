export const contact = {
  phone: '(203) 395-7234',
  phoneHref: 'tel:+12033957234',
  email: 'davey@avdavey.com',
  location: 'Bridgeport, CT',
  address: {
    street: '71 Clifton Place',
    city: 'Bridgeport',
    state: 'CT',
    zip: '06606',
  },
  hours: [
    { days: 'Monday – Friday', time: '8:00 AM – 6:00 PM' },
    { days: 'Saturday', time: 'By appointment' },
    { days: 'Event support', time: '7 days a week' },
  ],
  founded: 1989,
}

export type ServiceIcon = 'monitor' | 'star' | 'wrench' | 'video' | 'cart'

export type Service = {
  slug: string
  icon: ServiceIcon
  title: string
  navLabel: string
  tagline: string
  description: string
  image: string
  intro: string[]
  capabilities: { title: string; text: string }[]
  useCases: string[]
  process: { title: string; text: string }[]
  faqs: { q: string; a: string }[]
}

export const services: Service[] = [
  {
    slug: 'installation-integration',
    icon: 'monitor',
    title: 'Installation & Integration',
    navLabel: 'Installation & Integration',
    tagline: 'Systems designed around how you actually work.',
    description:
      'Custom audio, video, control and collaboration solutions designed around your space.',
    image: '/images/service-installation.png',
    intro: [
      'A/V DAVEY began installing audiovisual systems more than 25 years ago, when our rental relationship with Reuters News Service grew into a request to design and build permanent systems. That first integration job opened a new chapter, and systems integration is now the strongest part of our business.',
      'Since then, under the guidance of Peter Zaletta, our crew has completed thousands of commercial and residential installs across Connecticut and the Tri-State region: boardrooms, classrooms, lecture halls, houses of worship, lobbies, home theaters and everything in between.',
    ],
    capabilities: [
      {
        title: 'Video conferencing',
        text: 'Teams, Zoom and Webex rooms that connect in one touch and sound like everyone is in the room.',
      },
      {
        title: 'Collaborative products',
        text: 'Interactive displays, wireless presentation and whiteboarding built for hybrid teams.',
      },
      {
        title: 'Touch control systems',
        text: 'One clean interface for lights, shades, sources and volume — no remote roulette.',
      },
      {
        title: 'Sound reinforcement',
        text: 'Speech and program audio that is even, intelligible and free of feedback.',
      },
      {
        title: 'Projection, monitors & screens',
        text: 'Correctly sized, correctly bright displays for the room and the content.',
      },
      {
        title: 'Sound masking',
        text: 'Speech privacy and comfort for open offices, clinics and confidential spaces.',
      },
      {
        title: 'Residential systems',
        text: 'Home theater, whole-house audio, smart home control and rock-solid home networks.',
      },
      {
        title: 'Structured cabling',
        text: 'Clean, labeled, documented infrastructure that the next technician will thank you for.',
      },
    ],
    useCases: [
      'Corporate boardrooms & huddle rooms',
      'Training rooms & auditoriums',
      'K-12 classrooms & university lecture halls',
      'Houses of worship',
      'Healthcare & clinical spaces',
      'Hospitality, restaurants & country clubs',
      'Lobbies & digital signage',
      'Luxury residential',
    ],
    process: [
      {
        title: 'Discovery',
        text: 'We walk your space, listen to how you use it, and identify what is frustrating you today.',
      },
      {
        title: 'Design',
        text: 'You receive a clear proposal with drawings, best-in-class product options and honest pricing.',
      },
      {
        title: 'Installation',
        text: 'Our craftsmen install cleanly and on schedule, coordinating with your IT, electrical and construction teams.',
      },
      {
        title: 'Training & handoff',
        text: 'We commission every input, train your staff and leave documentation — then we stay reachable.',
      },
    ],
    faqs: [
      {
        q: 'Do you work with our IT department?',
        a: 'Absolutely. Most modern AV lives on the network. We coordinate VLANs, addressing and security requirements with your IT team before a single cable is pulled.',
      },
      {
        q: 'Can you upgrade an existing room instead of starting over?',
        a: 'Often, yes. We regularly reuse cabling, mounts, displays and speakers that are still serviceable and replace only what limits the room.',
      },
      {
        q: 'Do you install in homes as well as businesses?',
        a: 'Yes. Residential work includes home theater, distributed audio, control systems, smart home products and home networking.',
      },
    ],
  },
  {
    slug: 'event-production-staging',
    icon: 'star',
    title: 'Event Production & Staging',
    navLabel: 'Event Production & Staging',
    tagline: 'First to show. Last to go.',
    description:
      'Full-service AV production for corporate events, live shows, conferences and more.',
    image: '/images/service-events.png',
    intro: [
      'A/V DAVEY built its reputation on rentals and staging — and to a degree still does. Through the 1990s more than 55 hotels, country clubs and meeting facilities consigned all of their audiovisual requirements to us, and we staged major annual events for companies like Sikorsky, Stop & Shop and Subway.',
      'Today we bring that same turnkey approach to conferences, galas, town halls, product launches and hybrid meetings: sound, lighting, video, staging and the peripherals that make an event feel finished — drapery, podiums, risers and more.',
    ],
    capabilities: [
      {
        title: 'Sound',
        text: 'Line arrays, wireless microphones, mixing and playback tuned for the room and the audience size.',
      },
      {
        title: 'Lighting',
        text: 'Stage wash, uplighting, gobos and intelligent fixtures programmed to your run of show.',
      },
      {
        title: 'Video & LED',
        text: 'Projection, LED walls, confidence monitors, switching and camera feeds for in-room and remote guests.',
      },
      {
        title: 'Staging & scenic',
        text: 'Stage decks, steps, pipe and drape, podiums and branded elements.',
      },
      {
        title: 'Hybrid & streaming',
        text: 'Remote presenters, live streams and recordings integrated with the in-room show.',
      },
      {
        title: 'Show crew',
        text: 'Experienced A1, L1, V1 and stage managers who stay calm when the agenda changes.',
      },
    ],
    useCases: [
      'Corporate meetings & town halls',
      'Conferences & breakout sessions',
      'Fundraising galas & awards dinners',
      'Product launches & press events',
      'Graduations & ceremonies',
      'Concerts, comedy & speaker series',
      'Political & community events',
      'Hybrid and fully remote meetings',
    ],
    process: [
      {
        title: 'Site survey',
        text: 'We visit the venue, check power, rigging and load-in, and plan around the room — not in spite of it.',
      },
      {
        title: 'Production plan',
        text: 'Equipment list, floor plan, crew schedule and a single point of contact for your team.',
      },
      {
        title: 'Load-in & rehearsal',
        text: 'We arrive first, build early and rehearse with your presenters so show day is boring in the best way.',
      },
      {
        title: 'Show & strike',
        text: 'We run the show, adapt live and are the last ones out when the room is clear.',
      },
    ],
    faqs: [
      {
        q: 'Do you only work in Connecticut?',
        a: 'Bridgeport is home, but we have staged events up and down the East Coast for more than 30 years. Ask about travel.',
      },
      {
        q: 'Can you work with the venue\u2019s in-house AV?',
        a: 'Yes. We regularly supplement or replace in-house systems and coordinate directly with venue staff.',
      },
      {
        q: 'How far ahead should we book?',
        a: 'The sooner the better for peak seasons (spring and fall), but we have pulled off same-week shows. Call us.',
      },
    ],
  },
  {
    slug: 'service-support',
    icon: 'wrench',
    title: 'Service & Support',
    navLabel: 'Service & Repairs',
    tagline: 'Old-school craftsmen. Honest labor rates. No minimums.',
    description:
      'Responsive support and preventative maintenance to keep your systems running flawlessly.',
    image: '/images/service-support.png',
    intro: [
      'It is said that a company that sells an installed product is only as good as the service that backs it up when it fails. Because we research every system thoroughly and install with 30-plus years of experience, we usually do not see our customers again until it is time to replace what we installed.',
      'When service is necessary, you get a staff of "old school" craftsmen with the skill to troubleshoot at the component level and offer lower-cost alternatives. Customers are regularly amazed by how much we save them by employing alternative product and charging actual-time labor rates without minimums.',
    ],
    capabilities: [
      {
        title: 'Troubleshooting & repair',
        text: 'Displays, projectors, amplifiers, control processors, microphones and cabling — diagnosed and fixed.',
      },
      {
        title: 'Preventative maintenance',
        text: 'Scheduled filter cleaning, firmware updates, lamp and battery replacement and full-room checks.',
      },
      {
        title: 'System refresh',
        text: 'Replace the one component that is holding a room back rather than the whole room.',
      },
      {
        title: 'Programming updates',
        text: 'Control system and DSP changes when your rooms, staff or platforms change.',
      },
      {
        title: 'Legacy systems',
        text: 'We still know how the older gear works, and we keep the parts and adapters others threw away.',
      },
      {
        title: 'Service agreements',
        text: 'Priority response, discounted labor and scheduled visits for multi-room facilities.',
      },
    ],
    useCases: [
      'Systems we installed',
      'Systems someone else installed',
      'Meeting rooms that "just stopped working"',
      'Projectors that are dim or noisy',
      'Audio hum, buzz or feedback',
      'Control panels that no longer respond',
      'Pre-event room checks',
      'Annual maintenance programs',
    ],
    process: [
      {
        title: 'Report the issue',
        text: 'Submit a service request online or call. Tell us what the room does — and what it used to do.',
      },
      {
        title: 'Remote triage',
        text: 'Many issues are resolved by phone or remote session at no charge.',
      },
      {
        title: 'On-site visit',
        text: 'A technician arrives with common parts on the truck to fix it in one trip whenever possible.',
      },
      {
        title: 'Report & prevent',
        text: 'You receive a plain-English summary of what failed, what we did and how to keep it from happening again.',
      },
    ],
    faqs: [
      {
        q: 'Will you service a system you did not install?',
        a: 'Yes. A large share of our service work is on systems installed by others.',
      },
      {
        q: 'Do you charge minimums or trip fees?',
        a: 'We bill actual time at published labor rates. No four-hour minimums.',
      },
      {
        q: 'How fast can you respond?',
        a: 'Same-day or next-day for most of Fairfield and New Haven counties; service-agreement clients receive priority.',
      },
    ],
  },
  {
    slug: 'video-production-streaming',
    icon: 'video',
    title: 'Video Production & Streaming',
    navLabel: 'Video Production & Streaming',
    tagline: 'If you need it shot, we can provide it.',
    description:
      'Deliver your message with high-quality video and live streaming.',
    image: '/images/service-video.png',
    intro: [
      'For more than 35 years A/V DAVEY has provided turnkey video production — shooting, editing and the location services that go with it — across a wide range of disciplines, at the most reasonable rates for a professional service.',
      'Our streaming A/V-ATORS bring a modern switching console, networkable high-definition cameras and professional audio to remote meetings, so your next Zoom town hall or hybrid conference looks and sounds like a broadcast rather than a webcam.',
    ],
    capabilities: [
      {
        title: 'Live event recording',
        text: 'Multi-camera capture of conferences, ceremonies and performances with clean program audio.',
      },
      {
        title: 'Live streaming & hybrid',
        text: 'Streams to Zoom, Teams, YouTube, Vimeo or your platform with graphics, lower thirds and remote presenters.',
      },
      {
        title: 'Corporate & industrial video',
        text: 'Training, safety, product and internal communication videos, scripted or documentary style.',
      },
      {
        title: 'Legal video',
        text: 'Depositions, reenactments and courtroom playback handled with discretion and accuracy.',
      },
      {
        title: 'Interviews & testimonials',
        text: 'Lit, mic\u2019d and directed so your people look and sound their best.',
      },
      {
        title: 'Editing & post',
        text: 'Cut-downs, montages, captions and deliverables sized for every channel.',
      },
    ],
    useCases: [
      'TV commercials',
      'Industrial & training video',
      'Legal depositions & reenactments',
      'Live event recording',
      'Streaming & hybrid meetings',
      'Interviews & seminars',
      'Social events & montages',
      'Fund-raising pitches',
    ],
    process: [
      {
        title: 'Brief',
        text: 'We define the audience, the message, the deliverables and the platforms.',
      },
      {
        title: 'Plan',
        text: 'Shot list, crew, gear, schedule and — for streams — a tested connectivity plan.',
      },
      {
        title: 'Produce',
        text: 'On location or in-room, we capture clean picture and sound and manage the live feed.',
      },
      {
        title: 'Deliver',
        text: 'Edited masters, social cuts and archives delivered in the formats you need.',
      },
    ],
    faqs: [
      {
        q: 'Can you stream from a venue with poor internet?',
        a: 'Usually. We test in advance and can bring bonded cellular or dedicated connectivity when the venue cannot provide it.',
      },
      {
        q: 'Do you provide a videographer only, or a full crew?',
        a: 'Both. From a single operator for an interview to a multi-camera crew with a director and TD.',
      },
      {
        q: 'Who owns the footage?',
        a: 'You do. We deliver masters and archive a copy for a reasonable period as a courtesy.',
      },
    ],
  },
  {
    slug: 'equipment-sales',
    icon: 'cart',
    title: 'Equipment Sales',
    navLabel: 'Equipment Sales',
    tagline: 'If it\u2019s a quality product, we\u2019ll happily recommend it.',
    description: 'Professional-grade AV equipment from the brands you trust.',
    image: '/images/service-equipment.png',
    intro: [
      'Since its inception A/V DAVEY has represented many fine product lines. Much of what we sell is incorporated into our installations — only best-in-class product makes it onto our trucks.',
      'If you simply need sound systems, lighting, control systems, projection, sound masking, screens, mounting hardware, collaborative products, whiteboards, smart boards or remotes, we are happy to quote your needs — and, if you wish, advise you on how to use or install your new product.',
    ],
    capabilities: [
      {
        title: 'Displays & projection',
        text: 'Commercial displays, interactive panels, projectors and screens sized for your room.',
      },
      {
        title: 'Audio',
        text: 'Speakers, amplifiers, DSP, wireless and wired microphones and conferencing audio.',
      },
      {
        title: 'Control & collaboration',
        text: 'Touch panels, room schedulers, wireless presentation and video conferencing kits.',
      },
      {
        title: 'Lighting',
        text: 'Stage, architectural and event lighting fixtures and controllers.',
      },
      {
        title: 'Mounts & infrastructure',
        text: 'Mounts, racks, cable, connectors and the small parts that finish a job properly.',
      },
      {
        title: 'Consumables',
        text: 'Lamps, filters, batteries, remotes and replacement cables — in stock or quick-shipped.',
      },
    ],
    useCases: [
      'Replacing a failed display or projector',
      'Outfitting a new office or classroom',
      'Upgrading conferencing hardware',
      'Buying gear to self-install',
      'Standardizing equipment across locations',
      'Sourcing hard-to-find parts and adapters',
    ],
    process: [
      {
        title: 'Tell us the need',
        text: 'The room, the goal and the budget. A photo helps.',
      },
      {
        title: 'Get a quote',
        text: 'We recommend the right product — not the most expensive one — with clear pricing.',
      },
      {
        title: 'Delivery',
        text: 'Pick up in Bridgeport, ship to your door or have us install it.',
      },
      {
        title: 'Support',
        text: 'Questions after the sale are welcome. We stand behind what we sell.',
      },
    ],
    faqs: [
      {
        q: 'Do you sell to homeowners?',
        a: 'Yes. Residential audio, video, control and networking products are all available.',
      },
      {
        q: 'Can you match online pricing?',
        a: 'Often we are close, and you get expert advice, warranty support and someone local to call. Ask.',
      },
      {
        q: 'Do you offer installation on purchased equipment?',
        a: 'Of course — and we will also walk you through a DIY install if that is your preference.',
      },
    ],
  },
]

export function getService(slug: string) {
  return services.find((s) => s.slug === slug)
}

export const navigation = {
  primary: [
    { label: 'Home', href: '/' },
    {
      label: 'Services',
      href: '/services',
      children: [
        ...services.map((s) => ({
          label: s.navLabel,
          href: `/services/${s.slug}`,
          description: s.description,
        })),
      ],
    },
    { label: 'Projects', href: '/projects' },
    {
      label: 'About',
      href: '/about',
      children: [
        {
          label: 'Our Story',
          href: '/about',
          description: 'Who we are and how we work.',
        },
        {
          label: 'History',
          href: '/about/history',
          description: 'From a single hotel room in 1989 to today.',
        },
        {
          label: 'The Crew',
          href: '/about/team',
          description: 'Meet the A/V-ATORS.',
        },
        {
          label: 'Wall of Fame',
          href: '/about/wall-of-fame',
          description: 'Notable people we\u2019ve worked with.',
        },
      ],
    },
    { label: 'Support', href: '/support' },
    { label: 'Contact', href: '/contact' },
  ],
  quote: { label: 'Request a Quote', href: '/quote' },
}

export const stats = [
  {
    icon: 'calendar',
    value: 'Since 1989',
    label: 'Family-owned in Bridgeport',
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
    value: 'Connecticut & Tri-State',
    label: 'NY, NJ, PA and beyond',
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

export type ProjectCategory =
  | 'Corporate'
  | 'Education'
  | 'Events'
  | 'Hospitality'
  | 'Worship'
  | 'Residential'

export const projectCategories: ProjectCategory[] = [
  'Corporate',
  'Education',
  'Events',
  'Hospitality',
  'Worship',
  'Residential',
]

export type Project = {
  slug: string
  title: string
  location: string
  category: ProjectCategory
  service: string
  image: string
  summary: string
  scope: string[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'corporate-boardroom',
    title: 'Executive Boardroom',
    location: 'Bridgeport, CT',
    category: 'Corporate',
    service: 'installation-integration',
    image: '/images/project-boardroom.png',
    summary:
      'Dual-display video conferencing boardroom with one-touch join, ceiling microphones and integrated lighting control.',
    scope: [
      'Dual 86" displays',
      'Ceiling array microphones',
      'Touch control',
      'Lighting integration',
    ],
    featured: true,
  },
  {
    slug: 'university-lecture-hall',
    title: 'University Lecture Hall',
    location: 'New Haven, CT',
    category: 'Education',
    service: 'installation-integration',
    image: '/images/project-lecture-hall.png',
    summary:
      'Laser projection, lecture capture and a distributed speech system for a 240-seat tiered hall.',
    scope: ['Laser projection', 'Lecture capture', 'Assistive listening', 'Podium control'],
    featured: true,
  },
  {
    slug: 'live-event-production',
    title: 'Annual Sales Conference',
    location: 'Stamford, CT',
    category: 'Events',
    service: 'event-production-staging',
    image: '/images/project-live-event.png',
    summary:
      'Three-day general session and eight breakouts with LED wall, live stream and full show crew.',
    scope: ['LED wall', 'Line array PA', 'Intelligent lighting', 'Hybrid stream'],
    featured: true,
  },
  {
    slug: 'hotel-ballroom-upgrade',
    title: 'Hotel Ballroom Upgrade',
    location: 'Danbury, CT',
    category: 'Hospitality',
    service: 'installation-integration',
    image: '/images/project-ballroom.png',
    summary:
      'Divisible ballroom audio and video with wall-plate inputs and a simple room-combine interface for banquet staff.',
    scope: ['Room-combine audio', 'Motorized screens', 'Wall-plate inputs', 'Staff training'],
    featured: true,
  },
  {
    slug: 'sanctuary-refresh',
    title: 'Sanctuary AV Refresh',
    location: 'Fairfield, CT',
    category: 'Worship',
    service: 'installation-integration',
    image: '/images/project-worship.png',
    summary:
      'Even, intelligible speech coverage for every pew plus side screens and a simple volunteer-friendly mix position.',
    scope: ['Line array speakers', 'Dual projection', 'Digital mixer', 'Volunteer training'],
  },
  {
    slug: 'private-home-theater',
    title: 'Private Home Theater',
    location: 'Westport, CT',
    category: 'Residential',
    service: 'installation-integration',
    image: '/images/project-home-theater.png',
    summary:
      'Dedicated theater with acoustic treatment, 7.2.4 immersive audio and single-remote control for the whole house.',
    scope: ['Immersive audio', 'Acoustic panels', 'Smart home control', 'Home network'],
  },
  {
    slug: 'huddle-room-standard',
    title: 'Huddle Room Standard (12 rooms)',
    location: 'Shelton, CT',
    category: 'Corporate',
    service: 'installation-integration',
    image: '/images/project-huddle.png',
    summary:
      'A repeatable video-conferencing standard rolled out across twelve rooms so every meeting starts the same way.',
    scope: ['Video bars', 'Room schedulers', 'Wireless presentation', 'Cable management'],
  },
  {
    slug: 'headquarters-lobby-wall',
    title: 'Headquarters Lobby LED Wall',
    location: 'Norwalk, CT',
    category: 'Corporate',
    service: 'installation-integration',
    image: '/images/project-lobby.png',
    summary:
      'Fine-pitch LED wall with a content player and scheduling so the lobby always tells the right story.',
    scope: ['Fine-pitch LED', 'Content scheduling', 'Structural mount', 'Ambient sensing'],
  },
  {
    slug: 'foundation-gala',
    title: 'Foundation Gala',
    location: 'Greenwich, CT',
    category: 'Events',
    service: 'event-production-staging',
    image: '/images/project-gala.png',
    summary:
      'Award-night production for 600 guests: stage, uplighting, dual screens, live auction audio and video recording.',
    scope: ['Stage & podium', 'Uplighting', 'Dual screens', 'Recording'],
  },
  {
    slug: 'district-classrooms',
    title: 'District Classroom Rollout',
    location: 'Trumbull, CT',
    category: 'Education',
    service: 'installation-integration',
    image: '/images/project-classroom.png',
    summary:
      'Interactive displays and ceiling audio in 40 classrooms over one summer, ready for the first day of school.',
    scope: ['Interactive displays', 'Ceiling speakers', 'Teacher microphones', 'Summer schedule'],
  },
]

export const testimonials = [
  {
    quote:
      'A/V DAVEY did an outstanding job on our conference room upgrade. Professional, responsive and the results exceeded our expectations.',
    name: 'Facilities Director',
    role: 'Corporate client, Fairfield County',
  },
  {
    quote:
      'Their team is amazing to work with. From planning to execution, everything was seamless. We trust A/V DAVEY with all our events.',
    name: 'Event Manager',
    role: 'Nonprofit foundation',
  },
  {
    quote:
      'Davey and his crew are the best in the business. Reliable, creative and always go the extra mile to make it perfect.',
    name: 'General Manager',
    role: 'Hotel & conference center',
  },
]

export const team = [
  {
    name: 'Davey Katz',
    role: 'CEO / Head Cheerleader',
    image: '/images/davey-caricature.png',
    bio: [
      'A/V DAVEY was created by Davey Katz in May of 1989. Though Davey created the company, he is not only a member but a true cheerleader for the A/V DAVEY team. He leads by example and celebrates the successes of not only his business but the solutions he can provide for A/V DAVEY customers.',
      'His favorite part of the job is the variety of situations and people he meets each day. "Never really knowing how the day will play out is exciting to me."',
    ],
    fact: 'Davey has a lovely daughter who excels at her studies and a Maine Coon named Princess Isabella Greytoe the Furst.',
  },
  {
    name: 'Felix Rosales',
    role: 'AV Technician & Media Producer',
    image: '/images/team-felix.png',
    bio: [
      'Felix has been part of A/V DAVEY since April 2023, bringing technical and media expertise to every event. Whether he is setting up AV equipment, running live audio or managing presentation media for corporate clientele, he ensures every project executes smoothly.',
      'His skill set covers both on-site operations and behind-the-scenes production, including editing corporate meeting videos and photos to deliver a polished final product.',
    ],
    fact: 'Felix holds a Bachelor\u2019s in Audio and Music Production and an MBA. Off-site, he is an active composer and musician.',
  },
  {
    name: 'Foster',
    role: 'Resident Cat',
    image: '/images/team-foster.png',
    bio: [
      'Foster is our company cat — and yes, he is a foster cat. We rescued him from the humane society and he seems to like it here. Once an apartment dweller who did not understand stairs, he is now an outdoor lover and hunter.',
    ],
    fact: 'A skilled "mouser," Foster once brought a snake in for a visit. We returned it outdoors immediately, where it slithered away post haste.',
  },
]

export const historyMilestones = [
  {
    year: 'Early 1980s',
    title: 'Freelancing in New York City',
    text: 'Living in a Port Chester loft, Davey Katz inherits the freelance AV calls of two SUNY grads and learns the trade in every major Manhattan hotel — The Plaza, The Omni, The Sheraton, the Vista, the Roosevelt — plus the World Trade Center, the 21 Club and the New York Athletic Club.',
  },
  {
    year: '1987–1989',
    title: 'Managing for Colortone',
    text: 'Now in Connecticut with a family to support, Davey takes his first manager\u2019s job at the Trumbull Marriott for Colortone Audiovisuals, then moves the operation to the Bridgeport Hilton and later the Waterbury Sheraton.',
  },
  {
    year: 'May 1989',
    title: '"AVDAVEY" becomes a company',
    text: 'When the Hilton asks Davey to start an AV company on-site, they need a name to pay him. He offers the nickname staff had given him — "AVDAVEY" — and sales director Lorraine Scelfo insists that is the one. The business launches from a single room at the Bridgeport Holiday Inn with a $10,000 loan from the Dime Savings Bank.',
  },
  {
    year: 'Early 1990s',
    title: 'Surviving the recession',
    text: 'First-year gross: $10,000. Davey eats 95% of his meals in the hotel cafeteria and takes any work available, including bulk audio and video tape duplication, while steadily signing hotels, country clubs and meeting facilities.',
  },
  {
    year: 'Late 1990s',
    title: '55 exclusive facilities and a new office',
    text: 'Some 55 properties consign all their AV needs to A/V DAVEY. The company stages major annual events for Sikorsky, Stop & Shop and Subway, and moves out of the hotel into its own office at 71 Clifton Place in Bridgeport.',
  },
  {
    year: '1998',
    title: 'Systems integration begins with Reuters',
    text: 'A rental relationship with the largest news service on the planet turns into A/V DAVEY\u2019s first installation contract. Rental customers across the region follow, asking for system design and installation — sound, lighting, video, control and conferencing.',
  },
  {
    year: '2000s–2010s',
    title: 'Integration becomes the core',
    text: 'As budgets, technology and corporate acquisitions reshape the events business, integration grows to more than 75% of the company\u2019s work — commercial and residential, from sound masking to home theaters.',
  },
  {
    year: '2018',
    title: 'Wilton store opens',
    text: 'A retail and service presence in Wilton focuses the company\u2019s integration knowledge on solving the everyday technology frustrations of businesses and homeowners alike.',
  },
  {
    year: 'Today',
    title: 'Still first to show, last to go',
    text: 'More than 35 years on, A/V DAVEY has seen virtually every type of corporate and institutional installation. The crew is small by design, backed by a vetted network of specialists, and still answers the phone.',
  },
]

export const wallOfFame = [
  { name: 'George H.W. Bush', category: 'Government' },
  { name: 'Barbara Bush', category: 'Government' },
  { name: 'George W. Bush', category: 'Government' },
  { name: 'Laura Bush', category: 'Government' },
  { name: 'Hillary Clinton', category: 'Government' },
  { name: 'John McCain', category: 'Government' },
  { name: 'John Kerry', category: 'Government' },
  { name: 'Dick Cheney', category: 'Government' },
  { name: 'Jack Kemp', category: 'Government' },
  { name: 'Mayor Ed Koch', category: 'Government' },
  { name: 'Ned Lamont', category: 'Government' },
  { name: 'Ambassador Paul Bremer', category: 'Government' },
  { name: 'Dee Dee Myers', category: 'Government' },
  { name: 'Mariska Hargitay', category: 'Film & TV' },
  { name: 'Sigourney Weaver', category: 'Film & TV' },
  { name: 'Mary Stuart Masterson', category: 'Film & TV' },
  { name: 'Denis Leary', category: 'Film & TV' },
  { name: 'Lucie Arnaz', category: 'Film & TV' },
  { name: 'Rain Pryor', category: 'Film & TV' },
  { name: 'Betty Buckley', category: 'Film & TV' },
  { name: 'Martha Stewart', category: 'Media' },
  { name: 'Ann Curry', category: 'Media' },
  { name: 'Andy Rooney', category: 'Media' },
  { name: 'Chris Berman', category: 'Sports' },
  { name: 'Jim Nantz', category: 'Sports' },
  { name: 'Gordie Howe', category: 'Sports' },
  { name: 'Chi Chi Rodriguez', category: 'Sports' },
  { name: 'Art Garfunkel', category: 'Music' },
  { name: 'Roberta Flack', category: 'Music' },
  { name: 'Chubby Checker', category: 'Music' },
  { name: 'Ashford & Simpson', category: 'Music' },
  { name: 'Doris Kearns Goodwin', category: 'Authors' },
  { name: 'Jon Meacham', category: 'Authors' },
  { name: 'David Baldacci', category: 'Authors' },
  { name: 'Elizabeth Smart', category: 'Speakers' },
]

export const supportFaqs = [
  {
    q: 'My conference room display shows "No Signal." What should I try first?',
    a: 'Confirm the source device is awake and the correct input is selected on the control panel. Reseat the HDMI or USB-C cable at both ends. If the room uses a wireless presentation device, power-cycle it. If that fails, submit a service request and include the room name.',
  },
  {
    q: 'The projector image is dim or has colored blotches.',
    a: 'A dim image usually means the lamp or filter is due; blotches often indicate a failing color wheel or dust on the optics. Both are quick fixes for us. Note the projector model and hours if the menu shows them.',
  },
  {
    q: 'Remote participants say they cannot hear us clearly.',
    a: 'Check that the room microphones are not muted at the table or on the panel and that the correct microphone is selected in the meeting software. Persistent echo or low level typically requires DSP adjustments, which we can often do remotely.',
  },
  {
    q: 'Do you offer service agreements?',
    a: 'Yes. Agreements include scheduled preventative visits, priority response and discounted labor, sized to the number of rooms and how critical they are.',
  },
  {
    q: 'Can you support an event at short notice?',
    a: 'Call us. We keep event inventory in Bridgeport and have turned around same-week productions many times.',
  },
  {
    q: 'What are your labor rates?',
    a: 'We bill actual time at published rates with no minimums. We will quote before we start any billable work.',
  },
]

export const footerColumns = {
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Support', href: '/support' },
    { label: 'Contact', href: '/contact' },
    { label: 'Request a Quote', href: '/quote' },
    { label: 'Wall of Fame', href: '/about/wall-of-fame' },
  ],
  services: services.map((s) => ({
    label: s.title,
    href: `/services/${s.slug}`,
  })),
  areas: [
    'Based in Bridgeport, CT',
    'Fairfield & New Haven counties',
    'Connecticut, NY, NJ, PA',
    'East Coast event travel',
  ],
}
