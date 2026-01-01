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
      className="flex flex-row items-center hover:opacity-80 transition-opacity"
      style={{
        width: link.width,
        height: link.height,
        borderRadius: link.borderRadius,
        border: `${link.borderWidth} solid ${colors.border.gray}`,
        paddingTop: link.padding?.top,
        paddingRight: link.padding?.right,
        paddingBottom: link.padding?.bottom,
        paddingLeft: link.padding?.left,
        gap: link.gap,
        fontFamily: 'General Sans',
        color: link.textColor,
        fontSize: link.fontSize,
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
        style={{ display: 'block' }}
      />
      <Line width={18} borderWidth={0.5} />
      {link.text}
    </Link>
  )
}

