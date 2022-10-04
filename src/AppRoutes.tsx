import { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
  useRoutes,
} from "react-router-dom";
import { appRoutes, mainRoutes } from "./Routes";
import { mapRoutes } from "./Utils/mapRoutes";

const AppLayout = lazy(() => import("./Layouts/AppLayout/AppLayout"));
const DefaultLayout = lazy(
  () => import("./Layouts/DefaultLayout/DefaultLayout")
);

function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<>loading layout ...</>}>
          <DefaultLayout />
        </Suspense>
      ),

      children: mapRoutes(mainRoutes),
    },
    {
      path: "app",
      element: (
        <Suspense fallback={<>loading layout ...</>}>
          <AppLayout />
        </Suspense>
      ),
      // TODO: implement logged loader
      /* loader: () => {
        const user = localStorage.getItem("a");
        if (!user) {
          return redirect("/login");
        }
      }, */
      children: mapRoutes(appRoutes),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default AppRoutes;
