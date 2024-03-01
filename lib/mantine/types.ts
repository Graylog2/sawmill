import {
  ColorScheme,
  ColorVariant,
  DeepPartial,
  ThemeBaseColors,
} from '../types';

export type MantineColors = Record<ColorVariant, [string, string, string, string, string, string, string, string, string, string]>
export type FontSizes = Record<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl', string>;
export type Breakpoints = Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', string>;
export type Spacing = Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', string>;
export type Headings = {
  sizes: {
    h1: { fontSize: string };
    h2: { fontSize: string };
    h3: { fontSize: string };
    h4: { fontSize: string };
    h5: { fontSize: string };
    h6: { fontSize: string };
  };
}

export type OtherAttributes = {
  customColors: DeepPartial<ThemeBaseColors> | undefined
}

export interface MantineTheme {
  breakpoints: Breakpoints;
  colorScheme: ColorScheme,
  colors: MantineColors,
  defaultRadius: number,
  fontFamily: string,
  fontFamilyMonospace: string,
  fontSizes: FontSizes;
  headings: Headings;
  other: OtherAttributes,
  primaryColor: ColorVariant,
  primaryShade: Record<ColorScheme, 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9>,
  spacing: Spacing,
}
