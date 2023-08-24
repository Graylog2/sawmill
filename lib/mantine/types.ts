export type TColors = {
  default: Array<string>,
  danger: Array<string>,
  info: Array<string>,
  primary: Array<string>,
  success: Array<string>,
  warning: Array<string>,
};
export type TColorScheme = 'light' | 'dark';
export type TFontSizes = Record<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl', string>;
export type TBreakpoints = Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', string>;
export type TSpacings = Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', string>;
export type THeadings = {
  sizes: {
    h1: { fontSize: string };
    h2: { fontSize: string };
    h3: { fontSize: string };
    h4: { fontSize: string };
    h5: { fontSize: string };
    h6: { fontSize: string };
  };
}

export type TGlobalColors = {
  background: string,
  contentBackground: string,
  link: string,
  linkHover: string,
  navigationBackground: string,
  navigationBoxShadow: string,
  textAlt: string,
  textDefault: string,
}
export type TBrandColors = {
  primary: string,
  tertiary: string,
  secondary: string,
  logo: string
}
export type TStaticColors = {
  brand: TBrandColors,
  global: TGlobalColors
}

export type TOtherAttributes = {
  staticColors: TStaticColors
}

export interface GraylogTheme {
  colorScheme: TColorScheme,
  colors: TColors,
  fontFamily: string,
  fontFamilyMonospace: string,
  fontSizes: TFontSizes;
  breakpoints: TBreakpoints;
  headings: THeadings;
  spacings: TSpacings,
  others: TOtherAttributes,
}
