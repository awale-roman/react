import { RouterProvider, createBrowserRouter } from "react-router";

import LoginRightPanel from "../component/auth/login.right.panel";
import CommingSoon from "../component/comming-soon/comming-soon.component";
import NotFoundComponent from "../component/error/not.found.component";
import ForgetPassword from "../pages/forget-password";
import AdminLayout from "../pages/layout/admin-layout";
import AuthLayout from "../pages/layout/auth.layout";
import Register from "../pages/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        element: <LoginRightPanel />,
        index: true,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forget-password",
        Component: ForgetPassword,
      },
    ],
  },

  {
    path: "*",
    element: <NotFoundComponent />,
  },
  {
    path: "/admin-layout",
    element: <AdminLayout />,
    // children: [
    //   {
    //     index: true,
    //     element: <AdminLayout />,
    //   },
    //   {
    //     path: "/admin-dashboard",

    //     // element: <AdminDashboard />,
    //   },
    //   {
    //     path: "/admin-banner",

    //     // element: <AdminLayout />,
    //   },
    //   {
    //     path: "/admin-brands",

    //     // element: <AdminLayout />,
    //   },
    // ],
  },
  {
    path: "/product/:slug",
    Component: CommingSoon,
  },
]);

const RouterConfigProvider = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default RouterConfigProvider;
