import Spin from "@/Components/General/Spin/Spin";
import { Suspense } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { IRoute } from "../Interfaces/Routes";

export const mapRoutes = (routes: IRoute[]): RouteObject[] => [
  ...routes.map<RouteObject>(
    ({ path, index, component: C, skeleton: S, children }) => ({
      index,
      path,
      element: (
        <Suspense fallback={S ? <S /> : <Spin variant="fill" />}>
          <C />
        </Suspense>
      ),
      children: children && children.length > 0 ? mapRoutes(children) : [],
    })
  ),
  {
    path: "",
    element: (
      <Navigate to={routes[0] && routes[0].path ? `${routes[0].path}` : ""} />
    ),
  },
];
