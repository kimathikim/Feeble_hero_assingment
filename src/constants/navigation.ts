import { NavigationConfig, NavigationLink } from '@/types/navigation';
import { colors } from './colors';

export const navigationLinks: NavigationLink[] = [
  { href: '/join-guides', label: 'Join & Guides' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/use-case', label: 'Use Case' },
  { href: '/faq', label: 'FAQ' },
];

export const navigationConfig: NavigationConfig = {
  logo: {
    src: '/logo.svg',
    alt: 'Logo',
    width: 107,
    height: 34,
    styleWidth: '106.94px',
  },
  contactButton: {
    label: 'Contact Sales',
    baseColor: colors.primary.blue,
    hoverColor: colors.background.white,
    enableHover: true,
  },
};

