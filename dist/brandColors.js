"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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
var primary = {
  houstonRed: '#f44040',
  accentRed: '#e22e2e',
  concrete: '#697586',
  gravelGray: '#9aa8bd',
  darkBlue: '#26354c',
  accentBlue: '#364D71',
  orange: '#F98A3A',
  white: '#ffffff',
  black: '#000000'
};
var grays = {
  gray1: '#F5F6F8',
  gray2: '#EBEEF2',
  gray3: '#E1E5EB',
  gray4: '#D7DCE5',
  gray5: '#CDD4DE',
  gray6: '#B8C2D1',
  gray7: '#A4B1C4',
  gray8: '#8B97AA',
  gray9: '#7B8697',
  gray10: '#6C7684',
  gray11: '#5C6571',
  gray12: '#4D545F',
  gray13: '#3E434C',
  gray14: '#2E3239'
};
var dataVisualization = {
  blue: '#578DCC',
  green: '#87BF5B',
  orange: primary.orange,
  yellow: '#E0BB36',
  red: primary.houstonRed,
  lightGray: primary.concrete,
  darkGray: grays.gray13
};
var gradients = {
  redToOrange: 'linear-gradient(0deg, rgba(235,84,84,1) 0%, rgba(249,138,58,1) 100%)',
  orangeToRed: 'linear-gradient(0deg, rgba(249,138,58,1) 0%, rgba(235,84,84,1) 100%)',
  redToWhite: 'linear-gradient(0deg, rgba(235,84,84,1) 0%, rgba(255,255,255,1) 100%)',
  whiteToOrange: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(249,138,58,1) 100%)',
  grayToRed: 'linear-gradient(0deg, rgba(164,177,196,1) 0%, rgba(235,84,84,1) 100%)',
  redToGray: 'linear-gradient(0deg, rgba(235,84,84,1) 0%, rgba(164,177,196,1) 100%)'
};
var brand = {
  primary: primary,
  grays: grays,
  gradients: gradients,
  dataVisualization: dataVisualization
};
var _default = brand;
exports["default"] = _default;