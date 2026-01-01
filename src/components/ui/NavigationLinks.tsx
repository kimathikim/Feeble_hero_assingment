'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navigationLinks } from '@/constants/navigation'

export function NavigationLinks() {
  const pathname = usePathname()

  return (
    <div
      className="absolute flex items-center gap-2 font-['General Sans'] text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 justify-start h-[38px] py-2 px-3 w-fit min-w-[95px]"
    >
      {navigationLinks.map((link) => {
        const isActive = pathname === link.href
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link cursor-pointer flex items-center justify-center h-[38px] py-2 px-3 font-['General Sans'] text-base font-medium leading-none tracking-normal ${
              link.label === 'Join & Guides' ? 'min-w-[122px]' : ''
            } ${isActive ? 'opacity-100' : 'opacity-90 hover:opacity-100'}`}
          >
            <span className="h-[22px]">{link.label}</span>
          </Link>
        )
      })}
    </div>
  )
}

