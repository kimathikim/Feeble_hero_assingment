'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { BadgeIcon } from './BadgeIcon'
import { AnimatedVectorWithBadgeProps } from '@/types/animatedVectorWithBadge'

export const AnimatedVectorWithBadge = ({
  src,
  imageWidth,
  imageHeight,
  containerWidth,
  containerHeight,
  top,
  left,
  initialTop = '100vh',
  initialLeft,
  duration = 1.2,
  delay = 0,
  initialOpacity = 0,
  animateOpacity = 1,
  ease,
  badgeProps,
  alt = 'Vector',
  className = '',
}: AnimatedVectorWithBadgeProps) => {
  const formatValue = (value: string | number | undefined) => {
    if (value === undefined) return undefined
    return typeof value === 'number' ? `${value}px` : value
  }

  const formatContainerValue = (value: number | string) => {
    return typeof value === 'number' ? `${value}px` : value
  }

  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{
        top: formatValue(initialTop),
        left: formatValue(initialLeft ?? left),
        opacity: initialOpacity,
      }}
      animate={{
        top: formatValue(top),
        left: formatValue(left),
        opacity: animateOpacity,
      }}
      transition={{
        duration,
        delay,
        ease: ease ?? [0.25, 0.1, 0.25, 1],
      }}
      style={{
        width: formatContainerValue(containerWidth),
        height: formatContainerValue(containerHeight),
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={imageWidth}
        height={imageHeight}
        priority
        unoptimized
        className="block"
      />
      {badgeProps && (
        <BadgeIcon
          {...badgeProps}
          className={`absolute ${badgeProps.className || ''}`}
        />
      )}
    </motion.div>
  )
}

