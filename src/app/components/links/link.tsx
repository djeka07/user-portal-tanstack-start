import { Link as RouterLink } from '@tanstack/react-router';
import { MouseEventHandler, ReactNode } from 'react';
import { link, LinkVariants } from './link.css';
import { css } from '@djeka07/utils';

type LinkProps = LinkVariants & {
  href: string;
  className?: string;
  title?: string;
  children: ReactNode;
  onClick?: MouseEventHandler<'a'> | undefined;
};

const Link = ({ children, href, className, color = 'link', onClick, size = 'normal', title }: LinkProps) => (
  <RouterLink className={css(link({ color, size }), className)} onClick={onClick} title={title} to={href}>
    {children}
  </RouterLink>
);

export default Link;
