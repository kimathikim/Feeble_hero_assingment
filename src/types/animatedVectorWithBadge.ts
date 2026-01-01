import { BadgeIconProps } from './badge'

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
  badgeProps?: BadgeIconProps & {
    style?: React.CSSProperties
  }
  alt?: string
  className?: string
}

