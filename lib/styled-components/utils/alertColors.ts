import { MantineColors } from '../../mantine/types';
import { VARIANT_NAMES } from '../../THEME_BASE';
import { opacify } from '../../utils';
import { AlertColors } from '../types';

const alertColors = (colors: MantineColors, isLightTheme: boolean) => Object.fromEntries(VARIANT_NAMES.map((variantName) => [
  variantName,
  {
    background: isLightTheme ? opacify(colors[variantName][5], 0.1) : opacify(colors[variantName][3], 0.15),
    border: isLightTheme ? colors[variantName][2] : colors[variantName][8],
  },
])) as AlertColors;

export default alertColors;
