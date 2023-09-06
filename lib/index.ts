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

import SawmillMantine from './mantine/Sawmill';
import SawmillSC from './styled-components/Sawmill';
import ThemeBase, { COLOR_SCHEME_LIGHT, COLOR_SCHEME_DARK } from './THEME_BASE';

export type {
  ColorScheme,
  ColorVariant,
  ThemeBaseColors,
} from './types';

export type { MantineTheme as SawmillMantineType } from './mantine/types';
export type { StyledComponentsTheme as SawmillSCType } from './styled-components/types';

export {
  SawmillMantine,
  SawmillSC,
  ThemeBase,
  COLOR_SCHEME_LIGHT,
  COLOR_SCHEME_DARK,
};
