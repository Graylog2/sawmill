import { StyledComponentsTheme } from './types';
import Theme from './generated/theme.json';
import aceEditor from './component-styles/aceEditor';
import generateColors from './utils/colors';

import {
  colorLevel,
  contrastingColor,
  opacify,
  readableColor,
} from '../utils';
import { MantineTheme } from '../mantine/types';

const Sawmill = (mantineTheme: MantineTheme): StyledComponentsTheme => {
  const hasCustomColors = !!mantineTheme.other.customColors && !!Object.keys(mantineTheme.other.customColors).length;
  const defaultColors = Theme.colors[mantineTheme.colorScheme];
  const colors = hasCustomColors ? generateColors(mantineTheme) : defaultColors;
  const utils = {
    colorLevel: colorLevel(colors.text.primary, colors.global.textAlt),
    readableColor: readableColor(colors.text.primary, colors.global.textAlt),
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
