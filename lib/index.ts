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

import { FlattenSimpleInterpolation } from 'styled-components';

import fonts, { PropTypeFonts } from './fonts';
import breakpoints, { PropTypeBreakpoints } from './breakpoints';
import colors, { PropTypeColors } from './colors';
import spacings, { PropTypeSpacings } from './spacings';
import utils, { colorLevel, readableColor, PropTypeUtils } from './utils';
import buttons from './styles/buttons';
import aceEditor from './styles/aceEditor';
import fontStyles from './styles/fonts';
import type {
  TBreakpoints, TColors, TFonts, TSpacings, TUtils, TThemeMode, TChangeMode,
} from './types';

export default class Sawmill {
  private readonly colors: TColors;

  private breakpoints: TBreakpoints;

  private fonts: TFonts;

  private spacings: TSpacings;

  private readonly utils: TUtils;

  private components: { [component: string]: FlattenSimpleInterpolation | FlattenSimpleInterpolation[] };

  private mode: TThemeMode;

  private changeMode: TChangeMode;

  constructor(themeColors: TColors, mode: TThemeMode, changeMode: TChangeMode) {
    this.colors = themeColors;
    this.breakpoints = breakpoints;
    this.fonts = fonts;
    this.spacings = spacings;
    this.mode = mode;
    this.changeMode = changeMode;

    this.utils = {
      ...utils,
      colorLevel: colorLevel(this.colors),
      readableColor: readableColor(this.colors),
    };

    this.components = {
      button: buttons({ colors: this.colors, utils: this.utils }),
      aceEditor: aceEditor({ colors: this.colors }),
      fonts: fontStyles(),
    };
  }
}

export * from './breakpoints';
export * from './colors';
export * from './fonts';
export * from './spacings';
export type {
  TThemeMode
  , TColorLevel
  , TContrastingColor
  , TOpacify
  , TReadableColor
  , TUtils
  , TBreakpoint
  , TBreakpoints
  , TColorVariantKeys
  , TColorVariants
  , TColors
  , TSpacingSizes
  , TSpacings
  , TThemeColorModes
  , TChangeMode
  , TButtons,
} from './types';

export {
  colors,
  PropTypeBreakpoints,
  PropTypeColors,
  PropTypeFonts,
  PropTypeSpacings,
  PropTypeUtils,
};
