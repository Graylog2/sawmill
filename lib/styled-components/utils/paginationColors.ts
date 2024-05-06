import { MantineColors } from '../../mantine/types';
import { COLOR_WHITE } from '../../THEME_BASE';

const paginationColors = (colors: MantineColors) => ({
  active: {
    background: colors.info[5],
    border: colors.info[5],
    color: COLOR_WHITE,
  },
});

export default paginationColors;
