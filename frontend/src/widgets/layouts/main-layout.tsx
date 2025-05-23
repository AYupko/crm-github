import { useAuthQuery } from "@/shared/api";
import { Navigate, Outlet } from "react-router";

export const MainLayout = () => {
  const { data: user } = useAuthQuery();

  if (!user) return <Navigate to="/auth" replace />;

  return (
    <>
      {/* <Header /> */}
      <Outlet />
    </>
  );
};
