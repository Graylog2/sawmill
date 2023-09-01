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
import { THEME_MODE_DARK, THEME_MODE_LIGHT } from '../../GRAYLOG_THEME';
import { ColorScheme, ColorVariant, GraylogThemeColors } from '../../types';
import { darken, lighten } from '../../utils/colors';

const lightThemeRatio = [0.22, 0.55, 0.88];
const darkThemeRatio = [0.15, 0.55, 0.95];

const generateVariantColors = (mode: ColorScheme, colors: GraylogThemeColors['variant']) => {
  if (![THEME_MODE_DARK, THEME_MODE_LIGHT].includes(mode)) {
    throw new Error(`Requires "${THEME_MODE_DARK}" or "${THEME_MODE_LIGHT}" mode option.`);
  }

  const adjustLight = mode === THEME_MODE_DARK ? darken : lighten;
  const adjustDark = mode === THEME_MODE_DARK ? lighten : darken;
  const ratio = mode === THEME_MODE_DARK ? darkThemeRatio : lightThemeRatio;
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
