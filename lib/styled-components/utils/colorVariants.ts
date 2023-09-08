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
import { COLOR_SCHEME_DARK, COLOR_SCHEME_LIGHT } from '../../THEME_BASE';
import { ColorScheme, ColorVariant, ThemeBaseColors } from '../../types';
import { darken, lighten } from '../../utils/colors';

const lightThemeRatio = [0.22, 0.55, 0.88];
const darkThemeRatio = [0.15, 0.55, 0.95];

const generateVariantColors = (colorScheme: ColorScheme, colors: ThemeBaseColors['variant']) => {
  if (![COLOR_SCHEME_DARK, COLOR_SCHEME_LIGHT].includes(colorScheme)) {
    throw new Error(`Requires "${COLOR_SCHEME_DARK}" or "${COLOR_SCHEME_LIGHT}" color scheme option.`);
  }

  const adjustLight = colorScheme === COLOR_SCHEME_DARK ? darken : lighten;
  const adjustDark = colorScheme === COLOR_SCHEME_DARK ? lighten : darken;
  const ratio = colorScheme === COLOR_SCHEME_DARK ? darkThemeRatio : lightThemeRatio;
  const variantBaseColors = Object.fromEntries(
    Object.entries(colors).map(([variantName, color]) => ([variantName, color])),
  ) as Record<ColorVariant, string>;
  const variantColorShades = {
    light: {}, lighter: {}, lightest: {}, dark: {}, darker: {}, darkest: {},
  } as Record<TColorVariantShades, TColorVariants>;

  (Object.entries(colors) as Array<[ColorVariant, string]>).forEach(
    ([name, baseColor]) => {
      variantColorShades.light[name] = adjustLight(baseColor, ratio[0]);
      variantColorShades.lighter[name] = adjustLight(baseColor, ratio[1]);
      variantColorShades.lightest[name] = adjustLight(baseColor, ratio[2]);
      variantColorShades.dark[name] = adjustDark(baseColor, ratio[0]);
      variantColorShades.darker[name] = adjustDark(baseColor, ratio[1]);
      variantColorShades.darkest[name] = adjustDark(baseColor, ratio[2]);
    },
  );

  return {
    ...variantBaseColors,
    ...variantColorShades,
  };
};

export default generateVariantColors;
