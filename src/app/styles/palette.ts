import { darken, desaturate, lighten, saturate } from 'polished';
import { compose } from '../models/helpers/functions';
export type ColorVariants = { light: string; main: string; dark: string };
export type ColorVariantsKeys = keyof ColorVariants;
type ColorMain = Pick<ColorVariants, 'main'>;

export type GreyKeys = keyof Grey;

export type Grey = {
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
};

export type Palette = {
  common: { white: string; black: string };
  success: ColorVariants;
  warning: ColorVariants;
  info: ColorVariants;
  error: ColorVariants;
  grey: Grey;
  primary: ColorVariants;
  secondary: ColorVariants;
  input: ColorVariants;
  focus: ColorVariants;
  heading: ColorVariants;
  text: ColorVariants;
  link: ColorVariants;
  background: ColorVariants;
  notification: ColorMain;
  boxShadow: ColorMain;
};

export type PaletteKeys = keyof Palette;

const base = {
  common: {
    white: '#ffffff',
    black: '#000000',
  },
  success: {
    light: '#d4edda',
    main: '#28a745',
    dark: '#155724',
  },
  warning: {
    light: lighten(0.1, '#f0ad4e'),
    main: '#f0ad4e',
    dark: darken(0.4, '#f0ad4e'),
  },
  info: {
    light: '#d1ecf1',
    main: '#72DBCF',
    dark: '#0c5460',
  },
  error: {
    light: '#f8d7da',
    main: '#dc3545',
    dark: '#721c24',
  },
  grey: {
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#515151',
    800: '#424242',
    900: '#212121',
  },
};

const toneLighten = compose(lighten(0.1), desaturate(0.1));
const toneDarken = compose(darken(0.1), saturate(0.1));

const createDarkPalette = (): Palette => ({
  ...base,
  primary: {
    light: lighten(0.2, '#3D71DC'),
    main: '#3D71DC',
    dark: darken(0.1, '#3D71DC'),
  },
  secondary: {
    light: lighten(0.1, '#491b6e'),
    main: '#491b6e',
    dark: darken(0.1, '#491b6e'),
  },
  link: {
    light: lighten(0.1, '#cedff6'),
    main: '#cedff6',
    dark: toneDarken('#cedff6'),
  },
  input: {
    light: lighten(0.1, '#ffffff'),
    main: '#ffffff',
    dark: darken(0.1, '#ffffff'),
  },
  focus: {
    light: lighten(0.1, '#93b0ec'),
    main: '#93b0ec',
    dark: darken(0.1, '#93b0ec'),
  },
  heading: {
    light: toneLighten('#bdc9e2'),
    main: '#bdc9e2',
    dark: toneDarken('#bdc9e2'),
  },
  text: {
    light: '#ffffff',
    main: '#ffffff',
    dark: darken(0.1, '#ffffff'),
  },
  background: {
    light: lighten(0.1, '#354052'),
    main: '#354052',
    dark: darken(0.1, '#354052'),
  },
  notification: { main: '#4A699B' },
  boxShadow: {
    main: 'rgb(0 0 0 / 25%) 0px 1px 5px -1px',
  },
});

const createLightPalette = (): Palette => ({
  ...base,
  primary: {
    light: '#901ded',
    main: '#491b6e',
    dark: '#3b105e',
  },
  secondary: {
    light: lighten(0.1, '#491b6e'),
    main: '#491b6e',
    dark: darken(0.1, '#491b6e'),
  },
  input: {
    light: lighten(0.1, '#616161'),
    main: '#616161',
    dark: darken(0.1, '#616161'),
  },
  focus: {
    light: lighten(0.1, '#491b6e'),
    main: '#491b6e',
    dark: darken(0.1, '#491b6e'),
  },
  heading: {
    light: base.grey[500],
    main: base.grey[700],
    dark: base.grey[900],
  },
  text: {
    light: lighten(0.1, '#616161'),
    main: '#616161',
    dark: darken(0.1, '#616161'),
  },
  link: {
    light: '#ffffff',
    main: '#1e3c68',
    dark: '#1e3c68',
  },
  background: {
    light: lighten(0.1, '#e1e0e3'),
    main: '#e1e0e3',
    dark: darken(0.1, '#e1e0e3'),
  },
  notification: { main: '#4A699B' },
  boxShadow: {
    main: 'rgb(0 0 0 / 25%) 0px 1px 5px -1px',
  },
});

export default (theme: 'dark' | 'light'): Palette => (theme === 'dark' ? createDarkPalette() : createLightPalette());
