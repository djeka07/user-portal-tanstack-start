import createBorder, { Border } from './border';
import createBreakPoints, { BreakPointProps } from './breakpoint';
import createTypography, { Typography } from './typography';
import createPalette, { Palette } from './palette';

export type Theme = {
  typography: Typography;
  breakpoint: BreakPointProps;
  border: Border;
  palette: Palette;
};

export default (theme: 'dark' | 'light') =>
  ({
    typography: createTypography,
    breakpoint: createBreakPoints(),
    palette: createPalette(theme),
    border: createBorder,
  }) satisfies Theme;
