import Image from 'next/image'
import { ScrollSectionProps } from '@/types/scrollSection'

export const ScrollToLearnMore = ({ container, text, icon }: ScrollSectionProps) => {
  return (
    <div
      className="absolute flex flex-col items-center justify-center"
      style={{
        width: `${container.width}px`,
        height: `${container.height}px`,
        top: `${container.top}px`,
        left: `${container.left}px`,
        gap: `${container.gap}px`,
        opacity: container.opacity,
      }}
    >
      <span
        className="text-center"
        style={{
          fontFamily: text.fontFamily,
          fontWeight: text.fontWeight,
          fontSize: text.fontSize,
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
        className="block"
        style={{ opacity: icon.opacity }}
      />
    </div>
  )
}

