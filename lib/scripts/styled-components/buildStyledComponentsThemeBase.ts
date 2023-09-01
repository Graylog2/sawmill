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

import GRAYLOG_THEME, { THEME_MODE_DARK, THEME_MODE_LIGHT } from '../../GRAYLOG_THEME';
import spacings from '../../styled-components/utils/spacings';
import colors from '../../styled-components/utils/colors';
import buttons from '../../styled-components/component-styles/buttons';
import {
  colorLevel, contrastingColor, opacify, readableColor,
} from '../../utils';
import aceEditor from '../../styled-components/component-styles/aceEditor';

const generateFontSize = (scale: number, sizePower: number) => `${(scale ** sizePower).toFixed(2)}rem`;

const buildStyledComponentsThemeBase = () => {
  const lightColors = colors(THEME_MODE_LIGHT, GRAYLOG_THEME.colors[THEME_MODE_LIGHT]);
  const darkColors = colors(THEME_MODE_DARK, GRAYLOG_THEME.colors[THEME_MODE_DARK]);
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
      [THEME_MODE_LIGHT]: lightColors,
      [THEME_MODE_DARK]: darkColors,
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
    spacings: spacings(GRAYLOG_THEME.spacings, GRAYLOG_THEME.fonts.rootSize),
    breakpoints: breakpoints(GRAYLOG_THEME.breakpoints),
    components: {
      [THEME_MODE_LIGHT]: {
        buttons: buttons(lightColors, lightUtils),
        aceEditor: aceEditor(lightColors),
      },
      [THEME_MODE_DARK]: {
        buttons: buttons(darkColors, darkUtils),
        aceEditor: aceEditor(darkColors),
      },
    },
  });
};

export default buildStyledComponentsThemeBase;
