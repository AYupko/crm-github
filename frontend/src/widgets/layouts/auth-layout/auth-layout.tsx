import { Outlet } from "react-router";
import styles from "./auth-layout.module.css";

export const AuthLayout = () => {
  return (
    <main className={styles.authLayout}>
      <div className={styles.container}>
        <Outlet />
      </div>
    </main>
  );
};
