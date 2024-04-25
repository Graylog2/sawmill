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
  textDefault: baseBrandColors.tertiary,
  textSecondary: colorScheme === COLOR_SCHEME_LIGHT ? opacify(colors.gray[5], 0.6) : opacify(colors.gray[9], 0.6),
});

export default globalColors;
