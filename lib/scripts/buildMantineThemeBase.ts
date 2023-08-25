import GRAYLOG_THEME from '../GRAYLOG_THEME';
import generateColorScales from '../mantine/utils/generateColorScales';

const pxToRem = (sizePx: number, rootFontSize: number, targetUnit = 'rem') => `${(1 / rootFontSize) * sizePx}${targetUnit}`;

const transformSpacings = (spacings: {[sizeName: string]: number}, rootFontSize: number) => Object.fromEntries(
  Object.entries(spacings).map(([sizeName, sizePx]) => (
    [sizeName, pxToRem(sizePx, rootFontSize)]
  )),
);

const transformBreakpoints = (breakpoints: {[sizeName: string]: number}, rootFontSize: number) => Object.fromEntries(
  Object.entries(breakpoints).map(([sizeName, sizePx]) => (
    [sizeName, pxToRem(sizePx, rootFontSize, 'em')]
  )),
);

const transformHeadingsSizes = (sizes: {[heading: string]: string}) => Object.fromEntries(
  Object.entries(sizes).map(([heading, size]) => [heading, { fontSize: size }]),
);

const buildMantineThemeBase = () => ({
  colors: generateColorScales(GRAYLOG_THEME.colorVariants),
  fontFamily: GRAYLOG_THEME.fonts.familes.body,
  fontFamilyMonospace: GRAYLOG_THEME.fonts.familes.mono,
  fontSizes: GRAYLOG_THEME.fonts.sizes,
  spacing: transformSpacings(GRAYLOG_THEME.spacings, GRAYLOG_THEME.fonts.rootSize),
  breakpoints: transformBreakpoints(GRAYLOG_THEME.spacings, GRAYLOG_THEME.fonts.rootSize),
  headings: {
    sizes: transformHeadingsSizes(GRAYLOG_THEME.fonts.headingSizes),
  },
  others: {
    colors: GRAYLOG_THEME.modeSpecificColors,
  },
});

export default buildMantineThemeBase;
