import routes from "../routes";
import { Route, Routes, Navigate } from "react-router-dom";

const RenderRoutes = (): JSX.Element => (
  <Routes>
    {routes.map(({ path, Page, navigate }) => (
      <Route
        key={path}
        path={path}
        element={Page ? <Page /> : <Navigate to={navigate} />}
      />
    ))}
  </Routes>
);

export default RenderRoutes;
