import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/mainLayout/MainLayout";
import Homepage from "../components/homepage/Homepage";
import Details from "../components/details/Details";
import Dashboard from "../components/dashboard/Dashboard";

const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: '/',
          element: <Homepage></Homepage>
        },
        {
          path: '/details/:product_id',
          element: <Details></Details>
        },
        {
          path: '/dashboard',
          element: <Dashboard></Dashboard>
        }
    ]
    }
  ])

  export default routes;