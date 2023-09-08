/*
 * Copyright (C) 2020 Graylog, Inc.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the Server Side Public License, version 1,
 * as published by MongoDB, Inc.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * Server Side Public License for more details.
 *
 * You should have received a copy of the Server Side Public License
 * along with this program. If not, see
 * <http://www.mongodb.com/licensing/server-side-public-license>.
 */

/* eslint-disable import/no-extraneous-dependencies */
declare module '@graylog/sawmill' {
  export * from '@graylog/sawmill/dist/index';

  export type {
    ColorScheme,
    ColorVariant,
    ThemeBaseColors,
  } from '@graylog/sawmill/dist/types';
}

declare module '@graylog/sawmill/styled-components' {
  import SawmillSC from '@graylog/sawmill/dist/styled-components/Sawmill';

  export type { StyledComponentsTheme } from '@graylog/sawmill/dist/styled-components/Sawmill';
  export { generateColors } from '@graylog/sawmill/dist/styled-components/Sawmill';
  export default SawmillSC;
}

declare module '@graylog/sawmill/mantine' {
  import SawmillMantine from '@graylog/sawmill/dist/mantine/Sawmill';

  export type { MantineTheme } from '@graylog/sawmill/dist/mantine/Sawmill';
  export default SawmillMantine;
}
