import { Link } from "react-router-dom";
import IRoutes from "../types/IRoutes";

type NavigationLinksProps = {
  routes: IRoutes;
  isLogged: boolean;
};

const NavigationLinks = ({
  routes,
  isLogged,
}: NavigationLinksProps): JSX.Element => (
  <>
    {routes.map(
      (route) =>
        route.name && (
          <li key={route.name}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        )
    )}
  </>
);

export default NavigationLinks;
