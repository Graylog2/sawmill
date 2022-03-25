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

/* eslint-disable no-unused-vars */

import { FlattenSimpleInterpolation } from 'styled-components';

export type TThemeMode = 'teint' | 'noir';

export type TColorLevel = (colorHex: string, level?: number) => string;

export type TContrastingColor = {
  (color: string, wcagLevel?: string): string,
};

export type TOpacify = {
  (color: string, amount: number): string,
};

export type TReadableColor = (hex: string, darkColor?: string, lightColor?: string) => string;

export type TUtils = {
  colorLevel: TColorLevel,
  contrastingColor: TContrastingColor,
  opacify: TOpacify,
  readableColor: TReadableColor,
};

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

export type TColorVariantKeys = 'active' | 'danger' | 'default' | 'link' | 'info' | 'primary' | 'success' | 'warning';

export type TColorVariants = Partial<Record<TColorVariantKeys, string>>;

export type TColors = {
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
    variant: TColorVariants,
    variantHover: TColorVariants,
  },
  variant: TColorVariants & {
    dark: TColorVariants,
    darker: TColorVariants,
    darkest: TColorVariants,
    light: TColorVariants,
    lighter: TColorVariants,
    lightest: TColorVariants,
  },
};

export type TFonts = {
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

export type TSpacingSizes = '0' | '1' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type TSpacings = Record<TSpacingSizes, string> & { px: Record<TSpacingSizes, number> };

export type TThemeColorModes = {
  teint: TColors,
  noir: TColors,
};

export type TChangeMode = (nextMode: TThemeMode) => void;

export type TButtons = {
  colors: TColors,
  utils: TUtils,
}

export interface GraylogTheme {
  breakpoints: TBreakpoints,
  colors: TColors,
  fonts: TFonts,
  utils: TUtils,
  mode: TThemeMode,
  spacings: TSpacings,
  changeMode: TChangeMode,
  components: { [component: string]: FlattenSimpleInterpolation | FlattenSimpleInterpolation[] }
}
