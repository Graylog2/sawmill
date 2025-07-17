import chroma from 'chroma-js';

import { COLOR_SCHEME_LIGHT } from '../../THEME_BASE';
import { ColorScheme, ThemeBaseColors } from '../../types';
import { MantineColors } from '../../mantine/types';
import { opacify } from '../../utils';

const globalColors = (
  colorScheme: ColorScheme,
  colors: MantineColors,
  baseBrandColors: ThemeBaseColors['brand'],
  baseGlobalColors: ThemeBaseColors['global'],
) => ({
  ...baseGlobalColors,
  linkHover: chroma(baseGlobalColors.link)[colorScheme === COLOR_SCHEME_LIGHT ? 'darken' : 'brighten'](1).hex(),
  navigationBackground: baseGlobalColors.contentBackground,
  textAlt: baseBrandColors.secondary,
});

export default globalColors;
