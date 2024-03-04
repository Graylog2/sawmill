import chroma from 'chroma-js';

function opacify(color: string, alpha: number): string {
  /**
   * Set the alpha of a color. Its range for the amount is between 0 and 1.
   *
   * @param {string} color - any string that represents a color (ex: "#f00" or "rgb(255, 0, 0)")
   * @param {number} amount - any positive number
   */

  if (color === 'transparent') {
    return color;
  }

  return chroma(color).alpha(alpha).css();
}

export default opacify;
