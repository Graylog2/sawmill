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

import merge from 'lodash/merge';
import chroma from 'chroma-js';

import generateColorVariants from './colorVariants';
import tableColors from './tableColors';
import generateGrayScale from './grayColors';
import inputColors from './inputColors';
import globalColors from './globalColors';

import { StyledComponentsTheme } from '../types';
import { MantineTheme } from '../../mantine/types';
import THEME_BASE, { COLOR_SCHEME_DARK } from '../../THEME_BASE';
import { ColorScheme, ThemeBaseColors } from '../../types';

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

const generateColors = (
  mantineTheme: MantineTheme,
): StyledComponentsTheme['colors'] => {
  const baseColors = THEME_BASE.colors[mantineTheme.colorScheme];
  const brandColors = mantineTheme.other.customColors?.brand
    ? { ...baseColors.brand, ...mantineTheme.other.customColors.brand }
    : baseColors.brand;
  const globalColorsBase = mantineTheme.other.customColors?.global
    ? { ...baseColors.global, ...mantineTheme.other.customColors.global }
    : baseColors.global;
  const global = generateGlobalColors(mantineTheme.colorScheme, brandColors, globalColorsBase);

  const completeVariant = generateColorVariants(mantineTheme.colorScheme, mantineTheme.colors, mantineTheme.primaryShade[mantineTheme.colorScheme]);
  const completeGlobal = globalColors(mantineTheme.colorScheme, brandColors, global);

  const gray = generateGrayScale(brandColors.tertiary, brandColors.secondary);
  const table = tableColors(mantineTheme.colorScheme, completeVariant);
  const input = inputColors(completeGlobal, gray, completeVariant);

  return {
    variant: completeVariant,
    global: completeGlobal,
    brand: brandColors,
    table,
    gray,
    input,
  };
};

export default generateColors;
