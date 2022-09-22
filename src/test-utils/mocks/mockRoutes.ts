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
    renders: "always",
    navigate: paths.contact,
  },
  {
    path: paths.contact,
    renders: "logged",
    Page: lazy(() => import("../../pages/DummyPage2")),
  },
];

export default mockRoutes;
