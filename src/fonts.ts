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

import { ROOT_FONT_SIZE } from './_constants';

import { TFonts } from "../types";

const PropTypeFonts = PropTypes.shape({
  family: PropTypes.shape({
    body: PropTypes.string,
    monospace: PropTypes.string,
  }),
  size: PropTypes.shape({
    root: PropTypes.string,
    body: PropTypes.string,
    huge: PropTypes.string,
    large: PropTypes.string,
    small: PropTypes.string,
    tiny: PropTypes.string,
    h1: PropTypes.string,
    h2: PropTypes.string,
    h3: PropTypes.string,
    h4: PropTypes.string,
    h5: PropTypes.string,
    h6: PropTypes.string,
  }),
});

const family = {
  body: '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  monospace: '"Roboto Mono", Menlo, Monaco, Consolas, "Courier New", monospace',
} as Partial<TFonts>;

/* Scaled 1.125 Major Second - https://type-scale.com/ */
const size = {
  root: `${ROOT_FONT_SIZE}px`,
  body: '1rem',
  huge: '2.027rem',
  large: '1.125rem',
  small: '0.889rem',
  tiny: '0.79rem',
  h1: '1.802rem',
  h2: '1.602rem',
  h3: '1.424rem',
  h4: '1.266rem',
  h5: '1.125rem',
  h6: '1rem',
} as Partial<TFonts>;

const fonts = {
  family,
  size,
} as TFonts;

export {
  family,
  size,
  PropTypeFonts,
};

export default fonts;
