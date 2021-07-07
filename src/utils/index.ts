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

import PropTypes from 'prop-types';

import colorLevel from './colorLevel';
import type { TColorLevel } from './colorLevel';
import contrastingColor from './contrastingColor';
import type { TContrastingColor } from './contrastingColor';
import opacify from './opacify';
import type { TOpacify } from './opacify';
import readableColor from './readableColor';
import type { TReadableColor } from './readableColor';

export type TUtils = {
  colorLevel: TColorLevel,
  contrastingColor: TContrastingColor,
  opacify: TOpacify,
  readableColor: TReadableColor,
};

export const PropTypeUtils = PropTypes.shape({
  colorLevel: PropTypes.func,
  contrastingColor: PropTypes.func,
  opacify: PropTypes.func,
  readableColor: PropTypes.func,
});

const utils = {
  colorLevel,
  contrastingColor,
  opacify,
  readableColor,
};

export {
  colorLevel,
  contrastingColor,
  opacify,
  readableColor,
};

export default utils;
