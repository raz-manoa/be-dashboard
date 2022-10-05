import React from "react";
import { IRoute } from "../Interfaces/Routes";

const Home = React.lazy(() => import("../Pages/Home/Home"));
const NotFoundPage = React.lazy(
  () => import("../Pages/NotFoundPage/NotFoundPage")
);
const Login = React.lazy(() => import("../Pages/LoginPage/LoginPage"));

const mainRoutes: IRoute[] = [
  {
    index: true,
    path: ``,
    name: "Home",
    component: Home,
  },
  {
    index: true,
    path: `login`,
    name: "Login",
    component: Login,
  },

  {
    index: true,
    path: `*`,
    name: "NotFoundPage",
    component: NotFoundPage,
  },
];

export default mainRoutes;
