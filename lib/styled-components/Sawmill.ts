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
import { MantineTheme } from '../mantine/types';

const Sawmill = ({
  mantineTheme,
  customColors,
}: {
  mantineTheme: MantineTheme,
  customColors?: DeepPartial<ThemeBaseColors>
}): StyledComponentsTheme => {
  const defaultColors = Theme.colors[mantineTheme.colorScheme];
  const colors = customColors ? generateColors(mantineTheme) : defaultColors;
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
    } : Theme.components[mantineTheme.colorScheme],
    colors,
    fonts: Theme.fonts,
    mode: mantineTheme.colorScheme,
    spacings: Theme.spacings,
    utils,
  });
};

export { generateColors };
export type { StyledComponentsTheme } from './types';
export default Sawmill;
