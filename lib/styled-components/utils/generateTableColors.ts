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

import { THEME_MODE_DARK, THEME_MODE_LIGHT } from '../../GRAYLOG_THEME';
import { StyledComponentsTheme } from '../types';

const lighten = (color: string, ratio: number) => chroma.mix(color, '#fff', ratio).hex();
const darken = (color: string, ratio: number) => chroma.mix(color, '#000', ratio).hex();

const generateTableColors = (mode: 'light' | 'dark', completeVariant: StyledComponentsTheme['colors']['variant']) => {
  if (![THEME_MODE_DARK, THEME_MODE_LIGHT].includes(mode)) {
    throw new Error(`Requires "${THEME_MODE_DARK}" or "${THEME_MODE_LIGHT}" mode option.`);
  }

  const adjust = mode === THEME_MODE_DARK ? darken : lighten;

  const tableColors = {
    background: adjust(completeVariant.default as string, 0.95),
    backgroundAlt: adjust(completeVariant.default as string, 0.85),
    backgroundHover: adjust(completeVariant.default as string, 0.9),
    variant: {
      danger: adjust(completeVariant.danger as string, 0.75),
      active: adjust(completeVariant.default as string, 0.75),
      info: adjust(completeVariant.info as string, 0.75),
      primary: adjust(completeVariant.primary as string, 0.75),
      success: adjust(completeVariant.success as string, 0.75),
      warning: adjust(completeVariant.warning as string, 0.75),
    },
    variantHover: {
      danger: completeVariant.lighter.danger,
      active: completeVariant.lighter.default,
      info: completeVariant.lighter.info,
      primary: completeVariant.lighter.primary,
      success: completeVariant.lighter.success,
      warning: completeVariant.lighter.warning,
    },
  };

  return tableColors;
};

export default generateTableColors;
