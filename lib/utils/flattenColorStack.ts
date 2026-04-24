import chroma, { Color } from 'chroma-js';

const flattenColorStack = (colors: Array<string | Color>) => {
  const filteredColors = colors.filter((color) => color !== 'transparent').map((color) => chroma(color));

  if (filteredColors.length === 0) {
    throw new Error('flattenColorStack requires at least one color.');
  }

  return filteredColors
    .reduce((acc, color) => {
      const alpha = color.alpha();

      return chroma.mix(
        acc,
        color.alpha(1),
        alpha,
        'rgb',
      );
    })
    .hex();
};

export default flattenColorStack;
