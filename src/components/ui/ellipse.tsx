import { colors } from '@/constants/colors'

export function Ellipse() {
  return (
    <div
      className="absolute rounded-full pointer-events-none z-0 w-[200px] sm:w-[300px] md:w-[400px] lg:w-[471.27px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[441.76px] top-[-100px] sm:top-[-150px] md:top-[-200px] lg:top-[-228.76px] left-[-50px] sm:left-[-70px] md:left-[-80px] lg:left-[-92.47px] blur-[60px] sm:blur-[80px] md:blur-[100px] lg:blur-[121px]"
      style={{ backgroundColor: colors.background.white }}
      aria-hidden="true"
    />
  )
}

