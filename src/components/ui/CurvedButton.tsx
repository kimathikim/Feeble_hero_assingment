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

const ConcaveReveal = ({ isHovered, hoverColor = colors.background.white }: EffectProps) => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <motion.div
        initial={{ x: '105%' }}
        animate={{ 
          x: isHovered ? '0%' : '105%',
        }}
        transition={{ type: 'spring', stiffness: 120, damping: 24, mass: 1 }}
        style={{ 
          backgroundColor: hoverColor,
        }}
        className="absolute inset-0 z-[2] rounded-tl-[15px] rounded-bl-[15px]"
      />
    </div>
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
      {enableHover && (
        <div className="absolute inset-0 z-0 w-[138px] h-[41px]">
          <ConcaveReveal isHovered={isHovered} hoverColor={hoverColor} />
        </div>
      )}
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