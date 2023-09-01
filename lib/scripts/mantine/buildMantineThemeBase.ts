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

import GRAYLOG_THEME, { THEME_MODE_DARK, THEME_MODE_LIGHT } from '../../GRAYLOG_THEME';
import colorShades from '../../mantine/utils/colorShades';
import otherColors from '../../mantine/utils/otherColors';

const fontSize = (scale: number, sizePower: number) => `${scale ** sizePower}rem`;
const headingSize = (scale: number, sizePower: number) => ({ fontSize: `${scale ** sizePower}rem` });

const buildMantineThemeBase = () => ({
  colors: colorShades(GRAYLOG_THEME.colors[THEME_MODE_LIGHT].variant),
  fontFamily: GRAYLOG_THEME.fonts.families.body,
  fontFamilyMonospace: GRAYLOG_THEME.fonts.families.monospace,
  fontSizes: {
    xs: fontSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.xs),
    sm: fontSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.sm),
    md: fontSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.md),
    lg: fontSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.lg),
    xl: fontSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.xl),
    xxl: fontSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.xxl),
  },
  spacing: spacings(GRAYLOG_THEME.spacings),
  breakpoints: breakpoints(GRAYLOG_THEME.breakpoints, GRAYLOG_THEME.fonts.rootSize),
  headings: {
    sizes: {
      h1: headingSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.h1),
      h2: headingSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.h2),
      h3: headingSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.h3),
      h4: headingSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.h4),
      h5: headingSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.h5),
      h6: headingSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.h6),
    },
  },
  others: {
    colors: {
      [THEME_MODE_LIGHT]: otherColors(THEME_MODE_LIGHT, GRAYLOG_THEME.colors[THEME_MODE_LIGHT]),
      [THEME_MODE_DARK]: otherColors(THEME_MODE_DARK, GRAYLOG_THEME.colors[THEME_MODE_DARK]),
    },
    fonts: {
      rootSize: GRAYLOG_THEME.fonts.rootSize,
      rootLineHeight: GRAYLOG_THEME.fonts.rootLineHeight,
    },
  },
});

export default buildMantineThemeBase;
