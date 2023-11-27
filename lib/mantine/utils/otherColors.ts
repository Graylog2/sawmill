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

import chroma from 'chroma-js';

import { contrastingColor, mixColor } from '../../utils';
import generateGrayScale from './grayColors';

import { ColorScheme, ColorVariant, DeepPartial, ThemeBaseColors } from '../../types';
import THEME_BASE, { COLOR_SCHEME_DARK } from '../../THEME_BASE';
import { DisabledColors, GlobalColors, MantineColors, OtherAttributes } from '../types';
import { PRIMARY_SHADES } from '../Constants';

const generateGlobalColors = (
  colorScheme: ColorScheme,
  brandColors: ThemeBaseColors['brand'],
  globalColorsBase: ThemeBaseColors['global'],
) => ({
  ...globalColorsBase,
  linkHover: chroma(globalColorsBase.link)[colorScheme === COLOR_SCHEME_DARK ? 'brighten' : 'darken'](1).hex(),
  navigationBackground: globalColorsBase.contentBackground,
  textAlt: brandColors.secondary,
  textDefault: brandColors.tertiary,
});

const mixDisabledColors = (variant: string, colors: MantineColors, primaryShade: number, { textAlt, textDefault }: GlobalColors) => {
  const variantColor = colors[variant as ColorVariant][primaryShade];
  const buttonAdjustColor = chroma(variantColor).luminance() > 0.5 ? textDefault : textAlt;
  const disabledBackground = mixColor(variantColor, buttonAdjustColor, 0.20);
  const disabledColor = contrastingColor(disabledBackground, 'AA');

  return {
    background: disabledBackground,
    color: disabledColor,
  }
};

const generateOtherColors = (
  colorScheme: ColorScheme,
  colors: MantineColors,
  customColors?: DeepPartial<ThemeBaseColors>,
): OtherAttributes['colors'] => {
  const baseColors = THEME_BASE.colors[colorScheme];

  const brandColors = customColors?.brand
    ? { ...baseColors.brand, ...customColors.brand }
    : baseColors.brand;

  const globalColorsBase = customColors?.global
    ? { ...baseColors.global, ...customColors.global }
    : baseColors.global;

  const global = generateGlobalColors(colorScheme, brandColors, globalColorsBase);
  const disabledColors = Object.fromEntries(Object.keys(colors)
    .map(variant => [variant, mixDisabledColors(variant, colors, PRIMARY_SHADES[colorScheme], global)])) as DisabledColors;

  return {
    global,
    brand: brandColors,
    gray: generateGrayScale(brandColors.tertiary, brandColors.secondary),
    disabled: disabledColors,
  };
};

export default generateOtherColors;
