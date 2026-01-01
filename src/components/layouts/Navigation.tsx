import Link from 'next/link'
import Image from 'next/image'
import { CurvedButton } from '@/components/ui/CurvedButton'
import { NavigationLinks } from '../ui/NavigationLinks'
import { navigationConfig } from '@/constants/navigation'
import { colors } from '@/constants/colors'

export function Navigation() {
  const { logo, contactButton } = navigationConfig;

  return (
    <nav 
      className="relative w-[1200px] h-[81px] rounded-[200px] flex items-center justify-between pt-5 pb-5 pl-6 pr-5"
      style={{
        backgroundColor: colors.background.white,
        boxShadow: `0 1px 4px 0 ${colors.shadow.light}`,
      }}
    >
      <Link href="/" className="flex items-center">
        <Image 
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className="h-auto"
          style={{ width: logo.styleWidth }}
          priority
          unoptimized
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
