import Home from "pages/Home/home";
import Login from "pages/Login/login";
import Profiles from "pages/Profiles/profiles";
import SingUp from "pages/SingUp/singup";
import { useRoutes } from "react-router-dom";
import { RoutesPath } from "types/routes";

const Router = () => {
  return useRoutes([
    {
      path: RoutesPath.HOME,
      element: <Home />,
    },
    {
      path: RoutesPath.LOGIN,
      element: <Login />,
    },
    {
      path: RoutesPath.SINGUP,
      element: <SingUp />,
    },
    {
      path: RoutesPath.PROFILES,
      element: <Profiles />
    }
  ]);
};

export default Router;
