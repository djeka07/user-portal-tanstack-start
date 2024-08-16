import { iconClass } from './theme.css';
import { css } from '~/app/models/helpers/class';
import { useTranslation } from 'react-i18next';
import { SizeKeys } from '~/app/styles/typography';
import { Icon } from '@djeka07/ui';

type ThemeProps = {
  theme: 'dark' | 'light';
  className?: string;
  toggleTheme: () => void;
  size?: SizeKeys;
};

const Theme = ({ theme, toggleTheme, className, size = 'large' }: ThemeProps) => {
  const { t } = useTranslation();
  return (
    <Icon
      title={t(`common:theme:${theme === 'dark' ? 'light' : 'dark'}`)}
      onClick={toggleTheme}
      className={css(iconClass, theme, className)}
      name="SunMoon"
      size={size}
    />
  );
};

export default Theme;
