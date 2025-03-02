import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import PaceConverterPage from "./pages/paceConverterPage.tsx";
import CreateActivityPage from "./pages/createActivityPage.tsx";
import Header from "./components/Header.tsx";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <span>This will be a footer</span>
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
