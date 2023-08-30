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
import { merge } from 'lodash';

import { StyledComponentsTheme } from './types';
import ThemeBase from './generated/themeBase.json';
import generateColors from './utils/generateColors';

import { GraylogThemeColors } from '../new-types';
import GRAYLOG_THEME from '../GRAYLOG_THEME';

const generateCustomColors = (
  colorScheme: 'light' | 'dark',
  customColors: GraylogThemeColors,
) => {
  const colors = merge(GRAYLOG_THEME.colors[colorScheme], customColors);

  return generateColors(colorScheme, colors);
};

export default class Sawmill implements StyledComponentsTheme {
  readonly colors: StyledComponentsTheme['colors'];

  readonly mode: StyledComponentsTheme['mode'];

  readonly breakpoints: StyledComponentsTheme['breakpoints'];

  readonly fonts: StyledComponentsTheme['fonts'];

  readonly spacings: StyledComponentsTheme['spacings'];

  constructor(
    colorScheme: StyledComponentsTheme['mode'],
    customColors?: GraylogThemeColors,
  ) {
    const defaultColors = ThemeBase.colors[colorScheme];

    this.mode = colorScheme;
    this.breakpoints = ThemeBase.breakpoints;
    this.colors = customColors ? generateCustomColors(colorScheme, customColors) : defaultColors;
    this.fonts = ThemeBase.fonts;
    this.spacings = ThemeBase.spacings;
  }
}
