import { BadgeIconProps } from './badge'
import type { Easing } from 'framer-motion'

export interface AnimatedVectorWithBadgeProps {
  src: string
  imageWidth: number
  imageHeight: number
  containerWidth: number | string
  containerHeight: number | string
  top: number | string
  left: number | string
  initialTop?: number | string
  initialLeft?: number | string
  duration?: number
  delay?: number
  initialOpacity?: number
  animateOpacity?: number
  ease?: Easing | Easing[]
  badgeProps?: BadgeIconProps & {
    style?: React.CSSProperties
  }
  alt?: string
  className?: string
}

