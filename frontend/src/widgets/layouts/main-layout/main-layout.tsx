import { useAuthQuery } from "@/shared/api";
import { Navigate, Outlet } from "react-router";
import styles from "./main-layout.module.css";

export const MainLayout = () => {
  const { data, isLoading } = useAuthQuery();

  if (isLoading) return null;

  if (!data) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <main className={styles.container}>
      <Outlet />
    </main>
  );
};
