import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Booking from "../Pages/Booking";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("../places.json"),
        hydrateFallbackElement: <h1>Loading...</h1>,
      },
      {
        path: "/booking/:id",
        Component: Booking,
        loader: () => fetch("../places.json"),
        hydrateFallbackElement: <h1>Loading...</h1>,
      },
    ],
  },

  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "auth/register",
        Component: Register,
      },
    ],
  },
]);

export { router };
