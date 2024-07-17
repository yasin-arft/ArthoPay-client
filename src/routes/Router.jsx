import CreateAccount from "@/pages/createAccount/CreateAccount";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/create-account',
    element: <CreateAccount />
  }
]);

export default Router;