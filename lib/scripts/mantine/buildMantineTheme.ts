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

import spacings from './spacings';
import breakpoints from './breakpoints';

import THEME_BASE, { COLOR_SCHEME_DARK, COLOR_SCHEME_LIGHT } from '../../THEME_BASE';
import colorShades from '../../mantine/utils/colorShades';
import otherColors from '../../mantine/utils/otherColors';
import fontSize from "../../utils/fontSize";

const headingSize = (scale: number, sizePower: number) => ({ fontSize: `${scale ** sizePower}rem` });

const buildMantineTheme = () => ({
  colors: {
    [COLOR_SCHEME_LIGHT]: colorShades(COLOR_SCHEME_LIGHT),
    [COLOR_SCHEME_DARK]: colorShades(COLOR_SCHEME_DARK),
  },
  fontFamily: THEME_BASE.fonts.families.body,
  fontFamilyMonospace: THEME_BASE.fonts.families.monospace,
  fontSizes: {
    xs: fontSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.xs),
    sm: fontSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.sm),
    md: fontSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.md),
    lg: fontSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.lg),
    xl: fontSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.xl),
    xxl: fontSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.xxl),
  },
  spacing: spacings(THEME_BASE.spacings),
  breakpoints: breakpoints(THEME_BASE.breakpoints, THEME_BASE.fonts.rootSize),
  headings: {
    sizes: {
      h1: headingSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.h1),
      h2: headingSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.h2),
      h3: headingSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.h3),
      h4: headingSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.h4),
      h5: headingSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.h5),
      h6: headingSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.h6),
    },
  },
  others: {
    colors: {
      [COLOR_SCHEME_LIGHT]: otherColors(COLOR_SCHEME_LIGHT),
      [COLOR_SCHEME_DARK]: otherColors(COLOR_SCHEME_DARK),
    },
    fonts: {
      rootSize: THEME_BASE.fonts.rootSize,
      rootLineHeight: THEME_BASE.fonts.rootLineHeight,
      fontFamilyNavigation: THEME_BASE.fonts.families.navigation
    },
  },
});

export default buildMantineTheme;
