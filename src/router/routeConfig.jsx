import Home from "../pages/Home";
import About from "../pages/About";
import Work from "../pages/Work";
import Contacts from "../pages/Contacts";
import NotFound from "../pages/Notfound";

export const AppRoutes = {
  HOME: "home",
  ABOUT: "about",
  WORK: "work",
  CONTACTS: "contacts",
  NOT_FOUND: "not_found",
};

export const RoutePath = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.WORK]: "/work",
  [AppRoutes.CONTACTS]: "/contacts",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig = [
  {
    path: RoutePath.home,
    element: <Home />,
  },
  {
    path: RoutePath.about,
    element: <About />,
  },
  {
    path: RoutePath.work,
    element: <Work />,
  },
  {
    path: RoutePath.contacts,
    element: <Contacts />,
  },
  {
    path: RoutePath.not_found,
    element: <NotFound />,
  },
];
