import chroma, { Color } from 'chroma-js';

const mixColor = (originalColor: string | Color, adjustColor: string | Color, ratio = 0.15) => chroma.mix(originalColor, adjustColor, ratio).hex();

export default mixColor;