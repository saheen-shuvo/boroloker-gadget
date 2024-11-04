import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/mainLayout/MainLayout";
import Homepage from "../components/homepage/Homepage";

const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: '/',
          element: <Homepage></Homepage>
        }
    ]
    }
  ])

  export default routes;