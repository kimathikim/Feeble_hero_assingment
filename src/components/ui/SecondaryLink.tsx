'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Line } from './Line'
import { HeroCTA } from '@/types/page'
import { colors } from '@/constants/colors'

interface SecondaryLinkProps {
  link: HeroCTA['secondaryLink']
}

export const SecondaryLink = ({ link }: SecondaryLinkProps) => {
  return (
    <Link
      href={link.href}
      className="flex flex-row items-center hover:opacity-80 transition-opacity text-sm sm:text-base md:text-lg px-3 sm:px-4 md:px-5 py-2 sm:py-3"
      style={{
        borderRadius: link.borderRadius,
        border: `${link.borderWidth} solid ${colors.border.gray}`,
        gap: link.gap,
        fontFamily: 'General Sans',
        color: link.textColor,
        fontWeight: link.fontWeight,
        lineHeight: link.lineHeight,
        letterSpacing: link.letterSpacing,
      }}
    >
      <Image
        src="/apple.svg"
        alt="Apple"
        width={18}
        height={22}
        priority
        unoptimized
        className="block w-4 h-5 sm:w-[18px] sm:h-[22px]"
      />
      <Line width={18} borderWidth={0.5} />
      <span className="whitespace-nowrap">{link.text}</span>
    </Link>
  )
}

