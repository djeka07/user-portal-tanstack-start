import { aside, innerMain, main, MainVariants, root } from './aside-layout.css';

type AsideLayoutProps = MainVariants & {
  asideRender: JSX.Element | JSX.Element[];
  children: JSX.Element;
};

const AsideLayout = ({ asideRender, children, margin }: AsideLayoutProps) => {
  return (
    <div className={root}>
      <aside className={aside}>{asideRender}</aside>
      <div className={main}>
        <div className={innerMain({ margin })}>{children}</div>
      </div>
    </div>
  );
};

export default AsideLayout;
