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

import brand from './brandColors';
import teint from './variants/teint';
import noir from './variants/noir';
import { TThemeColorModes } from './types';

export const PropTypeColors = PropTypes.shape({
  brand: PropTypes.shape({
    primary: PropTypes.shape({
      houstonRed: PropTypes.string,
      accentRed: PropTypes.string,
      concrete: PropTypes.string,
      gravelGray: PropTypes.string,
      darkBlue: PropTypes.string,
      accentBlue: PropTypes.string,
      orange: PropTypes.string,
      white: PropTypes.string,
      black: PropTypes.string,
    }),
    grays: PropTypes.shape({
      gray1: PropTypes.string,
      gray2: PropTypes.string,
      gray3: PropTypes.string,
      gray4: PropTypes.string,
      gray5: PropTypes.string,
      gray6: PropTypes.string,
      gray7: PropTypes.string,
      gray8: PropTypes.string,
      gray9: PropTypes.string,
      gray10: PropTypes.string,
      gray11: PropTypes.string,
      gray12: PropTypes.string,
      gray13: PropTypes.string,
      gray14: PropTypes.string,
    }),
    gradients: PropTypes.shape({
      redToOrange: PropTypes.string,
      orangeToRed: PropTypes.string,
      redToWhite: PropTypes.string,
      whiteToOrange: PropTypes.string,
      grayToRed: PropTypes.string,
      redToGray: PropTypes.string,
    }),
    dataVisualization: PropTypes.shape({
      blue: PropTypes.string,
      green: PropTypes.string,
      orange: PropTypes.string,
      yellow: PropTypes.string,
      red: PropTypes.string,
      lightGray: PropTypes.string,
      darkGray: PropTypes.string,
    }),
  }),
  global: PropTypes.shape({
    primary: PropTypes.string,
    secondary: PropTypes.string,
    tertiary: PropTypes.string,
    background: PropTypes.string,
    contentBackground: PropTypes.string,
    inputBackground: PropTypes.string,
    link: PropTypes.string,
    linkHover: PropTypes.string,
    navigationBackground: PropTypes.string,
    navigationBoxShadow: PropTypes.string,
    textAlt: PropTypes.string,
    textDefault: PropTypes.string,
  }),
  gray: PropTypes.shape({
    10: PropTypes.string,
    20: PropTypes.string,
    30: PropTypes.string,
    40: PropTypes.string,
    50: PropTypes.string,
    60: PropTypes.string,
    70: PropTypes.string,
    80: PropTypes.string,
    90: PropTypes.string,
    100: PropTypes.string,
  }),
  input: PropTypes.shape({
    background: PropTypes.string,
    backgroundDisabled: PropTypes.string,
    border: PropTypes.string,
    borderFocus: PropTypes.string,
    boxShadow: PropTypes.string,
    color: PropTypes.string,
    colorDisabled: PropTypes.string,
  }),
  table: PropTypes.shape({
    background: PropTypes.string,
    backgroundAlt: PropTypes.string,
    backgroundHover: PropTypes.string,
    variant: PropTypes.shape({
      active: PropTypes.string,
      danger: PropTypes.string,
      info: PropTypes.string,
      primary: PropTypes.string,
      success: PropTypes.string,
      warning: PropTypes.string,
    }),
    variantHover: PropTypes.shape({
      active: PropTypes.string,
      danger: PropTypes.string,
      info: PropTypes.string,
      primary: PropTypes.string,
      success: PropTypes.string,
      warning: PropTypes.string,
    }),
  }),
  variant: PropTypes.shape({
    danger: PropTypes.string,
    dark: PropTypes.shape({
      danger: PropTypes.string,
      default: PropTypes.string,
      info: PropTypes.string,
      primary: PropTypes.string,
      success: PropTypes.string,
      warning: PropTypes.string,
    }),
    darker: PropTypes.shape({
      danger: PropTypes.string,
      default: PropTypes.string,
      info: PropTypes.string,
      primary: PropTypes.string,
      success: PropTypes.string,
      warning: PropTypes.string,
    }),
    darkest: PropTypes.shape({
      danger: PropTypes.string,
      default: PropTypes.string,
      info: PropTypes.string,
      primary: PropTypes.string,
      success: PropTypes.string,
      warning: PropTypes.string,
    }),
    default: PropTypes.string,
    info: PropTypes.string,
    light: PropTypes.shape({
      danger: PropTypes.string,
      default: PropTypes.string,
      info: PropTypes.string,
      primary: PropTypes.string,
      success: PropTypes.string,
      warning: PropTypes.string,
    }),
    lighter: PropTypes.shape({
      danger: PropTypes.string,
      default: PropTypes.string,
      info: PropTypes.string,
      primary: PropTypes.string,
      success: PropTypes.string,
      warning: PropTypes.string,
    }),
    lightest: PropTypes.shape({
      danger: PropTypes.string,
      default: PropTypes.string,
      info: PropTypes.string,
      primary: PropTypes.string,
      success: PropTypes.string,
      warning: PropTypes.string,
    }),
    primary: PropTypes.string,
    success: PropTypes.string,
    warning: PropTypes.string,
  }),
});

const colors: TThemeColorModes = {
  teint,
  noir,
};

export default colors;
export {
  brand,
  noir,
  teint,
};
