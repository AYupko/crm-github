import { HomePage } from '@/pages/home/HomePage';
import { AuthPage } from '@/pages/auth/AuthPage';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { AuthLayout, MainLayout } from '@/widgets';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <AuthPage mode="signin" />,
      },
      {
        path: 'signup',
        element: <AuthPage mode="signup" />,
      },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;