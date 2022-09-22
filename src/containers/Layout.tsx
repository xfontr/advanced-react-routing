import { ReactNode } from "react";
import Button from "../components/Button";
import NavigationLinks from "../components/NavigationLinks";
import routes from "../routes";
import "./css/Layout.css";

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
    <header className="instructions__header">
      <div className="instructions__container">
        <p>
          Welcome! This is a React project that generates routes and navigation
          links automatically from a source object. It also protects said routes
          from logged in or logged out users, depending on the case.
        </p>
      </div>

      <nav className="instructions__container">
        <span className="instructions__text">
          These links will route you to dummy pages
        </span>
        <ul>
          <NavigationLinks routes={routes} isLogged={isLogged} />
        </ul>
      </nav>

      <div className="instructions__container">
        <span className="instructions__text">
          Log the user in or out and see the avaliable routes
        </span>
        <Button type="button" onClick={() => setIsLogged(!isLogged)}>
          {isLogged ? "Log out" : "Log in"}
        </Button>
      </div>
    </header>

    <main className="instructions__container">
      <span className="instructions__text">
        Here you will see that the page changes, but don't forget to check the
        URL's path!
      </span>
      {children}
    </main>

    <footer className="instructions__container instructions__footer">
      <p>
        This is a scalable solution that allows to implement both routes and
        navigation links from a simple object, alltogether with React's lazy and
        suspense functions.
      </p>
      <p>
        You can pretty much copy and paste the Github repository (this is an
        open source project) and it should work for any project with React and
        react-router-dom. Any suggestions are more than welcome!
      </p>
      <a href="https://github.com/xfontr/advanced-react-routing">
        Github repository
      </a>
    </footer>
  </>
);

export default Layout;
