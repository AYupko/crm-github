import styles from './label.module.css';

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export const Label = ({ className, ...props }: LabelProps) => {
  return <label className={`${styles.label} ${className}`} {...props} />;
};