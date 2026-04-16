import chroma, { Color } from 'chroma-js';

const flattenColorStack = (colors: Array<Color>) => {
  if (colors.length === 0) {
    throw new Error('flattenColorStack requires at least one color.');
  }

  return colors
    .reduce((acc, color) => {
      const current = chroma(color);
      const alpha = current.alpha();

      return chroma.mix(
        acc,
        current.alpha(1),
        alpha,
        'rgb',
      );
    })
    .hex();
};

export default flattenColorStack;
