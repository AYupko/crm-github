import * as React from "react";
import styles from "./form.module.css";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

export const Form = ({ children, className, ...props }: FormProps) => {
  return (
    <form className={`${styles.form} ${className ?? ""}`} {...props}>
      {children}
    </form>
  );
};

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return <span className={styles.error}>{message}</span>;
};
