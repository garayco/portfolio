import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { getWithBasePath } from "../utils/getWithBasePath";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "../Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: getWithBasePath(),
        element: <Home />,
      },
      {
        path: getWithBasePath("contact"),
        element: <Contact />,
      },
    ],
  },
]);

export function RouterConfiguration() {
  return <RouterProvider router={router} />;
}
