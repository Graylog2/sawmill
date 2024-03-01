import buildMantineTheme from './mantine/buildMantineTheme';
import buildStyledComponentsTheme from './styled-components/buildStyledComponentsTheme';
import writeThemeFile from './writeThemeFile';

const mantineTheme = buildMantineTheme();
writeThemeFile('./lib/mantine/generated/theme.json', mantineTheme);
const styledComponentsTheme = buildStyledComponentsTheme();
writeThemeFile('./lib/styled-components/generated/theme.json', styledComponentsTheme);
