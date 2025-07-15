import chroma from 'chroma-js';

import { ColorScheme } from '../types';
import { COLOR_SCHEME_LIGHT } from '../THEME_BASE';

const LUMINANCE_RATIO = 0.5;

const readableColor = (colorScheme: ColorScheme, textDefault: string, textAlt: string) => (hex: string): string => {
  /**
   * Returns `textDefault` or `textAlt` (or optional light and dark return colors) for best contrast depending on the luminosity of the given color. Follows [W3C specs for readability](https://www.w3.org/TR/WCAG20-TECHS/G18.html).
   *
   * @param {string} color - any string that represents a color (ex: "#f00" or "rgb(255, 0, 0)")
   * @param {string} darkColor - defaults to theme's darkest gray
   * @param {string} lightColor - defaults to theme's lightest gray
   */

  const isLightMode = colorScheme === COLOR_SCHEME_LIGHT;
  const darkColor = isLightMode ? textDefault : textAlt;
  const lightColor = isLightMode ? textAlt : textDefault;

  if (hex === 'transparent') {
    return hex;
  }

  return chroma(hex).luminance() < LUMINANCE_RATIO ? lightColor : darkColor;
};

export default readableColor;
