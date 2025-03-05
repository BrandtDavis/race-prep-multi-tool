import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import PaceConverterPage from "./pages/PaceConverterPage.tsx";
import CreateActivityPage from "./pages/CreateActivityPage.tsx";
import Header from "./components/Header.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import DashboardPage from "./pages/DashboardPage.tsx";

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
        element: <DashboardPage />,
      },
      {
        path: "/create-activity",
        element: <CreateActivityPage />,
      },
      {
        path: "/pace-converter",
        element: <PaceConverterPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
