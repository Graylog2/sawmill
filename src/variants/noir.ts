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

import { TColors } from '../colors';

import {
  generateTableColors,
  generateGrayScale,
  generateGlobalColors,
  generateInputColors,
  generateVariantColors,
} from '../utils/colors';

import { THEME_MODE_DARK } from '../_constants';

const brand: $PropertyType<TColors, 'brand'> = {
  primary: '#ff3633',
  secondary: '#888',
  tertiary: '#fff',
};

const globalDefault: $PropertyType<TColors, 'global'> = {
  background: '#222',
  contentBackground: '#303030',
  link: '#00bc8c',
  textAlt: '',
  textDefault: '',
  linkHover: '',
  navigationBackground: '',
  navigationBoxShadow: '',
};

const variantDefault = {
  danger: '#E74C3C',
  default: '#595959',
  info: '#3498DB',
  primary: '#375a7f',
  success: '#00bc8c',
  warning: '#F39C12',
};

const variant: $PropertyType<TColors, 'variant'> = {
  ...variantDefault,
  ...generateVariantColors(THEME_MODE_DARK, variantDefault),
};

const global = {
  ...globalDefault,
  ...generateGlobalColors(THEME_MODE_DARK, brand, globalDefault, variant),
};

const gray: $PropertyType<TColors, 'gray'> = generateGrayScale(brand.tertiary, brand.secondary);
const table: $PropertyType<TColors, 'table'> = generateTableColors(THEME_MODE_DARK, variant);
const input: $PropertyType<TColors, 'input'> = generateInputColors(THEME_MODE_DARK, global, gray, variant);

const noir: TColors = {
  brand,
  global,
  gray,
  input,
  table,
  variant,
};

export default noir;
