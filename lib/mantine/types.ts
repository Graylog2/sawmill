/*
 * Copyright (C) 2020 Graylog, Inc.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the Server Side Public License, version 1,
 * as published by MongoDB, Inc.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * Server Side Public License for more details.
 *
 * You should have received a copy of the Server Side Public License
 * along with this program. If not, see
 * <http://www.mongodb.com/licensing/server-side-public-license>.
 */

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
export type TSpacing = Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', string>;
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
  colors: TStaticColors
}

export interface MantineTheme {
  colorScheme: TColorScheme,
  colors: TColors,
  fontFamily: string,
  fontFamilyMonospace: string,
  fontSizes: TFontSizes;
  breakpoints: TBreakpoints;
  headings: THeadings;
  spacing: TSpacing,
  others: TOtherAttributes,
}
