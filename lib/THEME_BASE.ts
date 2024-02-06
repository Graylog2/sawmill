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
        danger: ['#FFEDED', '#FFC7C7', '#FFACAB', '#FE8685', '#FE6E6D', '#FE4A49', '#E74342', '#B43534', '#8C2928', '#6B1F1F'],
        default: ['#FAF9FF', '#EEEDF6', '#CAC8D7', '#8D8AA9', '#362F62', '#20194D', '#1A143E', '#130F2E', '#0D0A1F', '#06050F'],
        info: ['#EBFAFF', '#C2F0FF', '#85E0FF', '#47D1FF', '#1FC7FF', '#03C2FF', '#00A8E0', '#008AB8', '#006B8F', '#003D52'],
        primary: ['#E6EBFF', '#B1C2FF', '#8BA4FF', '#557BFF', '#3561FF', '#023AFF', '#0235E8', '#0129B5', '#01208C', '#01186B'],
        success: ['#EEFAEC', '#CAEFC5', '#B0E7A9', '#8CDB81', '#75D569', '#53CA43', '#4CB83D', '#3B8F30', '#2E6F25', '#23551C'],
        warning: ['#FFFBEB', '#FFF2C2', '#FFEDAD', '#FFE485', '#FFDC5C', '#FFCA0A', '#FFCA0A', '#CCA000', '#7A6000', '#292000'],
        gray: ['#f8f8f8', '#ebebeb', '#dddddd', '#d0d0d0', '#c3c3c3', '#b5b5b5', '#a8a8a8', '#9a9a9a', '#8d8d8d', '#808080'],
      },
      global: {
        background: '#EEEDF6',
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
        danger: ['#FFEDED', '#FFC7C7', '#FFACAB', '#FE8685', '#FE6E6D', '#FE4A49', '#E74342', '#B43534', '#8C2928', '#6B1F1F'],
        default: ['#FAF9FF', '#EEEDF6', '#CAC8D7', '#8D8AA9', '#362F62', '#20194D', '#1A143E', '#130F2E', '#0D0A1F', '#06050F'],
        info: ['#EBFAFF', '#C2F0FF', '#85E0FF', '#47D1FF', '#1FC7FF', '#03C2FF', '#00A8E0', '#008AB8', '#006B8F', '#003D52'],
        primary: ['#E6EBFF', '#B1C2FF', '#8BA4FF', '#557BFF', '#3561FF', '#023AFF', '#0235E8', '#0129B5', '#01208C', '#01186B'],
        success: ['#EEFAEC', '#CAEFC5', '#B0E7A9', '#8CDB81', '#75D569', '#53CA43', '#4CB83D', '#3B8F30', '#2E6F25', '#23551C'],
        warning: ['#FFFBEB', '#FFF2C2', '#FFEDAD', '#FFE485', '#FFDC5C', '#FFCA0A', '#FFCA0A', '#CCA000', '#7A6000', '#292000'],
        gray: ['#F4F5F6', '#C7CBD1', '#B0B6BF', '#8F96A3', '#848C9A', '#6C7584', '#5C6370', '#494F5A', '#2E3238', '#121416'],
      },
      global: {
        background: '#21194b',
        contentBackground: '#372F60',
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
