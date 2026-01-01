'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { AnimatedCloudProps } from '@/types/cloud'
import { cloudAnimations } from '@/constants/clouds'

export const AnimatedCloud = ({
  src,
  width,
  height,
  top,
  opacity,
  duration = cloudAnimations.duration,
  delay = cloudAnimations.delay,
  ease = cloudAnimations.ease,
  initialTop = cloudAnimations.initialTop,
}: AnimatedCloudProps) => {
  return (
    <motion.div
      className="absolute"
      initial={{ top: initialTop }}
      animate={{ top: `${top}px` }}
      transition={{
        duration,
        delay,
        ease,
      }}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        opacity,
      }}
    >
      <Image
        src={src}
        alt="Cloud"
        width={width}
        height={height}
        priority
        unoptimized
        style={{ display: 'block' }}
      />
    </motion.div>
  )
}

