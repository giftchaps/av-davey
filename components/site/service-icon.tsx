import { Monitor, ShoppingCart, Star, Video, Wrench } from 'lucide-react'
import type { ServiceIcon as ServiceIconName } from '@/lib/site-data'

const icons = {
  monitor: Monitor,
  star: Star,
  wrench: Wrench,
  video: Video,
  cart: ShoppingCart,
}

export function ServiceIcon({
  name,
  className,
}: {
  name: ServiceIconName
  className?: string
}) {
  const Icon = icons[name]
  return <Icon className={className} aria-hidden />
}
