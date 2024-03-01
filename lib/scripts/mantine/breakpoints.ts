import { ThemeBase } from '../../types';

const pxToRem = (sizePx: number, rootFontSize: number, targetUnit = 'rem') => `${(1 / rootFontSize) * sizePx}${targetUnit}`;
const generateBreakpoints = (breakpointsBase: ThemeBase['breakpoints'], rootFontSize: number) => Object.fromEntries(
  Object.entries(breakpointsBase).map(([sizeName, sizePx]) => (
    [sizeName, pxToRem(sizePx, rootFontSize, 'em')]
  )),
);

export default generateBreakpoints;
