import { Navigate, Outlet } from "react-router-dom";
import paths from "../configs/paths";

type RouteProtectorProps = {
  isProtected: boolean;
};

const RouteProtector = ({ isProtected }: RouteProtectorProps): JSX.Element =>
  isProtected ? <Navigate to={paths.home} /> : <Outlet />;

export default RouteProtector;
