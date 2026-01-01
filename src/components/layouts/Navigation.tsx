import Link from 'next/link'
import Image from 'next/image'
import { CurvedButton } from '@/components/ui/CurvedButton'
import { NavigationLinks } from '../ui/NavigationLinks'
import { navigationConfig } from '@/constants/navigation'

export function Navigation() {
  const { logo, contactButton } = navigationConfig;

  return (
    <nav className="relative w-[1200px] h-[81px] bg-white rounded-[200px] flex items-center justify-between pt-5 pb-5 pl-6 pr-5 shadow-[0_1px_4px_0_rgba(12,12,13,0.05)]">
      <Link href="/" className="flex items-center">
        <Image 
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className="h-auto"
          style={{ width: logo.styleWidth }}
        />
      </Link>

      <NavigationLinks />

      <CurvedButton
        label={contactButton.label}
        baseColor={contactButton.baseColor}
        hoverColor={contactButton.hoverColor}
        enableHover={contactButton.enableHover}
      />
    </nav>
  )
}
