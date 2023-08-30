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

import GRAYLOG_THEME, { THEME_MODE_DARK, THEME_MODE_LIGHT } from '../GRAYLOG_THEME';
import generateColorScales from '../mantine/utils/generateColorScales';
import { GraylogTheme } from '../types';

const pxToRem = (sizePx: number, rootFontSize: number, targetUnit = 'rem') => `${(1 / rootFontSize) * sizePx}${targetUnit}`;

const SPACE = 0.08; // ratio we use for our calculations
const FIBONACCI = [3, 5, 8, 13, 21, 34, 55, 89, 144]; // skipped [1, 2]

const generateSpacings = (spacingNames: GraylogTheme['spacings']) => {
  const result: Record<string, string> = {};

  spacingNames.forEach((spacingName, index) => {
    const value = SPACE * FIBONACCI[index];
    result[spacingName] = `${value.toFixed(2)}rem`;
  });

  return result;
};

const generateBreakpoints = (breakpoints: GraylogTheme['breakpoints'], rootFontSize: number) => Object.fromEntries(
  Object.entries(breakpoints).map(([sizeName, sizePx]) => (
    [sizeName, pxToRem(sizePx, rootFontSize, 'em')]
  )),
);

const generateFontSize = (scale: number, sizePower: number) => `${scale ** sizePower}rem`;
const generateHeadingSize = (scale: number, sizePower: number) => ({ fontSize: `${scale ** sizePower}rem` });

const buildMantineThemeBase = () => ({
  colors: generateColorScales(GRAYLOG_THEME.colors[THEME_MODE_LIGHT].variant),
  fontFamily: GRAYLOG_THEME.fonts.families.body,
  fontFamilyMonospace: GRAYLOG_THEME.fonts.families.monospace,
  fontSizes: {
    xs: generateFontSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.xs),
    sm: generateFontSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.sm),
    md: generateFontSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.md),
    lg: generateFontSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.lg),
    xl: generateFontSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.xl),
    xxl: generateFontSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.xxl),
  },
  spacing: generateSpacings(GRAYLOG_THEME.spacings),
  breakpoints: generateBreakpoints(GRAYLOG_THEME.breakpoints, GRAYLOG_THEME.fonts.rootSize),
  headings: {
    sizes: {
      h1: generateHeadingSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.h1),
      h2: generateHeadingSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.h2),
      h3: generateHeadingSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.h3),
      h4: generateHeadingSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.h4),
      h5: generateHeadingSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.h5),
      h6: generateHeadingSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.h6),
    },
  },
  others: {
    colors: {
      [THEME_MODE_LIGHT]: {
        brand: GRAYLOG_THEME.colors[THEME_MODE_LIGHT].brand,
        global: GRAYLOG_THEME.colors[THEME_MODE_LIGHT].global,
      },
      [THEME_MODE_DARK]: {
        brand: GRAYLOG_THEME.colors[THEME_MODE_DARK].brand,
        global: GRAYLOG_THEME.colors[THEME_MODE_DARK].global,
      },
    },
  },
});

export default buildMantineThemeBase;
