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
  ColorScheme, ColorVariant, DeepPartial, ThemeBaseColors,
} from '../../types';
import { MantineColors } from '../types';
import { darken, lighten } from '../../utils/colors';
import THEME_BASE, {
  COLOR_SCHEME_DARK,
  COLOR_SCHEME_LIGHT,
} from '../../THEME_BASE';

export const PRIMARY_SHADES = {
  [COLOR_SCHEME_LIGHT]: 4,
  [COLOR_SCHEME_DARK]: 4,
} as const;

const LIGHT_THEME_COLOR_RATIO = [0.22, 0.385, 0.55, 0.715, 0.88];
const DARK_THEME_COLOR_RATIO = [0.15, 0.35, 0.55, 0.75, 0.95];

const colorShades = (colorScheme: ColorScheme, customBaseVariantColors?: DeepPartial<ThemeBaseColors['variant']>): MantineColors => {
  const defaultBaseVariantColors = THEME_BASE.colors[colorScheme].variant;
  const baseVariantColors = customBaseVariantColors ? { ...defaultBaseVariantColors, ...customBaseVariantColors } : defaultBaseVariantColors;
  const ratio = colorScheme === COLOR_SCHEME_LIGHT ? LIGHT_THEME_COLOR_RATIO : DARK_THEME_COLOR_RATIO;

  return Object.fromEntries(
    Object.entries(baseVariantColors).map(([variantName, color]) => ([
      variantName,
      [
        lighten(color, ratio[3]),
        lighten(color, ratio[2]),
        lighten(color, ratio[1]),
        lighten(color, ratio[0]),
        color,
        darken(color, ratio[0]),
        darken(color, ratio[1]),
        darken(color, ratio[2]),
        darken(color, ratio[3]),
        darken(color, ratio[4]),
      ],
    ])),
  ) as MantineColors;
};

export const colorShadeUtils = (shades: MantineColors, colorScheme: ColorScheme) => {
  const primaryShade = PRIMARY_SHADES[colorScheme];

  const shade = (difference: number) => {
    if (colorScheme === COLOR_SCHEME_LIGHT) {
      return primaryShade + difference;
    }

    return primaryShade - difference;
  };

  const colorShade = (color: ColorVariant, index: number) => shades[color][shade(index)];

  return {
    lightest: (color: ColorVariant) => colorShade(color, -4),
    lighter: (color: ColorVariant) => colorShade(color, -3),
    light: (color: ColorVariant) => colorShade(color, -1),
    default: (color: ColorVariant) => colorShade(color, 0),
    dark: (color: ColorVariant) => colorShade(color, 1),
    darker: (color: ColorVariant) => colorShade(color, 3),
    darkest: (color: ColorVariant) => colorShade(color, 4),
  };
};

export default colorShades;
