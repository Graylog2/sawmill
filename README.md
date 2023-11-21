# Sawmill

Graylog common design system. This package provides the mantine (SawmillMantine) and styled-components (SawmillSC) theme.

## Using Sawmill

### Install the package

```bash
$ yarn add @graylog/sawmill
```

### Typescript configuration

Once the package is installed, you need to adjust the styled-components type declaration `@types/styled-components/index.d.ts`, in case you need want to use the styled-components sawmill (SawmillSC):

```tsx
import 'styled-components';
import type { StyledComponentsTheme } from '@graylog/sawmill/styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends StyledComponentsTheme {}
}
```

### Setting up theme provider

Each sawmill provides a theme for the related theme provider:

```tsx
import SawmillMantine from '@graylog/sawmill/mantine';
import type { ColorScheme } from '@graylog/sawmill';

const AppThemeProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(DEFAULT_THEME_MODE);
  const mantineTheme = useMemo(
    () => SawmillMantine({ colorScheme }),
    [colorScheme],
  );
  
  return <MantineProvider theme={mantineTheme}>{children}</MantineProvider>
}
```

## Making changes
The foundation of the styled-component and mantine sawmill is the `THEME_BASE.ts` file.
When you make a change to this theme base you need to run `yarn generate-themes` to generate the theme for each sawmill.


## Building the library
To build the library you need to run:

```shell
$ yarn build # Compile source with tsc and generate `dist` files.
```

## Testing changes locally
When you want to test changes locally, you need to add the local repository temporary as a dependency for you project:
```shell
yarn add file:/path/to/this/project
```

