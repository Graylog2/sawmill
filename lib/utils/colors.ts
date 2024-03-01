import chroma from 'chroma-js';

const lighten = (color: string, ratio: number): string => chroma.mix(color, '#fff', ratio).hex();
const darken = (color: string, ratio: number): string => chroma.mix(color, '#000', ratio).hex();

export {
  darken,
  lighten,
};
