import { selectIsAuthorized, userStore } from "@/entities/user";
import { useAuthQuery } from "@/shared/api";
import { Navigate, Outlet } from "react-router";

export const MainLayout = () => {
  const isAuthorized = userStore(selectIsAuthorized);

  const { data, isLoading } = useAuthQuery(!isAuthorized);

  if (!data && !isAuthorized && !isLoading) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <main>
      {/* <Header /> */}
      <Outlet />
    </main>
  );
};
