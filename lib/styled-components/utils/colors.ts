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

import merge from 'lodash/merge';

import generateColorVariants from './colorVariants';
import tableColors from './tableColors';
import generateGrayScale from './grayColors';
import inputColors from './inputColors';
import globalColors from './globalColors';

import { StyledComponentsTheme } from '../types';
import { MantineTheme } from '../../mantine/types';

const generateColors = (
  mantineTheme: MantineTheme,
): StyledComponentsTheme['colors'] => {
  const completeVariant = generateColorVariants(mantineTheme.colorScheme, mantineTheme.colors, mantineTheme.primaryShade[mantineTheme.colorScheme]);
  const completeGlobal = globalColors(mantineTheme.colorScheme, mantineTheme.other.colors.brand, mantineTheme.other.colors.global);

  const gray = generateGrayScale(mantineTheme.other.colors.brand.tertiary, mantineTheme.other.colors.brand.secondary);
  const table = tableColors(mantineTheme.colorScheme, completeVariant);
  const input = inputColors(completeGlobal, gray, completeVariant);

  return {
    variant: completeVariant,
    global: completeGlobal,
    brand: mantineTheme.other.colors.brand,
    table,
    gray,
    input,
  };
};

export default generateColors;
