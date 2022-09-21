import paths from "./configs/paths";
import DummyPage1 from "./pages/DummyPage1";
import DummyPage2 from "./pages/DummyPage2";

const routes = [
  {
    path: paths.home,
    Page: DummyPage1,
  },
  {
    path: paths.contact,
    Page: DummyPage2,
  },
];

export default routes;
