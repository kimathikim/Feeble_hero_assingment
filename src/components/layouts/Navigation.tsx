'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { CurvedButton } from '@/components/ui/CurvedButton'
import { NavigationLinks } from '../ui/NavigationLinks'
import { MobileNavLinks } from '../ui/MobileNavLinks'
import { navigationConfig } from '@/constants/navigation'
import { colors } from '@/constants/colors'

export function Navigation() {
  const { logo, contactButton } = navigationConfig
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <nav 
        className="relative w-full max-w-[1200px] h-auto min-h-[60px] sm:min-h-[70px] md:min-h-[81px] rounded-[100px] sm:rounded-[200px] flex items-center justify-between py-3 sm:py-4 md:py-5 px-4 sm:px-5 md:pl-6 md:pr-5"
        style={{
          backgroundColor: colors.background.white,
          boxShadow: `0 1px 4px 0 ${colors.shadow.light}`,
        }}
      >
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image 
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="h-auto w-[80px] sm:w-[100px] md:w-auto"
            style={{ maxWidth: logo.styleWidth }}
            priority
            unoptimized
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex">
          <NavigationLinks />
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <CurvedButton
            label={contactButton.label}
            baseColor={contactButton.baseColor}
            hoverColor={contactButton.hoverColor}
            enableHover={contactButton.enableHover}
          />
        </div>

        {/* Hamburger Button - Mobile Only */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-full transition-colors"
          style={{ backgroundColor: isMobileMenuOpen ? colors.primary.blue : 'transparent' }}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <motion.span
            animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-5 h-0.5 rounded-full transition-colors"
            style={{ backgroundColor: isMobileMenuOpen ? colors.utility.white : colors.text.primary }}
          />
          <motion.span
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-0.5 rounded-full my-1 transition-colors"
            style={{ backgroundColor: isMobileMenuOpen ? colors.utility.white : colors.text.primary }}
          />
          <motion.span
            animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-5 h-0.5 rounded-full transition-colors"
            style={{ backgroundColor: isMobileMenuOpen ? colors.utility.white : colors.text.primary }}
          />
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden absolute top-[80px] left-4 right-4 z-50 rounded-3xl overflow-hidden"
            style={{
              backgroundColor: colors.background.white,
              boxShadow: `0 4px 20px 0 ${colors.shadow.medium}`,
            }}
          >
            <MobileNavLinks onLinkClick={() => setIsMobileMenuOpen(false)} />
            <div className="px-6 pb-6">
              <CurvedButton
                label={contactButton.label}
                baseColor={contactButton.baseColor}
                hoverColor={contactButton.hoverColor}
                enableHover={contactButton.enableHover}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
