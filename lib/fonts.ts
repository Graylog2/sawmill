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
import { TFonts, TSizePowers } from './types';
import { generateFontSizes } from './utils/fonts';

import '@fontsource/open-sans';
import '@fontsource/roboto-mono';

const PropTypeRootFontSize = PropTypes.shape({
  value: PropTypes.number,
  px: PropTypes.string,
});

const PropTypeFontSize = PropTypes.shape({
  value: PropTypes.number,
  px: PropTypes.string,
  rem: PropTypes.string,
});

const PropTypeFonts = PropTypes.shape({
  family: PropTypes.shape({
    body: PropTypes.string,
    monospace: PropTypes.string,
  }),
  size: PropTypes.shape({
    root: PropTypeRootFontSize,
    body: PropTypeFontSize,
    huge: PropTypeFontSize,
    large: PropTypeFontSize,
    small: PropTypeFontSize,
    tiny: PropTypeFontSize,
    h1: PropTypeFontSize,
    h2: PropTypeFontSize,
    h3: PropTypeFontSize,
    h4: PropTypeFontSize,
    h5: PropTypeFontSize,
    h6: PropTypeFontSize,
  }),
});

const family = {
  body: '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  monospace: '"Roboto Mono", Menlo, Monaco, Consolas, "Courier New", monospace',
} as Partial<TFonts>;

/* Scaled 1.125 Major Second - https://type-scale.com/ */
const scale = 1.125;
const sizePowers: TSizePowers = {
  body: 0,
  huge: 6,
  large: 1,
  medium: 0,
  small: -1,
  tiny: -2,
  h1: 5,
  h2: 4,
  h3: 3,
  h4: 2,
  h5: 1,
  h6: 0,
};

const size = generateFontSizes(ROOT_FONT_SIZE, scale, sizePowers);

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
