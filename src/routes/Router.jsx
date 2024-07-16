import CreateAccount from "@/pages/createAccount/CreateAccount";
import Login from "@/pages/login/Login";
import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/create-account',
    element: <CreateAccount />
  }
]);

export default Router;