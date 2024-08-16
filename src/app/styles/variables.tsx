import borderCss from './border';
import fontCss from './typography';
import paletteCss from './palette';

export default (theme: 'dark' | 'light') => {
  const palette = paletteCss(theme);
  return (
    <style>
      {`
  :root {
    --white-common-color: ${palette.common.white};
    --black-common-color: ${palette.common.black};

    --light-primary-color: ${palette.primary.light};
    --main-primary-color: ${palette.primary.main};
    --dark-primary-color: ${palette.primary.dark};

    --light-background-color: ${palette.background.light};
    --main-background-color: ${palette.background.main};
    --dark-background-color: ${palette.background.dark};

    --main-box-shadow: ${palette.boxShadow.main};

    --100-grey-color: ${palette.grey[100]};
    --200-grey-color: ${palette.grey[200]};
    --300-grey-color: ${palette.grey[300]};
    --400-grey-color: ${palette.grey[400]};
    --500-grey-color: ${palette.grey[500]};
    --600-grey-color: ${palette.grey[600]};
    --700-grey-color: ${palette.grey[700]};
    --800-grey-color: ${palette.grey[800]};
    --900-grey-color: ${palette.grey[900]};

    --light-success-color: ${palette.success.light};
    --main-success-color: ${palette.success.main};
    --dark-success-color: ${palette.success.dark};

    --light-input-color: ${palette.input.light};
    --main-input-color: ${palette.input.main};
    --dark-input-color: ${palette.input.dark};

    --light-focus-color: ${palette.focus.light};
    --main-focus-color: ${palette.focus.main};
    --dark-focus-color: ${palette.focus.dark};

    --light-heading-color: ${palette.heading.light};
    --main-heading-color: ${palette.heading.main};
    --dark-heading-color: ${palette.heading.dark};

    --light-text-color: ${palette.text.light};
    --main-text-color: ${palette.text.main};
    --dark-text-color: ${palette.text.dark};

    --light-warning-color: ${palette.warning.light};
    --main-warning-color: ${palette.warning.main};
    --dark-warning-color: ${palette.warning.dark};

    --light-error-color: ${palette.error.light};
    --main-error-color: ${palette.error.main};
    --dark-error-color: ${palette.error.dark};

    --light-link-color: ${palette.link.light};
    --main-link-color: ${palette.link.main};
    --dark-link-color: ${palette.link.dark};

    --base-font-family: ${fontCss.family.body};
    --heading-font-family: ${fontCss.family.heading}

    --xxsmall-font-size: ${fontCss.size.xxsmall};
    --xsmall-font-size: ${fontCss.size.xsmall};
    --small-font-size:${fontCss.size.small};
    --normal-font-size: ${fontCss.size.normal};
    --medium-font-size: ${fontCss.size.medium};
    --large-font-size:${fontCss.size.large};
    --xlarge-font-size: ${fontCss.size.xlarge};
    --xxlarge-font-size: ${fontCss.size.xxlarge};
    --xxxlarge-font-size: ${fontCss.size.xxxlarge};

    --light-font-weight: ${fontCss.weight.light};
    --regular-font-weight: ${fontCss.weight.regular};
    --bold-font-weight: ${fontCss.weight.bold};

    --small-border-radius: ${borderCss.radius.small};
    --medium-border-radius:  ${borderCss.radius.medium};
    --large-border-radius:  ${borderCss.radius.large};
    --xlarge-border-radius:  ${borderCss.radius.xlarge};
    --xxlarge-border-radius:  ${borderCss.radius.xxlarge};
    --round-border-radius:  ${borderCss.radius.round};
  }

  html {
      background-color: var(--dark-background-color)
    }
  `}
    </style>
  );
};
