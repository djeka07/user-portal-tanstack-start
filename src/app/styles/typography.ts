export type Size = {
  xxxsmall: string;
  xxsmall: string;
  xsmall: string;
  small: string;
  normal: string;
  medium: string;
  large: string;
  xlarge: string;
  xxlarge: string;
  xxxlarge: string;
};

export type Family = { heading: string; body: string };
export type FamilyKeys = keyof Family;

export type Weight = {
  light: string;
  regular: string;
  bold: string;
};

export type WeightKeys = keyof Weight;

export type SizeKeys = keyof Size;

export type Typography = {
  family: Family;
  weight: Weight;
  size: Size;
};

export default {
  family: {
    body: 'Campton, Helvetica, sans-serif;',
    heading: 'Campton, Helvetica, sans-serif;',
  },
  weight: {
    light: '100',
    regular: '400',
    bold: '700',
  },
  size: {
    xxxsmall: '0.5rem',
    xxsmall: '0.625rem',
    xsmall: '0.75rem',
    small: '0.875rem',
    normal: '1rem',
    medium: '1.125rem',
    large: '1.25rem',
    xlarge: '1.5rem',
    xxlarge: '1.75rem',
    xxxlarge: '2.rem',
  },
} satisfies Typography;
