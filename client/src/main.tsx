import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import "./index.css";
import ActivityListPage from "./pages/ActivityListPage.tsx";
import CreateActivityPage from "./pages/CreateActivityPage.tsx";
import DashboardPage from "./pages/DashboardPage.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import PaceConverterPage from "./pages/PaceConverterPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";

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
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
