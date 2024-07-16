import Login from "@/pages/login/Login";
import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>
  }
]);

export default Router;