import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/mainLayout/MainLayout";
import Homepage from "../components/homepage/Homepage";
import Details from "../components/details/Details";
import Dashboard from "../components/dashboard/Dashboard";
import Statistics from "../components/statistics/Statistics";
import Cart from "../components/cart/Cart";
import Wishlist from "../components/wishlist/Wishlist";
import Reviews from "../components/reviews/Reviews";
import ErrorPage from "../components/error/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
            index: true,
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
      {
        path: "/reviews",
        element: <Reviews></Reviews>
      }
    ],
  },
]);

export default routes;
