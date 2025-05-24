import { createBrowserRouter, RouterProvider } from "react-router";
import { AuthLayout, MainLayout } from "@/widgets";
import { SignInPage, SignUpPage } from "@/pages/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <div>home page</div>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <SignInPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
