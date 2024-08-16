import { root, RootVariants, rotate, SpinnerVariants } from './spinner.css';

type SpinnerProps = SpinnerVariants & RootVariants;

const Spinner = (props: SpinnerProps) => (
  <span className={root({ size: props?.size, margin: props?.margin })}>
    <span className={rotate({ color: props?.color, size: props?.size })} />
    <span className={rotate({ color: props?.color, size: props?.size })} />
    <span className={rotate({ color: props?.color, size: props?.size })} />
    <span className={rotate({ color: props?.color, size: props?.size })} />
  </span>
);

export default Spinner;
