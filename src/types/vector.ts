export interface VectorProps {
  src?: string;
  width?: number;
  height?: number;
  top?: string | number;
  left?: string | number;
  className?: string;
  alt?: string;
}

export interface AnimatedVectorProps extends VectorProps {
  initialTop?: string | number;
  initialLeft?: string | number;
  duration?: number;
  delay?: number;
  initialOpacity?: number;
  animateOpacity?: number;
}

