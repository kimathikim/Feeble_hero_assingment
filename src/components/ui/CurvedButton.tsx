'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CurvedButtonProps } from '@/types/button';
import { EffectProps } from '@/types/curvedButton';
import { colors } from '@/constants/colors';

const getContrastColor = (hexcolor: string) => {
  const hex = hexcolor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return (yiq >= 128) ? colors.utility.black : colors.utility.white;
};

const EllipseReveal = ({ isHovered, hoverColor = colors.background.white }: EffectProps) => {
  const ellipseSize = 64.85;
  const ellipseRadius = ellipseSize / 2;
  
  return (
    <>
      {/* White fill */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ 
          width: isHovered ? 'calc(100% - 80px - 66.85px)' : 0,
        }}
        transition={{ type: 'spring', stiffness: 120, damping: 24, mass: 1 }}
        style={{ 
          backgroundColor: hoverColor,
          top: '-30%',
          left: 'calc(40px + 32.425px)',
          height: `${ellipseSize}px`,
          transform: 'translateY(-50%)',
        }}
        className="absolute z-[2] pointer-events-none"
      />
      
      <motion.div
        initial={{ x: '150%' }}
        animate={{ 
          x: isHovered ? '-330%' : '150%',
        }}
        transition={{ type: 'spring', stiffness: 120, damping: 24, mass: 1 }}
        className="absolute z-[3] pointer-events-none"
        style={{
          top: '-30%',
          left: '100px',
          transform: 'translateY(-50%)',
        }}
      >
        {/* Left half ellipse */}
        <div
          style={{ 
            backgroundColor: hoverColor,
            width: `${ellipseRadius}px`,
            height: `${ellipseSize}px`,
            borderRadius: `${ellipseRadius}px 0 0 ${ellipseRadius}px`,
          }}
        />
        {/* White rectangle attached to the right */}
        <div
          style={{ 
            backgroundColor: hoverColor,
            width: '120px',
            height: `${ellipseSize}px`,
            position: 'absolute',
            left: `${ellipseRadius}px`,
            top: 0,
            marginLeft: '-1px',
          }}
        />
      </motion.div>
    </>
  );
};

export const CurvedButton = ({ 
  label, 
  baseColor, 
  hoverColor, 
  enableHover = false 
}: CurvedButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const textColor = enableHover && isHovered ? baseColor : getContrastColor(baseColor);

  return (
    <button
      onMouseEnter={() => enableHover && setIsHovered(true)}
      onMouseLeave={() => enableHover && setIsHovered(false)}
      className="group relative overflow-hidden transition-all active:scale-95 flex items-center justify-center gap-[6.98px] rounded-[43.62px] py-[11px] px-[18px] w-[138px] h-[41px] font-['General Sans'] border-0"
      style={{ 
        backgroundColor: baseColor,
        boxShadow: enableHover && isHovered ? `0 0 10px ${colors.shadow.medium}` : 'none',
      }}
    >
      <div className="absolute inset-0 z-0 w-[138px] h-[41px] overflow-hidden">
        {enableHover && (
          <EllipseReveal isHovered={isHovered} hoverColor={hoverColor} />
        )}
      </div>
      <span 
        className="relative z-10 text-[16px] font-medium leading-[120%] tracking-[-0.02em] font-['General Sans'] transition-colors duration-500 h-[19px]"
        style={{ 
          color: textColor,
        }}
      >
        {label}
      </span>
    </button>
  );
};