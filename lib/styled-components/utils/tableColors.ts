import { COLOR_SCHEME_DARK, COLOR_SCHEME_LIGHT, COLOR_WHITE } from '../../THEME_BASE';
import { StyledComponentsTheme } from '../types';
import { ColorScheme } from '../../types';
import { MantineColors } from '../../mantine/types';
import { opacify } from '../../utils';

const tableColors = (colorScheme: ColorScheme, completeVariant: StyledComponentsTheme['colors']['variant'], global: StyledComponentsTheme['colors']['global'], colors: MantineColors) => {
  if (![COLOR_SCHEME_DARK, COLOR_SCHEME_LIGHT].includes(colorScheme)) {
    throw new Error(`Requires "${COLOR_SCHEME_DARK}" or "${COLOR_SCHEME_LIGHT}" color scheme option.`);
  }

  const isLightTheme = colorScheme === COLOR_SCHEME_LIGHT;

  return {
    head: {
      background: 'transparent',
    },
    row: {
      background: 'transparent',
      backgroundStriped: isLightTheme ? opacify(colors.gray[2], 0.1) : opacify(colors.gray[9], 0.2),
      backgroundHover: isLightTheme ? colors.gray[1] : colors.gray[4],
      backgroundExpanded: isLightTheme ? COLOR_WHITE : colors.gray[5],
      divider: isLightTheme ? colors.gray[1] : colors.gray[9],
    },
    variant: {
      danger: completeVariant.light.danger,
      active: opacify(colors.gray[2], 0.2),
      info: completeVariant.light.info,
      primary: completeVariant.light.primary,
      success: completeVariant.light.success,
      warning: completeVariant.light.warning,
    },
    variantHover: {
      danger: completeVariant.lighter.danger,
      active: opacify(colors.gray[2], 0.2),
      info: completeVariant.lighter.info,
      primary: completeVariant.lighter.primary,
      success: completeVariant.lighter.success,
      warning: completeVariant.lighter.warning,
    },
    highlightBackground: colors.info[5],
    highlightBorder: colors.info[3],
    highlightText: colors.gray[0],
  };
};

export default tableColors;
