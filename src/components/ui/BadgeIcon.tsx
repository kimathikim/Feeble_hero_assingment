'use client'

import { colors } from '@/constants/colors'
import { BadgeIconProps } from '@/types/badge'

export const BadgeIcon = ({
  backgroundColor = colors.primary.blue,
  dotColor = colors.utility.white,
  angle = 0,
  className = '',
}: BadgeIconProps) => {
  return (
    <div
      className={`relative w-[32px] h-[17px] rounded-[185.79px] ${className}`}
      style={{ 
        backgroundColor,
        transform: `rotate(${angle}deg)`,
      }}
    >
      <div 
        className="absolute w-[3.32px] h-[3.32px] rounded-full top-[7px] left-[8px]"
        style={{ backgroundColor: dotColor }}
      />
      <div 
        className="absolute w-[3.32px] h-[3.32px] rounded-full top-[7px] left-[14.64px]"
        style={{ backgroundColor: dotColor }}
      />
      <div 
        className="absolute w-[3.32px] h-[3.32px] rounded-full top-[7px] left-[21.27px]"
        style={{ backgroundColor: dotColor }}
      />
    </div>
  )
}

