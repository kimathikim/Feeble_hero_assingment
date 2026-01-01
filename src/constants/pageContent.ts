import { HeroContent } from '@/types/page';
import { ScrollSectionProps } from '@/types/scrollSection';
import { colors } from './colors';

export const heroContent: HeroContent = {
  badge: {
    text: '#1 iMessage Automation Tool',
    iconColor: colors.primary.blue,
    textColor: colors.primary.blueLight,
  },
  heading: {
    highlightedText: 'iMessage',
    highlightedColor: colors.primary.blue,
    restOfText: ' automation for Teams and AI Workflows.',
    textColor: colors.text.primary,
  },
  description: {
    text: 'Coup lets you, your team, or AI workflows send iMessages directly from your phone number, running securely on your Mac or Mac Mini.',
    textColor: colors.text.secondary,
  },
  cta: {
    primaryButton: {
      label: 'Get Started',
      baseColor: colors.primary.blue,
      hoverColor: colors.background.white,
      enableHover: false,
    },
    secondaryLink: {
      text: 'Download the Mac app',
      href: '#download',
      textColor: colors.link.dark,
      fontSize: '18px',
      fontWeight: '500',
      lineHeight: '120%',
      letterSpacing: '-2%',
      width: '266px',
      height: '46px',
      borderRadius: '50px',
      borderWidth: '0.7px',
      padding: {
        top: '12px',
        right: '20px',
        bottom: '12px',
        left: '20px',
      },
      gap: '12px',
    },
  },
};

export const scrollSection: ScrollSectionProps = {
  container: {
    width: 645,
    height: 63,
    top: 946.94,
    left: 637.5,
    gap: 8,
    opacity: 1,
  },
  text: {
    content: 'Scroll to learn more',
    fontFamily: 'General Sans',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '130%',
    letterSpacing: '-0.02em',
    textAlign: 'center',
    color: colors.link.dark,
  },
  icon: {
    src: '/arrow-down-04.svg',
    width: 32,
    height: 32,
    opacity: 1,
  },
};

