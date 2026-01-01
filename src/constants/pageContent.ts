import { HeroContent } from '@/types/page';
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
      textColor: colors.primary.blue,
    },
  },
};

