import { COLOR_SCHEME_DARK, COLOR_SCHEME_LIGHT } from './THEME_BASE';

// eslint-disable-next-line @typescript-eslint/ban-types
export type DeepPartial<T> = T extends Record<string, unknown> ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;

export type ColorScheme = typeof COLOR_SCHEME_DARK | typeof COLOR_SCHEME_LIGHT

export type ColorVariant = 'danger' | 'default' | 'info' | 'primary' | 'success' | 'warning' | 'gray';

export type ThemeBaseColors = {
  variant: Record<ColorVariant, [string, string, string, string, string, string, string, string, string, string]>
  global: {
    background: string,
    contentBackground: string,
    link: string,
    navigationBoxShadow: string,
    inputBackground: string,
    inputBorder: string,
  },
  brand: {
    primary: string,
    secondary: string,
    tertiary: string,
    logo: string,
    concrete: string,
  },
}

export type ThemeBase = {
  fonts: {
    families: {
      body: string,
      monospace: string,
      navigation: string,
    },
    rootSize: number,
    rootLineHeight: string,
    scale: number,
    sizes: {
      navigation: number,
      h1: number,
      h2: number,
      h3: number,
      h4: number,
      h5: number,
      h6: number,
      xs: number,
      sm: number,
      md: number,
      lg: number,
      xl: number,
      xxl: number,
    },
  },
  breakpoints: {
    xs: number,
    sm: number,
    md: number,
    lg: number,
    xl: number,
  },
  spacings: Array<'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'>,
  colors: Record<ColorScheme, ThemeBaseColors>,
}

export type CustomColors = DeepPartial<{
  variant: Record<ColorVariant, string>;
  global: {
    background: string;
    contentBackground: string;
    link: string;
    navigationBoxShadow: string;
  };
  brand: {
    primary: string;
    secondary: string;
    tertiary: string;
    logo: string;
    concrete: string;
  };
}>;

export type Utils = {
  colorLevel: (colorHex: string, level?: number) => string,
  contrastingColor: (color: string, wcagLevel?: string) => string,
  opacify: (color: string, amount: number) => string,
  readableColor: (hex: string, darkColor?: string, lightColor?: string) => string,
}
