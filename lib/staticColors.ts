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

import { $PropertyType } from 'utility-types';

import { TStaticColors } from './types';

const brand: $PropertyType<TStaticColors, 'brand'> = {
  houstonRed: '#F44040',
  accentRed: '#e22e2e',
  concrete: '#697586',
  gravelGray: '#9aa8bd',
  darkBlue: '#26354c',
  accentBlue: '#364D71',
  orange: '#F98A3A',
};

export default { brand } as TStaticColors;
export {
  brand,
};
