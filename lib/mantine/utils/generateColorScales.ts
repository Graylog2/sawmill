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

import chroma from 'chroma-js';
import {TColors} from "../types";

const scaleRatio = [0.17, 0.34, 0.51, 0.68, 0.85];
const lighten = (color: string, ratio: number) => chroma.mix(color, '#fff', ratio).hex();
const darken = (color: string, ratio: number) => chroma.mix(color, '#000', ratio).hex();

const generateColorScales = (colors: Record<keyof TColors, string>) => Object.fromEntries(
  Object.entries(colors).map(([colorName, color]) => ([
    colorName,
    [
      lighten(color, scaleRatio[4]),
      lighten(color, scaleRatio[3]),
      lighten(color, scaleRatio[2]),
      lighten(color, scaleRatio[1]),
      lighten(color, scaleRatio[0]),
      color,
      darken(color, scaleRatio[0]),
      darken(color, scaleRatio[1]),
      darken(color, scaleRatio[2]),
      darken(color, scaleRatio[3]),
    ],
  ])),
);
export default generateColorScales;
