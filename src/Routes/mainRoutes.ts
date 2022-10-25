import React from "react";
import { IRoute } from "../Interfaces/Routes";

const Home = React.lazy(() => import("../Pages/Home/Home"));
const NotFoundPage = React.lazy(
  () => import("../Pages/NotFoundPage/NotFoundPage")
);
const Login = React.lazy(() => import("../Pages/LoginPage/LoginPage"));
const ForgotPassword = React.lazy(
  () => import("../Pages/ForgotPasswordPage/ForgotPasswordPage")
);
const SecurityConfimation = React.lazy(
  () => import("../Pages/SecurityConfimationPage/SecurityConfimationPage")
);

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
    path: `forgot-password`,
    name: "Forgot-password",
    component: ForgotPassword,
  },
  {
    index: true,
    path: `confirmation`,
    name: "Security-confirmation",
    component: SecurityConfimation,
  },
  {
    index: true,
    path: `*`,
    name: "NotFoundPage",
    component: NotFoundPage,
  },
];

export default mainRoutes;
