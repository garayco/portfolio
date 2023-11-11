import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { getWithBasePath } from "../utils/getWithBasePath";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "../components/Layout";

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
  console.log(getWithBasePath())
  return <RouterProvider router={router} />;
}
