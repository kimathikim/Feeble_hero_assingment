'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navigationLinks } from '@/constants/navigation'
import { colors } from '@/constants/colors'

export function NavigationLinks() {
  const pathname = usePathname()

  return (
    <div
      className="flex items-center gap-2 font-['General_Sans'] justify-center h-[38px] py-2 px-3"
      style={{ color: colors.utility.white }}
    >
      {navigationLinks.map((link) => {
        const isActive = pathname === link.href
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link cursor-pointer flex items-center justify-center h-[38px] py-2 px-3 font-['General_Sans'] text-sm md:text-base font-medium leading-none tracking-normal transition-colors whitespace-nowrap ${
              link.label === 'Join & Guides' ? 'md:min-w-[122px]' : ''
            } ${isActive ? 'opacity-100' : 'opacity-90 hover:opacity-100'}`}
            style={{
              color: isActive ? colors.utility.white : colors.navigation.link,
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.color = colors.utility.black;
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.color = colors.navigation.link;
              }
            }}
          >
            <span>{link.label}</span>
          </Link>
        )
      })}
    </div>
  )
}

