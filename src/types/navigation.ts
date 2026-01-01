export interface NavigationLink {
  href: string;
  label: string;
}

export interface NavigationConfig {
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
    styleWidth: string;
  };
  contactButton: {
    label: string;
    baseColor: string;
    hoverColor: string;
    enableHover: boolean;
  };
}

