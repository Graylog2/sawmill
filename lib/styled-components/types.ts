import { ColorVariant, ColorScheme, Utils } from '../types';

export type TColorVariants = Partial<Record<ColorVariant, string>>;
export type TColorVariantShades = 'dark' | 'darker' | 'darkest' | 'light' | 'lighter' | 'lightest'
export type DisabledColor = {
  background: string,
  color: string,
}
export type DisabledColors = Record<ColorVariant, DisabledColor>;
export type ContrastColors = Record<ColorVariant, string>;
export type ButtonColors = Record<ColorVariant, { background: string, color: string }>

export type TColors = {
  brand: {
    primary: string,
    secondary: string,
    tertiary: string,
    logo: string,
    concrete: string,
  },
  global: {
    background: string,
    contentBackground: string,
    inputBackground: string,
    inputBorder: string,
    link: string,
    linkHover: string,
    navigationBackground: string,
    navigationBoxShadow: string,
    textAlt: string,
    textDefault: string,
  },
  gray: {
    '10': string,
    '20': string,
    '30': string,
    '40': string,
    '50': string,
    '60': string,
    '70': string,
    '80': string,
    '90': string,
    '100': string,
  },
  input: {
    background: string,
    backgroundDisabled: string,
    border: string,
    borderFocus: string,
    boxShadow: string,
    color: string,
    colorDisabled: string,
    placeholder: string,
  },
  table: {
    background: string,
    backgroundAlt: string,
    backgroundHover: string,
    variant: TColorVariants,
    variantHover: TColorVariants,
  },
  variant: TColorVariants & Record<TColorVariantShades, TColorVariants>,
  contrast: ContrastColors,
  disabled: DisabledColors,
  button: ButtonColors,
}

export type TBreakpoint = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
};

export type TBreakpoints = {
  min: TBreakpoint,
  max: TBreakpoint,
  px: {
    min: Record<keyof TBreakpoint, number>,
    max: Record<keyof TBreakpoint, number>,
  }
};

export type TFonts = {
  family: {
    body: string,
    monospace: string,
    navigation: string,
  },
  lineHeight: { body: string },
  size: {
    root: string,
    body: string,
    huge: string,
    extraLarge: string,
    large: string,
    small: string,
    tiny: string,
    navigation: string,
    h1: string,
    h2: string,
    h3: string,
    h4: string,
    h5: string,
    h6: string,
  },
};

export type TSpacingSizes = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type TSpacing = Record<TSpacingSizes, string> & { px: Record<TSpacingSizes, number> };

export interface StyledComponentsTheme {
  breakpoints: TBreakpoints,
  colors: TColors,
  fonts: TFonts,
  mode: ColorScheme
  spacings: TSpacing,
  utils: Utils,
  components: { aceEditor: string, button: Array<string> },
}
