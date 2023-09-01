# Sawmill-ux

Graylog common design system.

## Using Sawmill

### Install the package

```bash
$ yarn add @graylog/sawmill
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

## Making changes
The foundation of the styled-component and mantine sawmill is the `GRAYLOG_THEME`.
When you make a change to this core theme you need to run `yarn generate-themes` to generate the theme base for each sawmill.

## Building the library
The build process needs two commands:

```shell
$ yarn tsc # Generate Typescript definitions, needed to use the library from other Typescript projects.
$ yarn build # Compile source with Babel and generate `dist` files.
``` 
