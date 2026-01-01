'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { AnimatedVectorProps } from '@/types/vector'

export const AnimatedVector = ({
  src = '/Vector.png',
  width = 42.36,
  height = 13.96,
  top,
  left,
  className = '',
  alt = 'Vector',
  initialTop,
  initialLeft,
  duration = 1.2,
  delay = 0,
  initialOpacity = 0,
  animateOpacity = 1,
}: AnimatedVectorProps) => {
  const formatValue = (value: string | number | undefined) => {
    if (value === undefined) return undefined
    return typeof value === 'number' ? `${value}px` : value
  }

  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{
        top: formatValue(initialTop),
        left: formatValue(initialLeft),
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
        ease: [0.25, 0.1, 0.25, 1],
      }}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full"
        priority
        unoptimized
        style={{ display: 'block' }}
      />
    </motion.div>
  )
}

