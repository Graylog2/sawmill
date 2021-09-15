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

import { TBreakpoints } from '../types';

const breakpointSizes: { [key: string]: number } = {
  xs: 480,
  sm: 768,
  md: 992,
  lg: 1200,
};

const breakpoints = Object.entries(breakpointSizes).reduce((sizes, [bp, size]) => {
  const min = size;
  const max = size - 1;

  return {
    min: { ...sizes.min, [bp]: `${min}px` },
    max: { ...sizes.max, [bp]: `${max}px` },
    px: {
      min: { ...sizes.px.min, [bp]: min },
      max: { ...sizes.px.max, [bp]: max },
    },
  };
}, {
  min: {},
  max: {},
  px: {
    min: {},
    max: {},
  },
} as TBreakpoints);

const breakpointPropType = PropTypes.shape({
  xs: PropTypes.string,
  sm: PropTypes.string,
  md: PropTypes.string,
  lg: PropTypes.string,
});

const breakpointPxPropType = PropTypes.shape({
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
});

export const PropTypeBreakpoints = PropTypes.shape({
  min: breakpointPropType,
  max: breakpointPropType,
  px: PropTypes.shape({
    min: breakpointPxPropType,
    max: breakpointPxPropType,
  }),
});

export default breakpoints;
