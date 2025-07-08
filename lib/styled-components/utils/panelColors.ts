import { VARIANT_NAMES } from '../../THEME_BASE';
import { ColorScheme, ColorVariant } from '../../types';
import { MantineColors } from '../../mantine/types';
import opacify from '../../utils/opacify';

const panelColors = (colorScheme: ColorScheme, colors: MantineColors, primaryShade: number, isLightTheme: boolean) => Object.fromEntries(VARIANT_NAMES.map((variantName) => {
  const background = opacify(colors[variantName][primaryShade], isLightTheme ? 0.1 : 0.15);

  return [
    variantName,
    { background },
  ];
})) as Record<ColorVariant, { background: string }>;

export default panelColors;
