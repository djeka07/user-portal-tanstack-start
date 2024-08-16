import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

export const link = recipe({
  base: {
    cursor: 'pointer',
    textDecoration: 'auto',
    display: 'flex',
  },
  variants: {
    color: {
      grey100: { color: 'var(--100-grey-color)' },
      grey200: { color: 'var(--200-grey-color)' },
      grey300: { color: 'var(--300-grey-color)' },
      grey400: { color: 'var(--400-grey-color)' },
      grey500: { color: 'var(--500-grey-color)' },
      grey600: { color: 'var(--600-grey-color)' },
      grey700: { color: 'var(--700-grey-color)' },
      grey800: { color: 'var(--800-grey-color)' },
      grey900: { color: 'var(--900-grey-color)' },
      'success-light': { color: 'var(--light-success-color)' },
      success: { color: 'var(--main-success-color)' },
      'success-dark': { color: 'var(--dark-success-color)' },
      menu: { color: '#afafaf' },
      'heading-light': { color: 'var(--light-heading-color)' },
      heading: { color: 'var(--heading-color)' },
      'heading-dark': { color: 'var(--dark-heading-color)' },
      'error-light': { color: 'var(--light-error-color)' },
      error: { color: 'var(--main-error-color)' },
      'error-dark': { color: 'var(--dark-error-color)' },
      'link-light': { color: 'var(--light-link-color)' },
      link: { color: 'var(--main-link-color)' },
      'link-dark': { color: 'var(--main-link-color)' },
      'text-light': { color: 'var(--light-text-color)' },
      text: { color: 'var(--main-text-color)' },
      'text-dark': { color: 'var(--dark-text-color)' },
      inherit: { color: 'inherit' },
    },
    size: {
      xsmall: { fontSize: 'var(--xsmall-font-size)' },
      small: { fontSize: 'var(--small-font-size)' },
      normal: { fontSize: 'var(--normal-font-size)' },
      medium: { fontSize: 'var(--medium-font-size)' },
      large: { fontSize: 'var(--large-font-size)' },
      xlarge: { fontSize: 'var(--xlarge-font-size)' },
      xxlarge: { fontSize: 'var(--xxlarge-font-size)' },
      xxxlarge: { fontSize: 'var(--xxxlarge-font-size)' },
    },
  },
});

export type LinkVariants = RecipeVariants<typeof link>;
