import { lazy } from "react";
import paths from "./configs/paths";

const routes = [
  {
    path: paths.root,
    navigate: paths.home,
  },
  {
    path: paths.home,
    Page: lazy(() => import("./pages/DummyPage1")),
  },
  {
    path: paths.contact,
    Page: lazy(() => import("./pages/DummyPage2")),
  },
  {
    path: paths.notFound,
    Page: lazy(() => import("./pages/NotFoundPage")),
  },
];

export default routes;
