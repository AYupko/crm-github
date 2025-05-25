import { createBrowserRouter, RouterProvider } from "react-router";
import { SignInPage, SignUpPage } from "@/pages/auth";
import { HomePage } from "@/pages/home";
import { AuthLayout, MainLayout } from "@/widgets/layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
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
