export interface CloudProps {
  src: string
  width: number
  height: number
  top: number
  opacity: number
}

export interface AnimatedCloudProps extends CloudProps {
  duration?: number
  delay?: number
  ease?: readonly [number, number, number, number]
  initialTop?: string
}
