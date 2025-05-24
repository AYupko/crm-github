import { clsx } from "clsx";
import styles from "./button.module.css";

type Variant = "primary" | "secondary" | "danger";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export const Button = ({
  className,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(styles.button, styles[variant], className)}
      {...props}
    />
  );
};
