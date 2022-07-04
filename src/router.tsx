import Home from "pages/Home/home";
import Login from "pages/Login/login";
import Profiles from "pages/Profiles/profiles";
import CreateProfile from "pages/Create_Profiles";
import SingUp from "pages/SingUp/singup";
import { useRoutes } from "react-router-dom";
import { RoutesPath } from "types/routes";
import EditProfile from "pages/Edit_profile/EditProfile";
import Homepage from "pages/Homepage/homepage";

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
    },
    {
      path: RoutesPath.CREATE_PROFILES,
      element: <CreateProfile />
    },
    {
      path: RoutesPath.EDIT_PROFILE,
      element: <EditProfile />,
    },
    {
      path: RoutesPath.HOMEPAGE,
      element: <Homepage />
    }
  ]);
};

export default Router;
