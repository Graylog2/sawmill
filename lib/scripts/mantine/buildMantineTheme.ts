import spacings from './spacings';
import breakpoints from './breakpoints';

import THEME_BASE, { COLOR_SCHEME_DARK, COLOR_SCHEME_LIGHT } from '../../THEME_BASE';
import colorShades from '../../mantine/utils/colorShades';
import fontSize from '../../utils/fontSize';

const headingSize = (scale: number, sizePower: number) => ({ fontSize: `${scale ** sizePower}rem` });

const buildMantineTheme = () => {
  const colors = {
    [COLOR_SCHEME_LIGHT]: colorShades(COLOR_SCHEME_LIGHT),
    [COLOR_SCHEME_DARK]: colorShades(COLOR_SCHEME_DARK),
  };

  return {
    colors,
    fontFamily: THEME_BASE.fonts.families.body,
    fontFamilyMonospace: THEME_BASE.fonts.families.monospace,
    fontSizes: {
      xs: fontSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.xs),
      sm: fontSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.sm),
      md: fontSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.md),
      lg: fontSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.lg),
      xl: fontSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.xl),
      xxl: fontSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.xxl),
    },
    spacing: spacings(THEME_BASE.spacings),
    breakpoints: breakpoints(THEME_BASE.breakpoints, THEME_BASE.fonts.rootSize),
    headings: {
      sizes: {
        h1: headingSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.h1),
        h2: headingSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.h2),
        h3: headingSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.h3),
        h4: headingSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.h4),
        h5: headingSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.h5),
        h6: headingSize(THEME_BASE.fonts.scale, THEME_BASE.fonts.sizes.h6),
      },
    },
  };
};

export default buildMantineTheme;
