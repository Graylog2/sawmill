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

import generateColorVariants from './generateColorVariants';
import generateTableColors from './generateTableColors';
import generateGrayScale from './generateGrayColors';
import generateInputColors from './generateInputColors';
import generateGlobalColors from './generateGlobalColors';

import { ColorScheme, GraylogThemeColors } from '../../types';
import { StyledComponentsTheme } from '../types';

const generateColors = (
  mode: ColorScheme,
  baseColors: GraylogThemeColors,
): StyledComponentsTheme['colors'] => {
  const completeVariant = generateColorVariants(mode, baseColors.variant);
  const completeGlobal = generateGlobalColors(mode, baseColors.brand, baseColors.global, completeVariant);

  const gray = generateGrayScale(baseColors.brand.tertiary, baseColors.brand.secondary);
  const table = generateTableColors(mode, completeVariant);
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
