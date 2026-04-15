import chroma, { Color } from 'chroma-js';

const flattenOnBackground = (fg: string | Color, bg: string | Color) => {
  const foreground = chroma(fg);

  return chroma.mix(bg, foreground.alpha(1), foreground.alpha(), 'rgb').hex();
};

export default flattenOnBackground;
