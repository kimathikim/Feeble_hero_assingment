export interface ScrollSectionProps {
  container: {
    width: number
    height: number
    top: number
    left: number
    gap: number
    opacity: number
  }
  text: {
    content: string
    fontFamily: string
    fontWeight: number
    fontSize: string
    lineHeight: string
    letterSpacing: string
    textAlign: 'left' | 'center' | 'right' | 'justify' | 'start' | 'end'
    color: string
  }
  icon: {
    src: string
    width: number
    height: number
    opacity: number
  }
}

