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
import merge from 'lodash/merge';

import { StyledComponentsTheme } from './types';
import Theme from './generated/theme.json';
import generateColors from './utils/colors';
import aceEditor from './component-styles/aceEditor';
import button from './component-styles/button';

import {
  ColorScheme, DeepPartial, ThemeBaseColors, Utils,
} from '../types';
import THEME_BASE from '../THEME_BASE';
import {
  colorLevel,
  contrastingColor,
  opacify,
  readableColor,
} from '../utils';
import '../utils/fonts';

const generateCustomColors = (
  colorScheme: ColorScheme,
  customColors: DeepPartial<ThemeBaseColors>,
) => {
  const colorsBase = merge(THEME_BASE.colors[colorScheme], customColors);

  return generateColors(colorScheme, colorsBase);
};

export default class Sawmill implements StyledComponentsTheme {
  readonly colors: StyledComponentsTheme['colors'];

  readonly mode: StyledComponentsTheme['mode'];

  readonly breakpoints: StyledComponentsTheme['breakpoints'];

  readonly fonts: StyledComponentsTheme['fonts'];

  readonly spacings: StyledComponentsTheme['spacings'];

  readonly utils: Utils;

  readonly components: { aceEditor: string, button: string[] };

  readonly changeMode: ((newColorScheme: StyledComponentsTheme['mode']) => void) | undefined;

  constructor({
    colorScheme,
    customColors,
    changeColorScheme,
  }: {
    colorScheme: StyledComponentsTheme['mode'],
    changeColorScheme?: (newColorScheme: StyledComponentsTheme['mode']) => void
    customColors?: DeepPartial<ThemeBaseColors>,
  }) {
    const defaultColors = Theme.colors[colorScheme];
    const colors = customColors ? generateCustomColors(colorScheme, customColors) : defaultColors;
    const utils = {
      colorLevel: colorLevel(colors.global.textDefault, colors.global.textAlt),
      readableColor: readableColor(colors.global.textDefault, colors.global.textAlt),
      opacify,
      contrastingColor,
    };

    this.mode = colorScheme;
    this.breakpoints = Theme.breakpoints;
    this.colors = colors;
    this.fonts = Theme.fonts;
    this.spacings = Theme.spacings;
    this.utils = utils;

    this.components = customColors ? {
      aceEditor: aceEditor(colors),
      button: button(colors, utils),
    } : Theme.components[colorScheme];

    this.changeMode = changeColorScheme;
  }
}
