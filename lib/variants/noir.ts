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

import type { TColors, TColorVariants } from '../types';
import {
  generateTableColors,
  generateGrayScale,
  generateGlobalColors,
  generateInputColors,
  generateVariantColors,
} from '../utils/colors';
import { THEME_MODE_DARK } from '../_constants';
import { brand as staticBrandColors } from '../staticColors';

const brand: TColors['brand'] = {
  ...staticBrandColors,
  ...{
    primary: '#ff3633',
    secondary: '#888',
    tertiary: '#fff',
    logo: '#fff',
  },
};

const globalDefault = {
  background: '#222',
  contentBackground: '#303030',
  link: '#629de2',
  textAlt: '',
  textDefault: '',
  linkHover: '',
  navigationBackground: '',
  navigationBoxShadow: '',
};

const variantDefault: TColorVariants = {
  danger: '#e74c3c',
  default: '#595959',
  info: '#578dcc',
  primary: '#697586',
  success: '#709e4c',
  warning: '#E3D45F',
};

const variant: TColors['variant'] = {
  ...variantDefault,
  ...generateVariantColors(THEME_MODE_DARK, variantDefault),
};

const global: TColors['global'] = generateGlobalColors(THEME_MODE_DARK, brand, globalDefault, variant);
const gray: TColors['gray'] = generateGrayScale(brand.tertiary, brand.secondary);
const table: TColors['table'] = generateTableColors(THEME_MODE_DARK, variant);
const input: TColors['input'] = generateInputColors(THEME_MODE_DARK, global, gray, variant);

const noir: TColors = {
  brand,
  global,
  gray,
  input,
  table,
  variant,
};

export default noir;
