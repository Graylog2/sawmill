import type { FlattenSimpleInterpolation } from 'styled-components';
import { GraylogTheme, TBreakpoints, TChangeMode, TColors, TFonts, TSpacings, TThemeMode, TUtils } from './types';
export default class Sawmill implements GraylogTheme {
    readonly colors: TColors;
    readonly breakpoints: TBreakpoints;
    readonly fonts: TFonts;
    readonly spacings: TSpacings;
    readonly utils: TUtils;
    readonly components: {
        [component: string]: FlattenSimpleInterpolation | FlattenSimpleInterpolation[];
    };
    readonly mode: TThemeMode;
    changeMode: TChangeMode;
    constructor(themeColors: TColors, mode: TThemeMode, changeMode: TChangeMode);
}
