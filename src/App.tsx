import RenderRoutes from "./components/RenderRoutes";
import { Suspense, useState } from "react";
import routes from "./routes";
import Layout from "./containers/Layout";

const App = (): JSX.Element => {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  return (
    <div className="app">
      <Layout isLogged={isLogged} setIsLogged={setIsLogged}>
        <Suspense fallback="Loading...">
          <RenderRoutes routes={routes} isLogged={isLogged} />
        </Suspense>
      </Layout>
    </div>
  );
};

export default App;
