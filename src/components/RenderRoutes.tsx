import { Routes } from "react-router-dom";
import RouteSelector from "../containers/RouteSelector";
import routes from "../routes";

type RenderRoutesProps = {
  routes: typeof routes;
  isLogged: boolean;
};

const RenderRoutes = ({ routes, isLogged }: RenderRoutesProps): JSX.Element => (
  <Routes>{routes.map((route) => RouteSelector({ route, isLogged }))}</Routes>
);

export default RenderRoutes;
