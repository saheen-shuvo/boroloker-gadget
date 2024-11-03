import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../components/mainLayout/MainLayout";

const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
    }
  ])

  export default routes;