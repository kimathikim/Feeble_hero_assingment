import Image from 'next/image'
import { VectorProps } from '@/types/vector'

export const Vector = ({
  src = '/Vector.png',
  width = 42.36,
  height = 13.96,
  top,
  left,
  className = '',
  alt = 'Vector',
}: VectorProps) => {
  return (
    <div
      className={`absolute ${className}`}
      style={{
        top: typeof top === 'number' ? `${top}px` : top,
        left: typeof left === 'number' ? `${left}px` : left,
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full"
      />
    </div>
  )
}

