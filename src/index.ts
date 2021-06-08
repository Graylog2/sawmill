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

import fonts, { PropTypeFonts } from './fonts';
import breakpoints, { PropTypeBreakpoints } from './breakpoints';
import spacings, { PropTypeSpacings } from './spacings';
import type { TFonts } from './fonts';
import type { TBreakpoints } from './breakpoints';
import type { TSpacings } from './spacings';

export type {
  TBreakpoints,
  TFonts,
  TSpacings
};

export {
  breakpoints,
  fonts,
  spacings,
  PropTypeBreakpoints,
  PropTypeFonts,
  PropTypeSpacings,
};
