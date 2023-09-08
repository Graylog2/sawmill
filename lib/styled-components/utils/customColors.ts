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

import generateColors from './colors';

import { ColorScheme, ThemeBaseColors } from '../../index';
import { DeepPartial } from '../../types';
import THEME_BASE from '../../THEME_BASE';

const generateCustomColors = (
  colorScheme: ColorScheme,
  customColors?: DeepPartial<ThemeBaseColors>,
) => {
  const colorsBase = merge({}, THEME_BASE.colors[colorScheme], customColors);

  return generateColors(colorScheme, colorsBase);
};

export default generateCustomColors;
