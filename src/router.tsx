import Home from "pages/Home/home";
import Login from "pages/Login/login";
import Profiles from "pages/Profiles/profiles";
import CreateProfile from "pages/Create_Profiles";
import SingUp from "pages/SingUp/singup";
import { useRoutes } from "react-router-dom";
import { RoutesPath } from "types/routes";
import EditProfile from "pages/Edit_profile/EditProfile";
import Homepage from "pages/Homepage/homepage";
import CrudGamesGenrer from "pages/Add_Game&Genre";
import GamesList from "pages/ListGames/Games";
import LibraryAllGames from "pages/LibraryGames";
import CrudGenrer from "pages/Create&updateGenre/index";
import GameDefinitions from "pages/GameDefinitions";
import EditGameId from "pages/Edit_Game";
import UserConfigs from "pages/UserConfigs";

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
      element: <Profiles />,
    },
    {
      path: RoutesPath.CREATE_PROFILES,
      element: <CreateProfile />,
    },
    {
      path: RoutesPath.EDIT_PROFILE,
      element: <EditProfile />,
    },
    {
      path: RoutesPath.HOMEPAGE,
      element: <Homepage />,
    },
    {
      path: RoutesPath.GAMES_LIST,
      element: <GamesList />,
    },
    {
      path: RoutesPath.LIBRARY_GAMES,
      element: <LibraryAllGames />,
    },
    {
      path: RoutesPath.CREATE_GAMES,
      element: <CrudGamesGenrer />,
    },
    {
      path: RoutesPath.CREATE_GENRES,
      element: <CrudGenrer />,
    },
    {
      path: RoutesPath.GAME_DEFINITIONS,
      element: <GameDefinitions />,
    },
    {
      path: RoutesPath.EDIT_GAME,
      element: <EditGameId />,
    },
    {
      path: RoutesPath.USER_CONFIGS,
      element: <UserConfigs />,
    },
  ]);
};

export default Router;
