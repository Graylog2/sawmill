import chroma from 'chroma-js';

const readableColor = (defaultTextColor: string, alternativeTextColor: string) => (
  hex: string,
  darkColor: string = defaultTextColor,
  lightColor: string = alternativeTextColor,
): string => {
  /**
   * Returns `defaultTextColor` or `alternativeTextColor` (or optional light and dark return colors) for best contrast depending on the luminosity of the given color. Follows [W3C specs for readability](https://www.w3.org/TR/WCAG20-TECHS/G18.html).
   *
   * @param {string} color - any string that represents a color (ex: "#f00" or "rgb(255, 0, 0)")
   * @param {string} darkColor - defaults to theme's darkest gray
   * @param {string} lightColor - defaults to theme's lightest gray
   */

  if (hex === 'transparent') {
    return hex;
  }

  const luminanceRatio = 0.179;

  return chroma(hex).luminance() < luminanceRatio ? lightColor : darkColor;
};

export default readableColor;
