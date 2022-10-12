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

import type { TColors, TColorVariants } from '../types';
import {
  generateTableColors,
  generateGrayScale,
  generateGlobalColors,
  generateInputColors,
  generateVariantColors,
} from '../utils/colors';
import { THEME_MODE_LIGHT } from '../_constants';
import { brand as staticBrandColors } from '../staticColors';

const brand: $PropertyType<TColors, 'brand'> = {
  ...staticBrandColors,
  ...{
    primary: '#ff3633',
    secondary: '#fff',
    tertiary: '#3e434c',
    logo: '#6C7585',
  },
};

const globalDefault = {
  background: '#eeeff2',
  contentBackground: '#fff',
  link: '#578dcc',
  textAlt: '',
  textDefault: '',
  linkHover: '',
  navigationBackground: '',
  navigationBoxShadow: '',
};

const variantDefault: TColorVariants = {
  danger: '#eb5454',
  default: '#9aa8bd',
  info: '#578dcc',
  primary: '#eb9145',
  success: '#90bd63',
  warning: '#d9bd47',
};

const variant: $PropertyType<TColors, 'variant'> = {
  ...variantDefault,
  ...generateVariantColors(THEME_MODE_LIGHT, variantDefault),
};

const global: $PropertyType<TColors, 'global'> = generateGlobalColors(THEME_MODE_LIGHT, brand, globalDefault, variant);
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
