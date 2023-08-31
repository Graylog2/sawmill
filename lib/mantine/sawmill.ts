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
import { Color } from 'chroma-js';

import {
  MantineTheme,
} from './types';
import colorShades from './utils/colorShades';
import ThemeBase from './generated/themeBase.json';

import { GraylogThemeColors, Utils } from '../types';
import {
  colorLevel,
  contrastingColor,
  opacify,
  readableColor,
} from '../utils';

export default class Sawmill implements MantineTheme {
  readonly colors: MantineTheme['colors'];

  readonly colorScheme: MantineTheme['colorScheme'];

  readonly fontFamily: MantineTheme['fontFamily'];

  readonly fontFamilyMonospace: MantineTheme['fontFamilyMonospace'];

  readonly fontSizes: MantineTheme['fontSizes'];

  readonly breakpoints: MantineTheme['breakpoints'];

  readonly headings: MantineTheme['headings'];

  readonly spacing: MantineTheme['spacing'];

  readonly others: MantineTheme['others'];

  readonly utils: Utils;

  readonly changeColorScheme: (newColorScheme: MantineTheme['colorScheme']) => void;

  constructor({
    colorScheme,
    customColors,
    changeColorScheme,
  }: {
    colorScheme: MantineTheme['colorScheme'],
    changeColorScheme: (newColorScheme: MantineTheme['colorScheme']) => void,
    customColors?: GraylogThemeColors,
  }) {
    const {
      global: defaultGlobalColors,
      brand: defaultBrandColors,
    } = ThemeBase.others.colors[colorScheme];

    const others = {
      colors: {
        global: customColors?.global
          ? { ...defaultGlobalColors, ...customColors.global }
          : defaultGlobalColors,
        brand: customColors?.brand
          ? { ...defaultBrandColors, ...customColors.brand }
          : defaultBrandColors,
      },
    };

    this.colors = customColors?.variant ? colorShades(customColors.variant) : ThemeBase.colors;
    this.colorScheme = colorScheme;
    this.breakpoints = ThemeBase.breakpoints;
    this.fontFamily = ThemeBase.fontFamily;
    this.fontFamilyMonospace = ThemeBase.fontFamilyMonospace;
    this.fontSizes = ThemeBase.fontSizes;
    this.headings = ThemeBase.headings;
    this.spacing = ThemeBase.spacing;
    this.others = others;

    this.utils = {
      colorLevel: colorLevel(others.colors.brand.tertiary, others.colors.brand.secondary),
      readableColor: readableColor(others.colors.brand.tertiary, others.colors.brand.secondary),
      opacify,
      contrastingColor,
    };

    this.changeColorScheme = changeColorScheme;
  }
}
