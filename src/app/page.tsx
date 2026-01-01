'use client'

import Link from 'next/link'
import { Ellipse } from '@/components/ui/ellipse'
import { Navigation } from '@/components/layouts/Navigation'
import { CurvedButton } from '@/components/ui/CurvedButton'
import { BadgeIcon } from '@/components/ui/BadgeIcon'
import { Vector } from '@/components/ui/Vector'
import { AnimatedVector } from '@/components/ui/AnimatedVector'
import { heroContent } from '@/constants/pageContent'
import { colors } from '@/constants/colors'

export default function Page() {
  const { badge, heading, description, cta } = heroContent;

  return (
    <main className="relative min-h-screen overflow-hidden" style={{ backgroundColor: colors.background.lightBlue }}>
      <Ellipse />
      <AnimatedVector
        top={291}
        left={298.18}
        initialTop="100vh"
        initialLeft={298.18}
      />
      <Vector
        top={329.02}
        left={495.3}
      />
      <Vector
        top={465}
        left={1446.18}
      />
      <div 
        className="absolute"
        style={{
          width: '1407.93px',
          height: '719.38px',
          top: '291px',
          left: '298.18px',
        }}
      >
        <AnimatedVector
          top={14}
          left={1108}
          initialTop={705.42}
          initialLeft={1108}
        />
      </div>
      <div className="absolute w-[1680px] h-[592px] top-[40px] left-0 right-0 mx-auto px-[120px] flex flex-col items-center justify-center gap-16">
        <Navigation />
        <div className="flex flex-col w-[1680px] h-[447px] items-center">
          <div className="flex flex-col w-[736px] h-[447px] items-center gap-6">
            <div className="flex flex-col w-[736px] h-[353px] gap-6 justify-start items-center">
              <div 
                className="flex flex-row w-auto h-auto rounded-full pt-1 pr-2 pb-[5px] pl-2 gap-2 justify-start items-center"
                style={{
                  backgroundColor: colors.background.white,
                  boxShadow: `0 1px 4px 0 ${colors.shadow.light}`,
                }}
              >
                <BadgeIcon 
                  backgroundColor={badge.iconColor}
                />
                <span className="font-['General Sans'] text-base font-medium leading-[120%] tracking-[-0.02em]" style={{ color: badge.textColor }}>
                  {badge.text}
                </span>
              </div>
              
              <div className="font-['General Sans'] text-[64px] font-bold leading-[120%] tracking-[-0.02em] text-center w-[736px] h-[231px]" style={{ color: heading.textColor }}>
                <span style={{ color: heading.highlightedColor }}>{heading.highlightedText}</span>{heading.restOfText}
              </div>
              
              <p className="font-['General Sans'] text-[18px] font-normal leading-[130%] tracking-[-0.02em] text-center w-[586px] h-[46px]" style={{ color: description.textColor }}>
                {description.text}
              </p>
            </div>
            
            <div className="flex flex-row items-center gap-4">
              <CurvedButton
                label={cta.primaryButton.label}
                baseColor={cta.primaryButton.baseColor}
                hoverColor={cta.primaryButton.hoverColor}
                enableHover={cta.primaryButton.enableHover}
              />
              <Link 
                href={cta.secondaryLink.href}
                className="font-['General Sans'] text-base font-medium leading-none tracking-normal hover:opacity-80 transition-opacity"
                style={{ color: cta.secondaryLink.textColor }}
              >
                {cta.secondaryLink.text}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

