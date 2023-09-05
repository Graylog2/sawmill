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

import { ThemeBaseColors } from '../../types';
import { MantineColors } from '../types';
import { darken, lighten } from '../../utils/colors';

const SCALE_RATIO = [0.17, 0.34, 0.51, 0.68, 0.85];

const colorShades = (baseVariantColors: ThemeBaseColors['variant']): MantineColors => Object.fromEntries(
  Object.entries(baseVariantColors).map(([variantName, color]) => ([
    variantName,
    [
      lighten(color, SCALE_RATIO[4]),
      lighten(color, SCALE_RATIO[3]),
      lighten(color, SCALE_RATIO[2]),
      lighten(color, SCALE_RATIO[1]),
      lighten(color, SCALE_RATIO[0]),
      color,
      darken(color, SCALE_RATIO[0]),
      darken(color, SCALE_RATIO[1]),
      darken(color, SCALE_RATIO[2]),
      darken(color, SCALE_RATIO[3]),
    ],
  ])),
) as MantineColors;
export default colorShades;
