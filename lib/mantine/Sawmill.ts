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
import otherColors from './utils/otherColors';

const PRIMARY_COLOR = 'info'

// eslint-disable-next-line import/order
import {
  colorLevel,
  contrastingColor,
  opacify,
  readableColor,
} from '../utils';

import '../utils/fonts';
import { DeepPartial, ThemeBaseColors } from '../types';
import THEME_BASE from '../THEME_BASE';

const Sawmill = ({
  colorScheme,
  customColors,
}: {
  colorScheme: MantineTheme['colorScheme'],
  changeColorScheme?: (newColorScheme: MantineTheme['colorScheme']) => void,
  customColors?: DeepPartial<ThemeBaseColors>,
}): MantineTheme => {
  const others = {
    colors: customColors ? otherColors(colorScheme, customColors) : Theme.others.colors[colorScheme],
    fonts: Theme.others.fonts,
  };

  return {
    primaryColor: PRIMARY_COLOR,
    breakpoints: Theme.breakpoints,
    colors: customColors?.variant ? colorShades({ ...customColors.variant, ...THEME_BASE.colors[colorScheme].variant }) : Theme.colors as MantineColors,
    colorScheme,
    fontFamily: Theme.fontFamily,
    fontFamilyMonospace: Theme.fontFamilyMonospace,
    fontSizes: Theme.fontSizes,
    headings: Theme.headings,
    others,
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
