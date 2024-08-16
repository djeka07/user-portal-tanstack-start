import { Icon } from '../../icons';
import { icon, root } from './error.css';
import AlertOctagonSvg from '~/app/components/icons/svgs/alert-octagon.svg';

type ErrorProps = {
  message: string;
};

const Error = (props: ErrorProps) => (
  <div className={root}>
    <Icon name="AlertCircleOctagon" className={icon} />
    {props.message}
  </div>
);

export default Error;
