import Image from 'next/image'
import { ScrollSectionProps } from '@/types/scrollSection'

export const ScrollToLearnMore = ({ text, icon }: ScrollSectionProps) => {
  return (
    <div
      className="absolute bottom-4 sm:bottom-8 md:bottom-12 left-0 right-0 mx-auto flex flex-col items-center justify-center w-full max-w-[645px] px-4"
      style={{
        gap: '8px',
        opacity: 1,
      }}
    >
      <span
        className="text-center text-sm sm:text-base md:text-lg"
        style={{
          fontFamily: text.fontFamily,
          fontWeight: text.fontWeight,
          lineHeight: text.lineHeight,
          letterSpacing: text.letterSpacing,
          textAlign: text.textAlign,
          color: text.color,
        }}
      >
        {text.content}
      </span>
      <Image
        src={icon.src}
        alt="Dropdown"
        width={icon.width}
        height={icon.height}
        priority
        unoptimized
        className="block w-6 h-6 sm:w-8 sm:h-8"
        style={{ opacity: icon.opacity }}
      />
    </div>
  )
}

