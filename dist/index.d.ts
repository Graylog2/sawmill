import { PropTypeFonts } from './fonts';
import { PropTypeBreakpoints } from './breakpoints';
import colors, { PropTypeColors } from './colors';
import { PropTypeSpacings } from './spacings';
import { PropTypeUtils } from './utils';
import type { TColors, TThemeMode, TChangeMode } from '../types';
export default class Sawmill {
    private readonly colors;
    private breakpoints;
    private fonts;
    private spacings;
    private readonly utils;
    private components;
    private mode;
    private changeMode;
    constructor(themeColors: TColors, mode: TThemeMode, changeMode: TChangeMode);
}
export { colors, PropTypeBreakpoints, PropTypeColors, PropTypeFonts, PropTypeSpacings, PropTypeUtils, };
