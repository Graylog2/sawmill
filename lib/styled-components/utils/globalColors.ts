import chroma from 'chroma-js';

import { COLOR_SCHEME_DARK } from '../../THEME_BASE';
import { ColorScheme, ThemeBaseColors } from '../../types';

const generateGlobalColors = (
  colorScheme: ColorScheme,
  baseBrandColors: ThemeBaseColors['brand'],
  baseGlobalColors: ThemeBaseColors['global'],
) => ({
  ...baseGlobalColors,
  linkHover: chroma(baseGlobalColors.link)[colorScheme === COLOR_SCHEME_DARK ? 'brighten' : 'darken'](1).hex(),
  navigationBackground: baseGlobalColors.contentBackground,
  textAlt: baseBrandColors.secondary,
  textDefault: baseBrandColors.tertiary,
});

export default generateGlobalColors;
