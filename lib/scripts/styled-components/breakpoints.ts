import { TBreakpoint } from '../../styled-components/types';
import { ThemeBase } from '../../types';

const breakpoints = (baseBreakpoints: ThemeBase['breakpoints']) => ({
  min: Object.fromEntries(Object.entries(baseBreakpoints).map(([key, value]) => [key, `${value}px`])) as TBreakpoint,
  max: Object.fromEntries(Object.entries(baseBreakpoints).map(([key, value]) => [key, `${value - 1}px`])) as TBreakpoint,
  px: {
    max: Object.fromEntries(Object.entries(baseBreakpoints).map(([key, value]) => [key, value - 1])) as Record<keyof TBreakpoint, number>,
    min: baseBreakpoints,
  },
});

export default breakpoints;
