'use client'

import { Navigation } from '@/components/layouts/Navigation'
import { BadgeIcon } from './BadgeIcon'
import { CurvedButton } from './CurvedButton'
import { SecondaryLink } from './SecondaryLink'
import { HeroContent as HeroContentType } from '@/types/page'
import { colors } from '@/constants/colors'

interface HeroContentProps {
  content: HeroContentType
}

export const HeroContent = ({ content }: HeroContentProps) => {
  const { badge, heading, description, cta } = content

  return (
    <div className="absolute w-full max-w-[1680px] top-[20px] sm:top-[40px] left-0 right-0 mx-auto px-4 sm:px-8 md:px-16 lg:px-[120px] flex flex-col items-center justify-center gap-6 sm:gap-10 md:gap-16">
      <Navigation />
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-col w-full max-w-[736px] items-center gap-4 sm:gap-6 px-4 sm:px-0">
          <div className="flex flex-col w-full gap-4 sm:gap-6 justify-start items-center">
            <div
              className="flex flex-row w-auto h-auto rounded-full pt-1 pr-2 pb-[5px] pl-2 gap-2 justify-start items-center"
              style={{
                backgroundColor: colors.background.white,
                boxShadow: `0 1px 4px 0 ${colors.shadow.light}`,
              }}
            >
              <BadgeIcon backgroundColor={badge.iconColor} />
              <span
                className="font-['General_Sans'] text-sm sm:text-base font-medium leading-[120%] tracking-[-0.02em]"
                style={{ color: badge.textColor }}
              >
                {badge.text}
              </span>
            </div>

            <h1
              className="font-['General_Sans'] text-[28px] sm:text-[40px] md:text-[52px] lg:text-[64px] font-bold leading-[120%] tracking-[-0.02em] text-center w-full"
              style={{ color: heading.textColor }}
            >
              <span style={{ color: heading.highlightedColor }}>
                {heading.highlightedText}
              </span>
              {heading.restOfText}
            </h1>

            <p
              className="font-['General_Sans'] text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[130%] tracking-[-0.02em] text-center w-full max-w-[586px]"
              style={{ color: description.textColor }}
            >
              {description.text}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <CurvedButton
              label={cta.primaryButton.label}
              baseColor={cta.primaryButton.baseColor}
              hoverColor={cta.primaryButton.hoverColor}
              enableHover={cta.primaryButton.enableHover}
            />
            <SecondaryLink link={cta.secondaryLink} />
          </div>
        </div>
      </div>
    </div>
  )
}

