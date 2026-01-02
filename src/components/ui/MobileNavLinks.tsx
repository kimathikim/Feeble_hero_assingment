'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navigationLinks } from '@/constants/navigation'
import { colors } from '@/constants/colors'
import { MobileNavLinksProps } from '@/types/mobileNavLinks'

export function MobileNavLinks({ onLinkClick }: MobileNavLinksProps) {
  const pathname = usePathname()

  return (
    <div className="flex flex-col py-4 px-2">
      {navigationLinks.map((link) => {
        const isActive = pathname === link.href
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onLinkClick}
            className="flex items-center px-4 py-3 rounded-xl font-['General_Sans'] text-base font-medium transition-colors"
            style={{
              color: isActive ? colors.primary.blue : colors.navigation.link,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.background.hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
          >
            {link.label}
          </Link>
        )
      })}
    </div>
  )
}


