import routes from "../routes";
import { Route, Routes } from "react-router-dom";

const RenderRoutes = (): JSX.Element => (
  <Routes>
    {routes.map(({ path, Page }) => (
      <Route key={path} path={path} element={<Page />} />
    ))}
  </Routes>
);

export default RenderRoutes;
