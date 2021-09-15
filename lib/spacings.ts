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

import * as PropTypes from 'prop-types';

import { ROOT_FONT_SIZE } from './_constants';
import { TSpacings } from './types';

const SPACE = 0.08; // ratio we use for our calculations
const SIZES = ['0', '1', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
const FIBONACCI = [0, 1, 3, 5, 8, 13, 21, 34, 55, 89, 144]; // skipped [1, 2]

const props = SIZES.reduce((acc, key) => ({ ...acc, [key]: PropTypes.string }), {
  px: PropTypes.shape(SIZES.reduce((acc, key) => ({ ...acc, [key]: PropTypes.number }), {})),
});

export const PropTypeSpacings = PropTypes.shape(props);

const spacings: TSpacings = {
  0: '0px',
  1: '1px',
  xxs: '',
  xs: '',
  sm: '',
  md: '',
  lg: '',
  xl: '',
  xxl: '',
  px: {
    0: 0, 1: 1, xxs: 0, xs: 0, sm: 0, md: 0, lg: 0, xl: 0, xxl: 0,
  },
};

SIZES.forEach((size, index) => {
  if (size !== '0' && size !== '1') {
    const value = SPACE * FIBONACCI[index];

    spacings[size] = `${value.toFixed(2)}rem`;
    spacings.px[size] = Math.round(value * ROOT_FONT_SIZE);
  }
});

export default spacings;
