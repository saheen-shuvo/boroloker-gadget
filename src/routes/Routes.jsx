import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/mainLayout/MainLayout";
import Homepage from "../components/homepage/Homepage";
import Details from "../components/details/Details";
import Dashboard from "../components/dashboard/Dashboard";
import Statistics from "../components/statistics/Statistics";
import Cart from "../components/cart/Cart";
import Wishlist from "../components/wishlist/Wishlist";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/details/:product_id",
        element: <Details></Details>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            index: true, // This will make Cart the default component for /dashboard
            element: <Cart></Cart>,
          },
          {
            path: "cart",
            element: <Cart></Cart>,
          },
          {
            path: "wishlist",
            element: <Wishlist></Wishlist>,
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
    ],
  },
]);

export default routes;
