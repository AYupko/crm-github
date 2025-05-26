import { Outlet, useNavigate } from "react-router";
import styles from "./main-layout.module.css";
import { useEffect } from "react";
import { setNavigator } from "@/shared/lib";

export const MainLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setNavigator(navigate);
  }, [navigate]);

  return (
    <main className={styles.container}>
      <Outlet />
    </main>
  );
};
