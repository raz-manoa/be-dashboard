import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Spin from "./Components/General/Spin/Spin";
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
        <Suspense
          fallback={<Spin variant="fill" style={{ height: "100vh" }} />}
        >
          <DefaultLayout />
        </Suspense>
      ),

      children: mapRoutes(mainRoutes),
    },
    {
      path: "app",
      element: (
        <Suspense
          fallback={<Spin variant="fill" style={{ height: "100vh" }} />}
        >
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
  ], { basename: "/companies" });
  return <RouterProvider router={router} />;
}

export default AppRoutes;
