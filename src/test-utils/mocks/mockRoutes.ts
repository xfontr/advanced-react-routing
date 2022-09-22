import { lazy } from "react";
import paths from "../../configs/paths";
import IRoutes from "../../types/IRoutes";

const mockRoutes: IRoutes = [
  {
    path: paths.root,
    renders: "always",
    Page: lazy(() => import("../../pages/DummyPage1")),
  },
  {
    path: paths.home,
    name: "Home",
    renders: "always",
    navigate: paths.contact,
  },
  {
    path: paths.contact,
    name: "Contact",
    renders: "logged",
    Page: lazy(() => import("../../pages/DummyPage2")),
  },
  {
    path: paths.contact,
    renders: "loggedOut",
    Page: lazy(() => import("../../pages/DummyPage2")),
  },
];

export default mockRoutes;
