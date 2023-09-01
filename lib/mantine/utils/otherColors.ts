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

import { ColorScheme, GraylogThemeColors } from '../../types';
import { THEME_MODE_DARK } from '../../THEME_BASE';
import { OtherAttributes } from '../types';

const generateGlobalColors = (
  colorScheme: ColorScheme,
  brandColors: GraylogThemeColors['brand'],
  globalColorsBase: GraylogThemeColors['global'],
) => ({
  ...globalColorsBase,
  linkHover: chroma(globalColorsBase.link)[colorScheme === THEME_MODE_DARK ? 'brighten' : 'darken'](1).hex(),
  navigationBackground: globalColorsBase.contentBackground,
  textAlt: brandColors.secondary,
  textDefault: brandColors.tertiary,
});

const generateOtherColors = (
  colorScheme: ColorScheme,
  colorsBase: GraylogThemeColors,
  customColors?: GraylogThemeColors,
): OtherAttributes['colors'] => {
  const brandColors = customColors?.brand
    ? { ...colorsBase.brand, ...customColors.brand }
    : colorsBase.brand;

  const globalColorsBase = customColors?.global
    ? { ...colorsBase.global, ...customColors.global }
    : colorsBase.global;

  return {
    global: generateGlobalColors(colorScheme, brandColors, globalColorsBase),
    brand: brandColors,
  };
};

export default generateOtherColors;
