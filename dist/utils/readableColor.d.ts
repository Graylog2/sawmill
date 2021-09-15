import type { TColors } from '../../types';
declare const readableColor: (colors: TColors) => (hex: string, darkColor?: string, lightColor?: string) => string;
export default readableColor;
