import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../pages/HomePage";
import Login from "../pages/Authencations/Login";
import Register from "../pages/Authencations/Register";
import NotFound from "../components/NotFound";
import ContentPage from "../pages/ContentPage/ContentPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:category",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/404",
        element: <NotFound />,
      },
      {
        path: "/:category/:subcategory",
        element: <ContentPage />,
      },
    ],
  },
]);
export default routes;
