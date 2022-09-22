import { ReactNode } from "react";
import Button from "../components/Button";

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
    </header>

    <main>{children}</main>
  </>
);

export default Layout;
