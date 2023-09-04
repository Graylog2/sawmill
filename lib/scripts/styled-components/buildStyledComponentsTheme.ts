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
import breakpoints from './breakpoints';

import THEME_BASE, { COLOR_SCHEME_DARK, COLOR_SCHEME_LIGHT } from '../../THEME_BASE';
import spacings from '../../styled-components/utils/spacings';
import colors from '../../styled-components/utils/colors';
import button from '../../styled-components/component-styles/button';
import {
  colorLevel, contrastingColor, opacify, readableColor,
} from '../../utils';
import aceEditor from '../../styled-components/component-styles/aceEditor';

const generateFontSize = (scale: number, sizePower: number) => `${(scale ** sizePower).toFixed(2)}rem`;

const buildStyledComponentsTheme = () => {
  const lightColors = colors(COLOR_SCHEME_LIGHT, THEME_BASE.colors[COLOR_SCHEME_LIGHT]);
  const darkColors = colors(COLOR_SCHEME_DARK, THEME_BASE.colors[COLOR_SCHEME_DARK]);
  const lightUtils = {
    colorLevel: colorLevel(lightColors.global.textDefault, lightColors.global.textAlt),
    readableColor: readableColor(lightColors.global.textDefault, lightColors.global.textAlt),
    opacify,
    contrastingColor,
  };
  const darkUtils = {
    colorLevel: colorLevel(lightColors.global.textDefault, lightColors.global.textAlt),
    readableColor: readableColor(lightColors.global.textDefault, lightColors.global.textAlt),
    opacify,
    contrastingColor,
  };

  return ({
    colors: {
      [COLOR_SCHEME_LIGHT]: lightColors,
      [COLOR_SCHEME_DARK]: darkColors,
    },
    fonts: {
      family: {
        body: THEME_BASE.fonts.families.body,
        monospace: THEME_BASE.fonts.families.monospace,
        navigation: THEME_BASE.fonts.families.navigation,
      },
      lineHeight: { body: THEME_BASE.fonts.rootLineHeight },
      size: {
        root: `${THEME_BASE.fonts.rootSize}px`,
        body: generateFontSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.md),
        huge: generateFontSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.xxl),
        large: generateFontSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.lg),
        extraLarge: generateFontSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.xl),
        small: generateFontSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.sm),
        tiny: generateFontSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.xs),
        navigation: generateFontSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.navigation),
        h1: generateFontSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.h1),
        h2: generateFontSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.h2),
        h3: generateFontSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.h3),
        h4: generateFontSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.h4),
        h5: generateFontSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.h5),
        h6: generateFontSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.h6),
      },
    },
    spacings: spacings(THEME_BASE.spacings, THEME_BASE.fonts.rootSize),
    breakpoints: breakpoints(THEME_BASE.breakpoints),
    components: {
      [COLOR_SCHEME_LIGHT]: {
        button: button(lightColors, lightUtils),
        aceEditor: aceEditor(lightColors),
      },
      [COLOR_SCHEME_DARK]: {
        button: button(darkColors, darkUtils),
        aceEditor: aceEditor(darkColors),
      },
    },
  });
};

export default buildStyledComponentsTheme;
