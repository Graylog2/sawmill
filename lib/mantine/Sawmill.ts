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
import colorShades, { colorShadeUtils, PRIMARY_SHADES } from './utils/colorShades';
import Theme from './generated/theme.json';
import otherColors from './utils/otherColors';

import {
  colorLevel,
  contrastingColor,
  opacify,
  readableColor,
} from '../utils';

import '../utils/fonts';
import { DeepPartial, ThemeBaseColors } from '../types';

const PRIMARY_COLOR = 'info';
const DEFAULT_RADIUS = 0;

const Sawmill = ({
  colorScheme,
  customColors,
}: {
  colorScheme: MantineTheme['colorScheme'],
  changeColorScheme?: (newColorScheme: MantineTheme['colorScheme']) => void,
  customColors?: DeepPartial<ThemeBaseColors>,
}): MantineTheme => {
  const colors = customColors?.variant ? colorShades(colorScheme, customColors.variant) : Theme.colors[colorScheme] as MantineColors;
  const others = {
    colors: customColors ? otherColors(colorScheme, customColors) : Theme.others.colors[colorScheme],
    shades: colorShadeUtils(colors, colorScheme),
    fonts: Theme.others.fonts,
  };

  return {
    defaultRadius: DEFAULT_RADIUS,
    breakpoints: Theme.breakpoints,
    colors,
    colorScheme,
    fontFamily: Theme.fontFamily,
    fontFamilyMonospace: Theme.fontFamilyMonospace,
    fontSizes: Theme.fontSizes,
    headings: Theme.headings,
    others,
    primaryColor: PRIMARY_COLOR,
    primaryShade: PRIMARY_SHADES,
    spacing: Theme.spacing,
    utils: {
      colorLevel: colorLevel(others.colors.brand.tertiary, others.colors.brand.secondary),
      readableColor: readableColor(others.colors.brand.tertiary, others.colors.brand.secondary),
      opacify,
      contrastingColor,
    },
  };
};

export type { MantineTheme } from './types';
export default Sawmill;
