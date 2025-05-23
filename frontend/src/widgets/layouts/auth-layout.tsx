import { selectIsAuthorized, userStore } from "@/entities/user";
import { Navigate, Outlet } from "react-router";

export const AuthLayout = () => {
  const isAuthorized = userStore(selectIsAuthorized);

  if (isAuthorized) return <Navigate to="/" replace />;

  return (
    <div className="auth-wrapper">
      <Outlet />
    </div>
  );
};
