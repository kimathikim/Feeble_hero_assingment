'use client'

import { colors } from '@/constants/colors'
import { BadgeIconProps } from '@/types/badge'

export const BadgeIcon = ({
  backgroundColor = colors.primary.blue,
  dotColor = colors.utility.white,
  angle = 0,
  className = '',
  style,
  width = 32,
  height = 17,
  borderRadius,
  opacity = 1,
}: BadgeIconProps) => {
  const positionClass = className.includes('absolute') ? '' : 'relative';
  
  const widthValue = typeof width === 'number' ? `${width}px` : width;
  const heightValue = typeof height === 'number' ? `${height}px` : height;
  const borderRadiusValue = borderRadius !== undefined 
    ? (typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius)
    : '185.79px';
  
  const dotSize = typeof width === 'number' ? (width / 32) * 3.32 : '3.32px';
  const dotTop = typeof height === 'number' ? (height / 17) * 7 : '7px';
  const dotLeft1 = typeof width === 'number' ? (width / 32) * 8 : '8px';
  const dotLeft2 = typeof width === 'number' ? (width / 32) * 14.64 : '14.64px';
  const dotLeft3 = typeof width === 'number' ? (width / 32) * 21.27 : '21.27px';
  
  return (
    <div
      className={`${positionClass} ${className}`}
      style={{ 
        backgroundColor,
        transform: `rotate(${angle}deg)`,
        width: widthValue,
        height: heightValue,
        borderRadius: borderRadiusValue,
        opacity,
        ...style,
      }}
    >
      <div 
        className="absolute rounded-full"
        style={{ 
          backgroundColor: dotColor,
          width: typeof dotSize === 'number' ? `${dotSize}px` : dotSize,
          height: typeof dotSize === 'number' ? `${dotSize}px` : dotSize,
          top: typeof dotTop === 'number' ? `${dotTop}px` : dotTop,
          left: typeof dotLeft1 === 'number' ? `${dotLeft1}px` : dotLeft1,
        }}
      />
      <div 
        className="absolute rounded-full"
        style={{ 
          backgroundColor: dotColor,
          width: typeof dotSize === 'number' ? `${dotSize}px` : dotSize,
          height: typeof dotSize === 'number' ? `${dotSize}px` : dotSize,
          top: typeof dotTop === 'number' ? `${dotTop}px` : dotTop,
          left: typeof dotLeft2 === 'number' ? `${dotLeft2}px` : dotLeft2,
        }}
      />
      <div 
        className="absolute rounded-full"
        style={{ 
          backgroundColor: dotColor,
          width: typeof dotSize === 'number' ? `${dotSize}px` : dotSize,
          height: typeof dotSize === 'number' ? `${dotSize}px` : dotSize,
          top: typeof dotTop === 'number' ? `${dotTop}px` : dotTop,
          left: typeof dotLeft3 === 'number' ? `${dotLeft3}px` : dotLeft3,
        }}
      />
    </div>
  )
}

