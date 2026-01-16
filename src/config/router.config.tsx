import { RouterProvider, createBrowserRouter } from "react-router";

import HomePage from "../pages/home/home.page";
import NotFoundComponent from "../component/error/not.found.component";
import Register from "../pages/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotFoundComponent />,
  },
]);

const RouterConfigProvider = () => {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
};

export default RouterConfigProvider;
