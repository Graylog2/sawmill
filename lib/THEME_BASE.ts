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
import { ThemeBase } from './types';

export const COLOR_SCHEME_DARK = 'dark';
export const COLOR_SCHEME_LIGHT = 'light';

export const LIGHT_THEME_COLOR_RATIO = [0.22, 0.55, 0.88, 1.21, 1.54];
export const DARK_THEME_COLOR_RATIO = [0.15, 0.55, 0.95, 1.35, 1.75];

const THEME_BASE: ThemeBase = {
  fonts: {
    families: {
      body: '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
      monospace: '"Ubuntu Mono", Menlo, Monaco, Consolas, "Courier New", monospace',
      navigation: '"DM Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    },
    // Scale, the root font size and the font power will be used to calculate font sizes.
    /* Scaled 1.067 Minor Second - https://type-scale.com/ */
    rootSize: 16,
    rootLineHeight: '1.24px',
    scale: 1.067,
    sizes: {
      navigation: -1,
      h1: 7,
      h2: 4,
      h3: 3,
      h4: 2,
      h5: 1,
      h6: 0,
      xs: -3,
      sm: -2,
      md: 0,
      lg: 1,
      xl: 5,
      xxl: 14,
    },
  },
  breakpoints: {
    xs: 480,
    sm: 768,
    md: 1024,
    lg: 1184,
    xl: 1440,
  },
  spacings: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
  colors: {
    [COLOR_SCHEME_LIGHT]: {
      variant: {
        danger: '#eb5454',
        default: '#9aa8bd',
        info: '#578dcc',
        primary: '#697586',
        success: '#7eb356',
        warning: '#eedf64',
      },
      global: {
        background: '#eeeff2',
        contentBackground: '#fff',
        link: '#578dcc',
        navigationBoxShadow: 'rgba(245,246,248,0.5)',
      },
      brand: {
        primary: '#ff3633',
        secondary: '#fff',
        tertiary: '#3e434c',
        logo: '#6C7585',
        concrete: '#697586',
      },
    },
    [COLOR_SCHEME_DARK]: {
      variant: {
        danger: '#e74c3c',
        default: '#595959',
        info: '#578dcc',
        primary: '#697586',
        success: '#709e4c',
        warning: '#E3D45F',
      },
      global: {
        background: '#222',
        contentBackground: '#303030',
        link: '#629de2',
        navigationBoxShadow: 'rgba(20,20,20,0.5)',
      },
      brand: {
        primary: '#ff3633',
        secondary: '#888',
        tertiary: '#fff',
        logo: '#fff',
        concrete: '#697586',
      },
    },
  },
};

export default THEME_BASE;
