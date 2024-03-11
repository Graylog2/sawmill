import { MantineColors } from '../../mantine/types';

const paginationColors = (colors: MantineColors) => ({
  active: {
    background: colors.info[5],
    border: colors.info[5],
    color: '#ffffff',
  },
});

export default paginationColors;
