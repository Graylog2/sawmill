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

import { TColorVariants, TColorVariantShades } from '../types';
import {
  COLOR_SCHEME_DARK,
  COLOR_SCHEME_LIGHT,
} from '../../THEME_BASE';
import { ColorScheme, ColorVariant, ThemeBaseColors } from '../../types';
import { darken, lighten } from '../../utils/colors';
import { MantineColors } from '../../mantine/types';

const LIGHT_THEME_COLOR_RATIO = [0.22, 0.55, 0.88];
const DARK_THEME_COLOR_RATIO = [0.15, 0.55, 0.95];
const COLOR_VARIANTS = ['danger', 'info', 'warning', 'primary', 'default', 'success'] as Array<ColorVariant>;

const generateVariantColors = (colorScheme: ColorScheme, colors: MantineColors, primaryShade: number) => {
  if (![COLOR_SCHEME_DARK, COLOR_SCHEME_LIGHT].includes(colorScheme)) {
    throw new Error(`Requires "${COLOR_SCHEME_DARK}" or "${COLOR_SCHEME_LIGHT}" color scheme option.`);
  }

  const variantBaseColors = Object.fromEntries(COLOR_VARIANTS.map((colorVariant) => [colorVariant, colors[colorVariant][primaryShade]]));
  const variantColorShades = {
    light: {}, lighter: {}, lightest: {}, dark: {}, darker: {}, darkest: {},
  } as Record<TColorVariantShades, TColorVariants>;

  const shade = (difference: number) => {
    if (colorScheme === COLOR_SCHEME_LIGHT) {
      return primaryShade + difference;
    }

    return primaryShade - difference;
  };

  COLOR_VARIANTS.forEach((colorVariant) => {
    variantColorShades.light[colorVariant] = colors[colorVariant][shade(-1)];
    variantColorShades.lighter[colorVariant] = colors[colorVariant][shade(-2)];
    variantColorShades.lightest[colorVariant] = colors[colorVariant][shade(-3)];
    variantColorShades.dark[colorVariant] = colors[colorVariant][shade(+1)];
    variantColorShades.darker[colorVariant] = colors[colorVariant][shade(+2)];
    variantColorShades.darkest[colorVariant] = colors[colorVariant][shade(+3)];
  });

  return {
    ...variantBaseColors,
    ...variantColorShades,
  };
};

export default generateVariantColors;
