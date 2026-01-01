export interface HeroBadge {
  text: string;
  iconColor: string;
  textColor: string;
}

export interface HeroHeading {
  highlightedText: string;
  highlightedColor: string;
  restOfText: string;
  textColor: string;
}

export interface HeroDescription {
  text: string;
  textColor: string;
}

export interface HeroCTA {
  primaryButton: {
    label: string;
    baseColor: string;
    hoverColor: string;
    enableHover: boolean;
  };
  secondaryLink: {
    text: string;
    href: string;
    textColor: string;
    fontSize?: string;
    fontWeight?: string;
    lineHeight?: string;
    letterSpacing?: string;
    width?: string;
    height?: string;
    borderRadius?: string;
    borderWidth?: string;
    padding?: {
      top?: string;
      right?: string;
      bottom?: string;
      left?: string;
    };
    gap?: string;
  };
}

export interface HeroContent {
  badge: HeroBadge;
  heading: HeroHeading;
  description: HeroDescription;
  cta: HeroCTA;
}

