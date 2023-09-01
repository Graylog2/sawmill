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
  MantineColors,
  MantineTheme,
} from './types';
import colorShades from './utils/colorShades';
import Theme from './generated/theme.json';

import { GraylogThemeColors, Utils } from '../types';
import {
  colorLevel,
  contrastingColor,
  opacify,
  readableColor,
} from '../utils';

import '../utils/fonts';
import otherColors from './utils/otherColors';

import THEME_BASE from '../THEME_BASE';

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
    const others = {
      colors: customColors ? otherColors(colorScheme, THEME_BASE.colors[colorScheme], customColors) : Theme.others.colors[colorScheme],
      fonts: Theme.others.fonts,
    };

    this.colors = customColors?.variant ? colorShades(customColors.variant) : Theme.colors as MantineColors;
    this.colorScheme = colorScheme;
    this.breakpoints = Theme.breakpoints;
    this.fontFamily = Theme.fontFamily;
    this.fontFamilyMonospace = Theme.fontFamilyMonospace;
    this.fontSizes = Theme.fontSizes;
    this.headings = Theme.headings;
    this.spacing = Theme.spacing;
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
