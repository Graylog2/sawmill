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
import generateSpacings from '../styled-components/utils/generateSpacings';
import generateBreakpoints from '../styled-components/utils/generateBreakpoints';
import generateColors from '../styled-components/utils/generateColors';

const generateFontSize = (scale: number, sizePower: number) => `${(scale ** sizePower).toFixed(2)}rem`;

const buildStyledComponentsThemeBase = () => ({
  colors: {
    light: generateColors(THEME_MODE_LIGHT, GRAYLOG_THEME.colors[THEME_MODE_LIGHT]),
    dark: generateColors(THEME_MODE_DARK, GRAYLOG_THEME.colors[THEME_MODE_DARK]),
  },
  fonts: {
    family: {
      body: GRAYLOG_THEME.fonts.families.body,
      monospace: GRAYLOG_THEME.fonts.families.monospace,
      navigation: GRAYLOG_THEME.fonts.families.navigation,
    },
    lineHeight: { body: GRAYLOG_THEME.fonts.rootLineHeight },
    size: {
      root: `${GRAYLOG_THEME.fonts.rootSize}px`,
      body: generateFontSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.md),
      huge: generateFontSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.xxl),
      large: generateFontSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.lg),
      extraLarge: generateFontSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.xl),
      small: generateFontSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.sm),
      tiny: generateFontSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.xs),
      navigation: generateFontSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.navigation),
      h1: generateFontSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.h1),
      h2: generateFontSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.h2),
      h3: generateFontSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.h3),
      h4: generateFontSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.h4),
      h5: generateFontSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.h5),
      h6: generateFontSize(GRAYLOG_THEME.fonts.scale, GRAYLOG_THEME.fonts.sizes.h6),
    },
  },
  spacings: generateSpacings(GRAYLOG_THEME.spacings, GRAYLOG_THEME.fonts.rootSize),
  breakpoints: generateBreakpoints(GRAYLOG_THEME.breakpoints),
});

export default buildStyledComponentsThemeBase;
