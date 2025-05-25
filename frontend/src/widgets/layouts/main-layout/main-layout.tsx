import { useAuthQuery } from "@/shared/api";
import { Navigate, Outlet } from "react-router";
import styles from "./main-layout.module.css";
import { Loader } from "@/shared/ui/loader";

export const MainLayout = () => {
  const { data, isLoading } = useAuthQuery();

  if (isLoading) return <Loader />;

  if (!data) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <main className={styles.container}>
      <Outlet />
    </main>
  );
};
