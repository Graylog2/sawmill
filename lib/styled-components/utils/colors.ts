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

import generateColorVariants from './colorVariants';
import tableColors from './tableColors';
import generateGrayScale from './grayColors';
import generateInputColors from './generateInputColors';
import globalColors from './globalColors';

import ThemeBase from '../../THEME_BASE';
import { ColorScheme, DeepPartial, ThemeBaseColors } from '../../types';
import { StyledComponentsTheme } from '../types';

const generateColors = (
  colorScheme: ColorScheme,
  customColors?: DeepPartial<ThemeBaseColors>,
): StyledComponentsTheme['colors'] => {
  const defaultBaseColors = ThemeBase.colors[colorScheme];
  const baseColors = customColors ? merge({}, defaultBaseColors, customColors) : defaultBaseColors;
  const completeVariant = generateColorVariants(colorScheme, baseColors.variant);
  const completeGlobal = globalColors(colorScheme, baseColors.brand, baseColors.global);

  const gray = generateGrayScale(baseColors.brand.tertiary, baseColors.brand.secondary);
  const table = tableColors(colorScheme, completeVariant);
  const input = generateInputColors(completeGlobal, gray, completeVariant);

  return {
    variant: completeVariant,
    global: completeGlobal,
    brand: baseColors.brand,
    table,
    gray,
    input,
  };
};

export default generateColors;
