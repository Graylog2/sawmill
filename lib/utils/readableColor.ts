import chroma from 'chroma-js';

const LUMINANCE_RATIO = 0.46;

const readableColor = (lightTextColor: string, darkTextColor: string) => (hex: string): string => {
  /**
   * Returns either the light or dark text color for the best contrast, depending on the luminosity of the given color. Follows [W3C specs for readability](https://www.w3.org/TR/WCAG20-TECHS/G18.html).
   *
   * @param {string} lightTextColor - the primary light text color of the currently selected theme
   * @param {string} darkTextColor - the primary dark text color of the currently selected theme
   * @param {string} color - any string that represents a color (ex: "#f00" or "rgb(255, 0, 0)")
   */

  if (hex === 'transparent') {
    return hex;
  }

  return chroma(hex).luminance() < LUMINANCE_RATIO ? lightTextColor : darkTextColor;
};

export default readableColor;
