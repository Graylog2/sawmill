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

import {
  TBreakpoints,
  TColors,
  TColorScheme,
  GraylogTheme,
  TSpacings,
  THeadings,
  TFontSizes,
  TStaticColors,
  TOtherAttributes,
} from './types';

const DEFAULT_COLOR_SCALES: TColors = {
  danger: ['#fceded', '#f9d8d8', '#f5bfbf', '#f2a4a4', '#ef8282', '#eb5454', '#d64d4d', '#bf4444', '#a53b3b', '#853030'],
  default: ['#f3f4f6', '#e4e7ec', '#d4d9e1', '#c2cad6', '#afbaca', '#9aa8bd', '#8c99ac', '#7d889a', '#6c7684', '#575f6b'],
  info: ['#eef1f8', '#d8e1f0', '#c0cfe7', '#a5bcdf', '#84a6d6', '#578dcc', '#4f80ba', '#4773a6', '#3d638f', '#315073'],
  primary: ['#efeff1', '#dbdce0', '#c4c8cd', '#abb0b8', '#8e96a1', '#697586', '#606b7a', '#555f6d', '#4a525e', '#3b424c'],
  success: ['#f0f5ed', '#dee9d8', '#caddc0', '#b5d0a4', '#9cc283', '#7eb356', '#73a34e', '#669146', '#587d3c', '#476531'],
  warning: ['#fdfaee', '#faf5da', '#f7f0c3', '#f4eaa9', '#f1e58b', '#eedf64', '#d9cb5b', '#c1b551', '#a79c46', '#877e39'],
};

// eslint-disable-next-line no-unused-vars
const generateColorScales = (customColors: Record<keyof TColors, string>): TColors => DEFAULT_COLOR_SCALES;

const BREAKPOINTS: TBreakpoints = {
  xs: '30em',
  sm: '48em',
  md: '64em',
  lg: '74em',
  xl: '90em',
};

const FONT_SIZES: TFontSizes = {
  xs: '0.823rem',
  sm: '0.878rem',
  md: '1rem',
  lg: '1.067rem',
  xl: '1.383rem',
  xxl: '2.479rem',
};

const HEADINGS: THeadings = {
  sizes: {
    h1: { fontSize: '1.575rem' },
    h2: { fontSize: '1.296rem' },
    h3: { fontSize: '1.215rem' },
    h4: { fontSize: '1.138rem' },
    h5: { fontSize: '1.067rem' },
    h6: { fontSize: '1rem' },
  },
};

const SPACINGS = {
  xs: '0.625rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.25rem',
  xl: '1.5rem',
};

const DEFAULT_STATIC_COLORS = {
  light: {
    global: {
      background: '#eeeff2',
      contentBackground: '#fff',
      link: '#578dcc',
      textAlt: '#fff',
      textDefault: '#3e434c',
      linkHover: '#1a609b',
      navigationBackground: '#fff',
      navigationBoxShadow: 'rgba(245,246,248,0.5)',
    },
    brand: {
      primary: '#ff3633',
      secondary: '#fff',
      tertiary: '#3e434c',
      logo: '#6C7585',
    },
  },
  dark: {
    global: {
      background: '#222',
      contentBackground: '#303030',
      link: '#629de2',
      textAlt: '#888',
      textDefault: '#fff',
      linkHover: '#97ceff',
      navigationBackground: '#303030',
      navigationBoxShadow: 'rgba(20,20,20,0.5)',
    },
    brand: {
      primary: '#ff3633',
      secondary: '#888',
      tertiary: '#fff',
      logo: '#fff',
    },
  },
};

export default class Sawmill implements GraylogTheme {
  readonly colors: TColors;

  readonly colorScheme: TColorScheme;

  readonly fontFamily: string;

  readonly fontFamilyMonospace: string;

  readonly fontSizes: TFontSizes;

  readonly breakpoints: TBreakpoints;

  readonly headings: THeadings;

  readonly spacings: TSpacings;

  readonly others: TOtherAttributes;

  constructor(
    colorScheme: TColorScheme,
    customColors: Record<keyof TColors, string>,
    staticColors: TStaticColors,
  ) {
    this.colors = customColors ? generateColorScales(customColors) : DEFAULT_COLOR_SCALES;
    this.colorScheme = colorScheme;
    this.breakpoints = BREAKPOINTS;
    this.fontFamily = '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif';
    this.fontFamilyMonospace = '"Ubuntu Mono", Menlo, Monaco, Consolas, "Courier New", monospace';
    this.fontSizes = FONT_SIZES;
    this.headings = HEADINGS;
    this.spacings = SPACINGS;

    const defaultStaticGlobalColors = DEFAULT_STATIC_COLORS[colorScheme].global;
    const defaultStaticBrandColors = DEFAULT_STATIC_COLORS[colorScheme].brand;

    this.others = {
      staticColors: {
        global: staticColors?.global ? { ...defaultStaticGlobalColors, ...staticColors.global } : defaultStaticGlobalColors,
        brand: staticColors?.brand ? { ...defaultStaticBrandColors, ...staticColors.brand } : defaultStaticBrandColors,
      },
    };
  }
}
