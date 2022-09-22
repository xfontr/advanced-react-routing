import RenderRoutes from "./components/RenderRoutes";
import { Suspense, useState } from "react";
import routes from "./routes";
import Button from "./components/Button";

const App = (): JSX.Element => {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  return (
    <div className="app">
      <header>
        <Button type="button" onClick={() => setIsLogged(!isLogged)}>
          {isLogged ? "Log out" : "Log in"}
        </Button>
      </header>

      <Suspense fallback="Loading...">
        <RenderRoutes routes={routes} isLogged={isLogged} />
      </Suspense>
    </div>
  );
};

export default App;
