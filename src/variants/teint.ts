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

import { $PropertyType } from 'utility-types';

import {
  generateTableColors,
  generateGrayScale,
  lighten,
  generateGlobalColors,
  generateInputColors,
  generateVariantColors,
} from '../utils/colors';

import type { TColors } from '../../types';
import { THEME_MODE_LIGHT } from '../_constants';

const brand: $PropertyType<TColors, 'brand'> = {
  primary: '#ff3633',
  secondary: '#fff',
  tertiary: '#1f1f1f',
};

const globalDefault: $PropertyType<TColors, 'global'> = {
  background: '#e8e8e8',
  contentBackground: '#fff',
  link: '#702785',
  textAlt: '',
  textDefault: '',
  linkHover: '',
  navigationBackground: '',
  navigationBoxShadow: '',
};

const variantDefault = {
  danger: '#ad0707',
  default: lighten(brand.tertiary, 0.25),
  info: '#0063be',
  primary: '#702785',
  success: '#00ae42',
  warning: '#ffd200',
};

const variant: $PropertyType<TColors, 'variant'> = {
  ...variantDefault,
  ...generateVariantColors(THEME_MODE_LIGHT, variantDefault),
};

const global = {
  ...globalDefault,
  ...generateGlobalColors(THEME_MODE_LIGHT, brand, globalDefault, variant),
};

const gray: $PropertyType<TColors, 'gray'> = generateGrayScale(brand.tertiary, brand.secondary);
const table: $PropertyType<TColors, 'table'> = generateTableColors(THEME_MODE_LIGHT, variant);
const input: $PropertyType<TColors, 'input'> = generateInputColors(THEME_MODE_LIGHT, global, gray, variant);

const teint = {
  brand,
  global,
  gray,
  input,
  table,
  variant,
} as TColors;

export default teint;
