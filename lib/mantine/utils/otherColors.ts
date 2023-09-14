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

import generateGrayScale from './grayColors';

import { ColorScheme, DeepPartial, ThemeBaseColors } from '../../types';
import THEME_BASE, { COLOR_SCHEME_DARK } from '../../THEME_BASE';
import { OtherAttributes } from '../types';

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

const generateOtherColors = (
  colorScheme: ColorScheme,
  customColors?: DeepPartial<ThemeBaseColors>,
): OtherAttributes['colors'] => {
  const baseColors = THEME_BASE.colors[colorScheme];

  const brandColors = customColors?.brand
    ? { ...baseColors.brand, ...customColors.brand }
    : baseColors.brand;

  const globalColorsBase = customColors?.global
    ? { ...baseColors.global, ...customColors.global }
    : baseColors.global;

  return {
    global: generateGlobalColors(colorScheme, brandColors, globalColorsBase),
    brand: brandColors,
    gray: generateGrayScale(brandColors.tertiary, brandColors.secondary),
  };
};

export default generateOtherColors;
