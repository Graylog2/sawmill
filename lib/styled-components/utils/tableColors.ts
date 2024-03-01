import { COLOR_SCHEME_DARK, COLOR_SCHEME_LIGHT } from '../../THEME_BASE';
import { StyledComponentsTheme } from '../types';
import { darken, lighten } from '../../utils/colors';
import { ColorScheme } from '../../types';

const generateTableColors = (colorScheme: ColorScheme, completeVariant: StyledComponentsTheme['colors']['variant']) => {
  if (![COLOR_SCHEME_DARK, COLOR_SCHEME_LIGHT].includes(colorScheme)) {
    throw new Error(`Requires "${COLOR_SCHEME_DARK}" or "${COLOR_SCHEME_LIGHT}" color scheme option.`);
  }

  const adjust = colorScheme === COLOR_SCHEME_DARK ? darken : lighten;

  return {
    background: adjust(completeVariant.default as string, 0.95),
    backgroundAlt: adjust(completeVariant.default as string, 0.85),
    backgroundHover: adjust(completeVariant.default as string, 0.9),
    variant: {
      danger: adjust(completeVariant.danger as string, 0.75),
      active: adjust(completeVariant.default as string, 0.75),
      info: adjust(completeVariant.info as string, 0.75),
      primary: adjust(completeVariant.primary as string, 0.75),
      success: adjust(completeVariant.success as string, 0.75),
      warning: adjust(completeVariant.warning as string, 0.75),
    },
    variantHover: {
      danger: completeVariant.lighter.danger,
      active: completeVariant.lighter.default,
      info: completeVariant.lighter.info,
      primary: completeVariant.lighter.primary,
      success: completeVariant.lighter.success,
      warning: completeVariant.lighter.warning,
    },
  };
};

export default generateTableColors;
