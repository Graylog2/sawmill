# Sawmill-ux

Graylog common design system.

## Using Sawmill

### Install the package

Right now there is no published version of the package. To install it, add it as a git submodule for your project and then add it as development dependency to your `package.json` file.

```bash
$ git submodule add <https://github.com/Graylog2/sawmill-ux.git>
$ yarn add --dev file:sawmill-ux
```

### Typescript configuration

Once the package is installed, you may need to configure some Typescript definitions to make everything work. First set up the theme typings in `@types/sawmill-ux/index.d.ts`:

```tsx
declare module '@graylog/sawmill' {
  import Sawmill from '@graylog/sawmill';
  import type {
    TColors,
    TFonts,
    TThemeMode,
    TBreakpoints,
    TUtils,
    TSpacings,
    TChangeMode,
  } from '@graylog/sawmill/dist/types';

  export interface DefaultTheme {
    breakpoints: TBreakpoints,
    colors: TColors,
    fonts: TFonts,
    utils: TUtils,
    mode: TThemeMode,
    spacings: TSpacings,
    changeMode: TChangeMode,
    components: { [component: string]: any }
  }

  export * from '@graylog/sawmill/dist/types';
  export default Sawmill;
}
```

Then use it as styled-component `DefaultTheme`, by adding this configuration to `@types/styled-components/index.d.ts`:

```tsx
import 'styled-components';
import type { DefaultTheme as GraylogTheme } from '@graylog/sawmill';

declare module 'styled-components' {
  export interface DefaultTheme extends GraylogTheme {}
}
```

### Configure Mantine theme

In order to use Sawmill’s theming within Mantine, you need to override Mantine’s default with our own. Here is an example of how to do that at the time of writing:

```tsx
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Global, MantineProvider, MantineThemeOverride } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

type Props = {
  children: React.ReactElement,
};

const ThemeWrapper = ({ children }: Props) => {
  const theme = useContext(ThemeContext);

  const mantineTheme: MantineThemeOverride = {
    colorScheme: theme.mode === 'teint' ? 'light' : 'dark',
    fontFamily: theme.fonts.family.body,
    fontFamilyMonospace: theme.fonts.family.monospace,
    fontSizes: {
      xs: theme.fonts.size.tiny.value,
      sm: theme.fonts.size.small.value,
      md: theme.fonts.size.body.value,
      lg: theme.fonts.size.large.value,
      xl: theme.fonts.size.huge.value,
    },
    headings: {
      fontFamily: theme.fonts.family.body,
      sizes: {
        h1: {
          fontSize: theme.fonts.size.h1.rem,
        },
        h2: {
          fontSize: theme.fonts.size.h2.rem,
        },
        h3: {
          fontSize: theme.fonts.size.h3.rem,
        },
        h4: {
          fontSize: theme.fonts.size.h4.rem,
        },
        h5: {
          fontSize: theme.fonts.size.h5.rem,
        },
        h6: {
          fontSize: theme.fonts.size.h6.rem,
        },
      },
    },
    spacing: {
      xs: theme.spacings.px.xs,
      sm: theme.spacings.px.sm,
      md: theme.spacings.px.md,
      lg: theme.spacings.px.lg,
      xl: theme.spacings.px.xl,
    },

  };

  const globalStyles = () => ({
    body: {
      backgroundColor: theme.colors.global.background,
      color: theme.colors.global.textDefault,
    },
  });

  return (
    <MantineProvider theme={mantineTheme}>
      <NotificationsProvider>
        <Global styles={globalStyles} />
        {children}
      </NotificationsProvider>
    </MantineProvider>
  );
};

export default ThemeWrapper;
```

### Configure buttons

```tsx
const StyledButton = styled(MantineButton)(({ theme }: StyledMantineButtonProps) => css`
  ${theme.components.button}
`);
```

### Configure fonts

Fonts are configured through `MantineProvider`, so you usually don’t need to do anything additional.

Sawmill includes two font families, one for the document body and one monospace, and also provides several sizing values in different formats (numeric, `pixel`, and `em`).

## Building the library
The build process needs two commands:

```shell
$ yarn tsc # Generate Typescript definitions, needed to use the library from other Typescript projects.
$ yarn build # Compile source with Babel and generate `dist` files.
``` 
