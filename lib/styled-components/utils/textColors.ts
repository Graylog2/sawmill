import { MantineColors } from '../../mantine/types';
import { opacify } from '../../utils';

const textColors = (isLightTheme: boolean, colors: MantineColors, primaryTextColor: string) => ({
  primary: primaryTextColor,
  secondary: isLightTheme ? opacify(primaryTextColor, 0.6) : opacify(primaryTextColor, 0.6),
  disabled: isLightTheme ? opacify(primaryTextColor, 0.4) : opacify(primaryTextColor, 0.5),
  severity: {
    success: isLightTheme ? colors.success[6] : colors.success[5],
    danger: isLightTheme ? colors.success[5] : colors.success[4],
  },
});

export default textColors;
