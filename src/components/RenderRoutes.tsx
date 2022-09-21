import { Route, Routes, Navigate } from "react-router-dom";
import routes from "../routes";

type RenderRoutesProps = {
  routes: typeof routes;
};

const RenderRoutes = ({ routes }: RenderRoutesProps): JSX.Element => (
  <Routes>
    {routes.map(({ path, Page, navigate }) => (
      <Route
        key={path}
        path={path}
        element={Page ? <Page /> : <Navigate to={navigate!} />}
      />
    ))}
  </Routes>
);

export default RenderRoutes;
