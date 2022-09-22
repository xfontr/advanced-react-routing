import { RouteType } from "../types/IRoutes";
import { Route, Navigate } from "react-router-dom";
import RouteProtector from "./RouteProtector";

type RouteSelectorProps = {
  route: RouteType;
  isLogged: boolean;
};

const RouteSelector = ({
  route,
  isLogged,
}: RouteSelectorProps): JSX.Element => {
  const { path, renders } = route;

  return (
    <>
      {renders === "always" && (
        <Route
          key={path}
          path={path}
          element={
            route.Page ? (
              <route.Page key={`${path}-route`} />
            ) : (
              <Navigate to={route.navigate!} key={`${path}-redirects`} />
            )
          }
        />
      )}

      {renders === "logged" && (
        <Route
          key={`${path}-protector`}
          path={path}
          element={
            <RouteProtector isProtected={!isLogged} key={`${path}-protect`} />
          }
        >
          <Route
            key={path}
            path={path}
            element={route.Page && <route.Page key={`${path}-route`} />}
          />
        </Route>
      )}

      {renders === "loggedOut" && (
        <Route
          key={`${path}-protector`}
          path={path}
          element={
            <RouteProtector isProtected={isLogged} key={`${path}-protect`} />
          }
        >
          <Route
            key={path}
            path={path}
            element={route.Page && <route.Page key={`${path}-route`} />}
          />
        </Route>
      )}
    </>
  );
};

export default RouteSelector;
