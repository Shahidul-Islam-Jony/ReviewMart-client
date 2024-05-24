import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Products from "../pages/Products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"login",
        element:<Login></Login>
      },
      {
        path:"registration",
        element:<Registration></Registration>
      },
      {
        path:"products",
        element:<Products></Products>
      }
    ],
  },
]);

export default router;
