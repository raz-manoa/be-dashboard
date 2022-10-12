import { Suspense } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { IRoute } from "../Interfaces/Routes";

export const mapRoutes = (routes: IRoute[]): RouteObject[] => [
  ...routes.map<RouteObject>(
    ({ path, index, component: C, skeleton: S, children }) => ({
      index,
      path,
      element: (
        <Suspense fallback={S ? <S /> : <>...</>}>
          <C />
        </Suspense>
      ),
      children:
        children && children.length > 0
          ? children.map<RouteObject>(
              ({ index, path, component: C, skeleton: S }) => ({
                index,
                path,
                element: (
                  <Suspense fallback={S ? <S /> : <>...</>}>
                    <C />
                  </Suspense>
                ),
              })
            )
          : [],
    })
  ),
  {
    path: "",
    element: (
      <Navigate to={routes[0] && routes[0].path ? `${routes[0].path}` : ""} />
    ),
  },
];
