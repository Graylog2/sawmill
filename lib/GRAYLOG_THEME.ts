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

export default {
  fonts: {
    familes: {
      body: '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
      mono: '"Ubuntu Mono", Menlo, Monaco, Consolas, "Courier New", monospace',
      navigation: '"DM Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    },
    rootSize: 16,
    sizes: {
      xs: '0.823rem',
      sm: '0.878rem',
      md: '1rem',
      lg: '1.067rem',
      xl: '1.383rem',
      xxl: '2.479rem',
    },
    headingSizes: {
      h1: '1.575rem',
      h2: '1.296rem',
      h3: '1.215rem',
      h4: '1.138rem',
      h5: '1.067rem',
      h6: '1rem',
    },
  },
  breakpoints: {
    xs: 480,
    sm: 768,
    md: 1024,
    lg: 1184,
    xl: 1440,
  },
  spacings: {
    xxs: 4,
    xs: 6,
    sm: 10,
    md: 17,
    lg: 27,
    xl: 44,
    xxl: 70,
  },
  colorVariants: {
    danger: '#eb5454',
    default: '#9aa8bd',
    info: '#578dcc',
    primary: '#697586',
    success: '#7eb356',
    warning: '#eedf64',
  },
  modeSpecificColors: {
    light: {
      global: {
        background: '#eeeff2',
        contentBackground: '#fff',
        link: '#578dcc',
        textAlt: '#fff',
        textDefault: '#3e434c',
        linkHover: '#1a609b',
        navigationBackground: '#fff',
        navigationBoxShadow: 'rgba(245,246,248,0.5)',
      },
      brand: {
        primary: '#ff3633',
        secondary: '#fff',
        tertiary: '#3e434c',
        logo: '#6C7585',
      },
    },
    dark: {
      global: {
        background: '#222',
        contentBackground: '#303030',
        link: '#629de2',
        textAlt: '#888',
        textDefault: '#fff',
        linkHover: '#97ceff',
        navigationBackground: '#303030',
        navigationBoxShadow: 'rgba(20,20,20,0.5)',
      },
      brand: {
        primary: '#ff3633',
        secondary: '#888',
        tertiary: '#fff',
        logo: '#fff',
      },
    },
  },
};
