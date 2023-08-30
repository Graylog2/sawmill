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
import aceEditor from './component-styles/aceEditor';
import buttons from './component-styles/buttons';

import { GraylogThemeColors, Utils } from '../types';
import GRAYLOG_THEME from '../GRAYLOG_THEME';
import {
  colorLevel,
  contrastingColor,
  opacify,
  readableColor,
} from '../utils';

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

  readonly utils: Utils;

  readonly components: { aceEditor: string, buttons: string[] };

  constructor(
    colorScheme: StyledComponentsTheme['mode'],
    customColors?: GraylogThemeColors,
  ) {
    const defaultColors = ThemeBase.colors[colorScheme];
    const colors = customColors ? generateCustomColors(colorScheme, customColors) : defaultColors;
    const utils = {
      colorLevel: colorLevel(colors.global.textDefault, colors.global.textAlt),
      readableColor: readableColor(colors.global.textDefault, colors.global.textAlt),
      opacify,
      contrastingColor,
    };

    this.mode = colorScheme;
    this.breakpoints = ThemeBase.breakpoints;
    this.colors = colors;
    this.fonts = ThemeBase.fonts;
    this.spacings = ThemeBase.spacings;
    this.utils = utils;

    this.components = customColors ? {
      aceEditor: aceEditor(colors),
      buttons: buttons(colors, utils),
    } : ThemeBase.components[colorScheme];
  }
}
