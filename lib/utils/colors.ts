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

import * as chroma from 'chroma-js';
import { $PropertyType } from 'utility-types';

import type {
  TColors, TThemeMode, TColorVariants,
} from '../../types';
import { THEME_MODE_LIGHT, THEME_MODE_DARK } from '../_constants';

const lightThemeRatio = [0.22, 0.55, 0.88];
const darkThemeRatio = [0.15, 0.55, 0.95];

const lighten = (color: string, ratio: number): string => chroma.mix(color, '#fff', ratio).hex();
const darken = (color: string, ratio: number): string => chroma.mix(color, '#000', ratio).hex();

const generateGrayScale = (colorStart: string, colorEnd: string): $PropertyType<TColors, 'gray'> => {
  const gray = {
    10: '', 20: '', 30: '', 40: '', 50: '', 60: '', 70: '', 80: '', 90: '', 100: '',
  };
  const scale = chroma.scale([colorStart, colorEnd]).colors(10);

  scale.forEach((tint, index) => {
    const key = `${(index + 1) * 10}`;

    gray[key] = tint;
  });

  return gray;
};

const generateTableColors = (mode: TThemeMode, variant: $PropertyType<TColors, 'variant'>): $PropertyType<TColors, 'table'> => {
  if (![THEME_MODE_DARK, THEME_MODE_LIGHT].includes(mode)) {
    throw new Error(`Requires "${THEME_MODE_DARK}" or "${THEME_MODE_LIGHT}" mode option.`);
  }

  const adjust = mode === THEME_MODE_DARK ? darken : lighten;

  return {
    background: adjust(<string>variant.default, 0.95),
    backgroundAlt: adjust(<string>variant.default, 0.85),
    backgroundHover: adjust(<string>variant.default, 0.9),
    variant: {
      danger: adjust(<string>variant.danger, 0.75),
      active: adjust(<string>variant.default, 0.75),
      info: adjust(<string>variant.info, 0.75),
      primary: adjust(<string>variant.primary, 0.75),
      success: adjust(<string>variant.success, 0.75),
      warning: adjust(<string>variant.warning, 0.75),
    },
    variantHover: {
      danger: variant.lighter.danger,
      active: variant.lighter.default,
      info: variant.lighter.info,
      primary: variant.lighter.primary,
      success: variant.lighter.success,
      warning: variant.lighter.warning,
    },
  };
};

const generateVariantColors = (mode: TThemeMode, variant: TColorVariants): $PropertyType<TColors, 'variant'> => {
  if (![THEME_MODE_DARK, THEME_MODE_LIGHT].includes(mode)) {
    throw new Error(`Requires "${THEME_MODE_DARK}" or "${THEME_MODE_LIGHT}" mode option.`);
  }

  const adjustLight = mode === THEME_MODE_DARK ? darken : lighten;
  const adjustDark = mode === THEME_MODE_DARK ? lighten : darken;
  const ratio = mode === THEME_MODE_DARK ? darkThemeRatio : lightThemeRatio;
  const variants = {
    danger: '', default: '', info: '', primary: '', success: '', warning: '',
  };
  const variantColors = {
    lightest: variants,
    lighter: variants,
    light: variants,
    dark: variants,
    darker: variants,
    darkest: variants,
  };

  Object.keys(variant).forEach((name): void => {
    variantColors.light[name] = adjustLight(<string>variant[name], ratio[0]);
    variantColors.lighter[name] = adjustLight(<string>variant[name], ratio[1]);
    variantColors.lightest[name] = adjustLight(<string>variant[name], ratio[2]);

    variantColors.dark[name] = adjustDark(<string>variant[name], ratio[0]);
    variantColors.darker[name] = adjustDark(<string>variant[name], ratio[1]);
    variantColors.darkest[name] = adjustDark(<string>variant[name], ratio[2]);
  });

  return variantColors;
};

const generateInputColors = (
  mode: TThemeMode,
  global: $PropertyType<TColors, 'global'>,
  gray: $PropertyType<TColors, 'gray'>,
  variant: $PropertyType<TColors, 'variant'>,
): $PropertyType<TColors, 'input'> => ({
  background: global.contentBackground,
  backgroundDisabled: darken(global.contentBackground, 0.25),
  border: <string>variant.light.default,
  borderFocus: <string>variant.light.info,
  boxShadow: `inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px ${chroma(<string>variant.light.info).alpha(0.4).css()}`,
  color: global.textDefault,
  colorDisabled: gray[60],
  placeholder: gray[60],
});

const generateGlobalColors = (
  mode: TThemeMode,
  brand: $PropertyType<TColors, 'brand'>,
  global: $PropertyType<TColors, 'global'>,
  variant: $PropertyType<TColors, 'variant'>,
): $PropertyType<TColors, 'global'> => ({
  ...global,
  linkHover: chroma(global.link)[mode === THEME_MODE_DARK ? 'brighten' : 'darken'](1).hex(),
  navigationBackground: global.contentBackground,
  navigationBoxShadow: chroma(<string>variant.lightest.default).alpha(0.5).css(),
  textAlt: brand.secondary,
  textDefault: brand.tertiary,
});

export {
  darken,
  lighten,
  generateGlobalColors,
  generateGrayScale,
  generateInputColors,
  generateTableColors,
  generateVariantColors,
};
