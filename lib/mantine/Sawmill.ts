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
  MantineColors,
  MantineTheme,
} from './types';
import colorShades from './utils/colorShades';
import Theme from './generated/theme.json';
import otherColors from './utils/otherColors';

const PRIMARY_COLOR = 'info'
const DEFAULT_RADIUS = 0;

// eslint-disable-next-line import/order
import {
  colorLevel,
  contrastingColor,
  opacify,
  readableColor,
} from '../utils';

import '../utils/fonts';
import {ColorScheme, ColorVariant, DeepPartial, ThemeBaseColors} from '../types';
import THEME_BASE, { COLOR_SCHEME_DARK, COLOR_SCHEME_LIGHT } from '../THEME_BASE';

const PRIMARY_SHADES = {
  [COLOR_SCHEME_LIGHT]: 4,
  [COLOR_SCHEME_DARK]: 4
}

const colorShadeUtils = (colorShades: MantineColors, colorScheme: ColorScheme) => {
  const primaryShade = PRIMARY_SHADES[colorScheme]
  const shade = (difference: number) => {
    if (colorScheme === COLOR_SCHEME_LIGHT) {
      return primaryShade + difference;
    }

    return primaryShade - difference;
  }

  const colorShade = (color: ColorVariant, index: number) => colorShades[color][shade(index)]

  return {
    lightest: (color: ColorVariant) => colorShade(color,-3),
    lighter: (color: ColorVariant) => colorShade(color,-2),
    light: (color: ColorVariant) => colorShade(color, -1),
    default: (color: ColorVariant) => colorShade(color, 0),
    dark: (color: ColorVariant) => colorShade(color,1),
    darker: (color: ColorVariant) => colorShade(color,2),
    darkest: (color: ColorVariant) => colorShade(color,3),
  }
}


const Sawmill = ({
  colorScheme,
  customColors,
}: {
  colorScheme: MantineTheme['colorScheme'],
  changeColorScheme?: (newColorScheme: MantineTheme['colorScheme']) => void,
  customColors?: DeepPartial<ThemeBaseColors>,
}): MantineTheme => {

  const colors = customColors?.variant ? colorShades(colorScheme, customColors.variant) : Theme.colors[colorScheme] as MantineColors
  const others = {
    colors: customColors ? otherColors(colorScheme, customColors) : Theme.others.colors[colorScheme],
    shades: colorShadeUtils(colors, colorScheme),
    fonts: Theme.others.fonts,
  };

  return {
    defaultRadius: DEFAULT_RADIUS,
    breakpoints: Theme.breakpoints,
    colors: colors,
    colorScheme,
    fontFamily: Theme.fontFamily,
    fontFamilyMonospace: Theme.fontFamilyMonospace,
    fontSizes: Theme.fontSizes,
    headings: Theme.headings,
    others,
    primaryColor: PRIMARY_COLOR,
    primaryShade: PRIMARY_SHADES,
    spacing: Theme.spacing,
    utils: {
      colorLevel: colorLevel(others.colors.brand.tertiary, others.colors.brand.secondary),
      readableColor: readableColor(others.colors.brand.tertiary, others.colors.brand.secondary),
      opacify,
      contrastingColor,
    },
  };
};

export type { MantineTheme } from './types';
export default Sawmill;
