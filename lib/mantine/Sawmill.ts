import { MantineTheme } from './types';
import colorShades from './utils/colorShades';
import Theme from './generated/theme.json';
import { PRIMARY_SHADES } from './Constants';

import { CustomColors } from '../types';

const PRIMARY_COLOR = 'info';
const DEFAULT_RADIUS = 0;

const Sawmill = ({
  colorScheme,
  customColors,
}: {
  colorScheme: MantineTheme['colorScheme'],
  changeColorScheme?: (newColorScheme: MantineTheme['colorScheme']) => void,
  customColors?: CustomColors | undefined,
}): MantineTheme => ({
  defaultRadius: DEFAULT_RADIUS,
  breakpoints: Theme.breakpoints,
  colors: colorShades(colorScheme, customColors?.variant),
  colorScheme,
  fontFamily: Theme.fontFamily,
  fontFamilyMonospace: Theme.fontFamilyMonospace,
  fontSizes: Theme.fontSizes,
  headings: Theme.headings,
  other: {
    customColors,
  },
  primaryColor: PRIMARY_COLOR,
  primaryShade: PRIMARY_SHADES,
  spacing: Theme.spacing,
});

export type { MantineTheme } from './types';
export default Sawmill;
