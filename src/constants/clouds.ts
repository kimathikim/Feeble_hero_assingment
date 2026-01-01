export const cloudContainer = {
  width: 1920,
  height: 581.7391357421875,
  top: 686.07,
  opacity: 0.1,
} as const

export const cloudAnimations = {
  duration: 1.2,
  delay: 0,
  ease: [0.25, 0.1, 0.25, 1] as const,
  initialTop: '100vh',
} as const

export const clouds = [
  {
    src: '/cloud1.svg',
    width: 1920,
    height: 521.73,
    top: 0,
    opacity: 1,
  },
  {
    src: '/cloud2.svg',
    width: 1918.69,
    height: 544.20,
    top: 111.93,
    opacity: 1,
  },
  {
    src: '/cloud3.svg',
    width: 1920,
    height: 483.91,
    top: 219.37,
    opacity: 1,
  },
  {
    src: '/cloud4.svg',
    width: 1920,
    height: 465.65,
    top: 288.5,
    opacity: 1,
  },
] as const
