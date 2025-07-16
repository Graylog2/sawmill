import { StyledComponentsTheme } from './types';
import Theme from './generated/theme.json';
import aceEditor from './component-styles/aceEditor';
import generateColors from './utils/colors';

import {
  colorLevel, contrastingColor, opacify, readableColor,
} from '../utils';
import { MantineTheme } from '../mantine/types';
import { COLOR_SCHEME_LIGHT } from '../THEME_BASE';

const Sawmill = (mantineTheme: MantineTheme): StyledComponentsTheme => {
  const isLightTheme = mantineTheme.colorScheme === COLOR_SCHEME_LIGHT;

  const hasCustomColors = !!mantineTheme.other.customColors && !!Object.keys(mantineTheme.other.customColors).length;
  const defaultColors = Theme.colors[mantineTheme.colorScheme];
  const colors = hasCustomColors ? generateColors(mantineTheme) : defaultColors;

  const lightTextColor = isLightTheme ? colors.text.primary : colors.global.textAlt;
  const darkTextColor = isLightTheme ? colors.global.textAlt : colors.text.primary;

  const utils = {
    colorLevel: colorLevel(lightTextColor, darkTextColor),
    readableColor: readableColor(lightTextColor, darkTextColor),
    opacify,
    contrastingColor,
  };

  return ({
    breakpoints: Theme.breakpoints,
    components: hasCustomColors ? {
      aceEditor: aceEditor(colors),
    } : Theme.components[mantineTheme.colorScheme],
    colors,
    fonts: Theme.fonts,
    mode: mantineTheme.colorScheme,
    spacings: Theme.spacings,
    utils,
  });
};

export { generateColors };
export type { StyledComponentsTheme } from './types';
export default Sawmill;
