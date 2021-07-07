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

type TThemeMode = 'teint' | 'noir';

type TColorLevel = (colorHex: string, level?: number) => string;

type TContrastingColor = {
  (color: string, wcagLevel?: string): string,
};

type TUtils = {
  colorLevel: TColorLevel,
  contrastingColor: TContrastingColor,
  opacify: TOpacify,
  readableColor: TReadableColor,
};

type TOpacify = {
  (string, number): string,
};


type TReadableColor = (hex: string, darkColor?: string, lightColor?: string) => string;

type TBreakpoint = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
};

type TBreakpoints = {
  min: TBreakpoint,
  max: TBreakpoint,
};

type TColors = {
  brand: {
    primary: string,
    secondary: string,
    tertiary: string,
  },
  global: {
    background: string,
    contentBackground: string,
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
    variant: {
      active: string,
      danger: string,
      info: string,
      primary: string,
      success: string,
      warning: string,
    },
    variantHover: {
      active: string,
      danger: string,
      info: string,
      primary: string,
      success: string,
      warning: string,
    },
  },
  variant: {
    danger: string,
    dark: {
      danger: string,
      default: string,
      info: string,
      primary: string,
      success: string,
      warning: string,
    },
    darker: {
      danger: string,
      default: string,
      info: string,
      primary: string,
      success: string,
      warning: string,
    },
    darkest: {
      danger: string,
      default: string,
      info: string,
      primary: string,
      success: string,
      warning: string,
    },
    default: string,
    info: string,
    light: {
      danger: string,
      default: string,
      info: string,
      primary: string,
      success: string,
      warning: string,
    },
    lighter: {
      danger: string,
      default: string,
      info: string,
      primary: string,
      success: string,
      warning: string,
    },
    lightest: {
      danger: string,
      default: string,
      info: string,
      primary: string,
      success: string,
      warning: string,
    },
    primary: string,
    success: string,
    warning: string,
  },
};

type TFonts = {
  family: {
    body: string,
    monospace: string,
  },
  size: {
    root: string,
    body: string,
    huge: string,
    large: string,
    small: string,
    tiny: string,
    h1: string,
    h2: string,
    h3: string,
    h4: string,
    h5: string,
    h6: string,
  },
};

type TColorVariants = 'danger' | 'default' | 'info' | 'primary' | 'success' | 'warning';

type Sizes = number;

type TSpacings = Record<Sizes, string> & { px: Record<Sizes, number> };

type TThemeColorModes = {
  teint: TColors,
  noir: TColors,
};

export type {
  TBreakpoints,
  TColors,
  TColorLevel,
  TContrastingColor,
  TColorVariants,
  TFonts,
  TSpacings,
  TThemeColorModes,
  TThemeMode,
  TUtils,
  TOpacify,
  TReadableColor,
};

