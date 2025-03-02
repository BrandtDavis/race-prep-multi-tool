import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import PaceConverterPage from "./pages/paceConverterPage.tsx";
import CreateActivityPage from "./pages/createActivityPage.tsx";

const Layout = () => {
  return (
    <div>
      <span>This be header</span>
      <Outlet />
      <span>This be footer</span>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/pace-converter",
        element: <PaceConverterPage />,
      },
      {
        path: "/create-activity",
        element: <CreateActivityPage />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
