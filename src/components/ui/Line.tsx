import { colors } from '@/constants/colors'
import { LineProps } from '@/types/line'

export const Line = ({
  width = 18,
  borderWidth = 0.5,
  color = colors.border.gray,
  className = '',
}: LineProps) => {
  return (
    <div
      className={className}
      style={{
        width: `${borderWidth}px`,
        height: `${width}px`,
        backgroundColor: color,
      }}
    />
  )
}

