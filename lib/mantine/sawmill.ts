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
import {
  MantineTheme,
} from './types';
import generateColorScales from './utils/generateColorScales';
import ThemeBase from './generated/themeBase.json';

import { GraylogThemeColors } from '../new-types';

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

  constructor(
    colorScheme: MantineTheme['colorScheme'],
    customColors: GraylogThemeColors,
  ) {
    this.colors = customColors.variant ? generateColorScales(customColors.variant) : ThemeBase.colors;
    this.colorScheme = colorScheme;
    this.breakpoints = ThemeBase.breakpoints;
    this.fontFamily = ThemeBase.fontFamily;
    this.fontFamilyMonospace = ThemeBase.fontFamilyMonospace;
    this.fontSizes = ThemeBase.fontSizes;
    this.headings = ThemeBase.headings;
    this.spacing = ThemeBase.spacing;

    const {
      global: defaultGlobalColors,
      brand: defaultBrandColors,
    } = ThemeBase.others.colors[colorScheme];

    this.others = {
      colors: {
        global: customColors?.global
          ? { ...defaultGlobalColors, ...customColors.global }
          : defaultGlobalColors,
        brand: customColors?.brand
          ? { ...defaultBrandColors, ...customColors.brand }
          : defaultBrandColors,
      },
    };
  }
}
