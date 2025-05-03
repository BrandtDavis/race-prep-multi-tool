import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import PaceConverterPage from "./pages/PaceConverterPage.tsx";
import CreateActivityPage from "./pages/CreateActivityPage.tsx";
import ActivityListPage from "./pages/ActivityListPage.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import DashboardPage from "./pages/DashboardPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import ErrorPage from "./pages/ErrorPage.tsx"

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/activities",
        element: <ActivityListPage />,
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
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
