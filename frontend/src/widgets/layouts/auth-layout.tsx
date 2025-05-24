import { Outlet } from "react-router";

export const AuthLayout = () => {
  return (
    <main className="auth-wrapper">
      <Outlet />
    </main>
  );
};
