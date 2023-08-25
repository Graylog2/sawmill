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
  TBreakpoints,
  TColors,
  TColorScheme,
  MantineTheme,
  TSpacing,
  THeadings,
  TFontSizes,
  TStaticColors,
  TOtherAttributes,
} from './types';
import generateColorScales from './utils/generateColorScales';
import ThemeBase from './generated/themeBase';

export default class Sawmill implements MantineTheme {
  readonly colors: TColors;

  readonly colorScheme: TColorScheme;

  readonly fontFamily: string;

  readonly fontFamilyMonospace: string;

  readonly fontSizes: TFontSizes;

  readonly breakpoints: TBreakpoints;

  readonly headings: THeadings;

  readonly spacing: TSpacing;

  readonly others: TOtherAttributes;

  constructor(
    colorScheme: TColorScheme,
    customColorVariants?: Record<keyof TColors, string>,
    customGeneralColors?: TStaticColors,
  ) {
    this.colors = customColorVariants ? generateColorScales(customColorVariants) as TColors : ThemeBase.colors;
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
        global: customGeneralColors?.global
          ? { ...defaultGlobalColors, ...customGeneralColors.global }
          : defaultGlobalColors,
        brand: customGeneralColors?.brand
          ? { ...defaultBrandColors, ...customGeneralColors.brand }
          : defaultBrandColors,
      },
    };
  }
}
