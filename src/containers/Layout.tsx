import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import NavigationLinks from "../components/NavigationLinks";
import routes from "../routes";

type LayoutProps = {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
};

const Layout = ({
  isLogged,
  setIsLogged,
  children,
}: LayoutProps): JSX.Element => (
  <>
    <header>
      <Button type="button" onClick={() => setIsLogged(!isLogged)}>
        {isLogged ? "Log out" : "Log in"}
      </Button>
      <nav>
        <NavigationLinks routes={routes} isLogged={isLogged} />
      </nav>
    </header>

    <main>{children}</main>
  </>
);

export default Layout;
