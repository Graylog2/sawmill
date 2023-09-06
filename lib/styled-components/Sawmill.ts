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
import { StyledComponentsTheme } from './types';
import Theme from './generated/theme.json';
import aceEditor from './component-styles/aceEditor';
import button from './component-styles/button';
import generateColors from './utils/colors';

import { DeepPartial, ThemeBaseColors } from '../types';
import {
  colorLevel,
  contrastingColor,
  opacify,
  readableColor,
} from '../utils';

import '../utils/fonts';

const Sawmill = ({
  colorScheme,
  customColors,
}: {
  colorScheme: StyledComponentsTheme['mode'],
  customColors?: DeepPartial<ThemeBaseColors>,
}): StyledComponentsTheme => {
  const defaultColors = Theme.colors[colorScheme];
  const colors = customColors ? generateColors(colorScheme, customColors) : defaultColors;
  const utils = {
    colorLevel: colorLevel(colors.global.textDefault, colors.global.textAlt),
    readableColor: readableColor(colors.global.textDefault, colors.global.textAlt),
    opacify,
    contrastingColor,
  };

  return ({
    breakpoints: Theme.breakpoints,
    components: customColors ? {
      aceEditor: aceEditor(colors),
      button: button(colors, utils),
    } : Theme.components[colorScheme],
    colors,
    fonts: Theme.fonts,
    mode: colorScheme,
    spacings: Theme.spacings,
    utils,
  });
};

export default Sawmill;
