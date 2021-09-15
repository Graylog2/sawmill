import { TChangeMode, TColors, TThemeMode } from './types';
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
